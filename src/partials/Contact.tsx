import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import type { I18NProps } from '@/i18n';
import { getI18N } from '@/i18n';
import { GradientText } from '@/shared/Gradient';
import { Section } from '@/shared/Section';

const Contact = ({ currentLocale }: I18NProps) => {
  const i18n = getI18N({ currentLocale });
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_0k4fmta',
        'template_um83ljt',
        {
          from_name: form.name,
          to_name: 'Ramiro',
          from_email: form.email,
          to_email: 'youremail@gmail.com',
          message: form.message,
        },
        'g_Tyt26s8EzPcorh5',
      )
      .then(
        () => {
          // eslint-disable-next-line no-alert, no-undef
          alert(i18n.alert.success);

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          // eslint-disable-next-line no-alert, no-undef
          alert(`${i18n.alert.error} ${error}`);
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <Section
      title={
        <>
          {i18n.contact_title.part1}
          <GradientText>{i18n.contact_title.part2}</GradientText> 📩
        </>
      }>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col gap-6">
        <label className="flex flex-col">
          <span className="mb-4 font-medium">{i18n.name.label}</span>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={i18n.name.placeholder}
            className="
              rounded-lg
              border-none border-l-amber-50 px-6
              py-4 font-medium
              text-slate-900 outline-none"
          />
        </label>
        <label className="flex flex-col">
          <span className=" mb-4 font-medium">{i18n.email.label}</span>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={i18n.email.placeholder}
            className="
              rounded-lg
              border-none px-6 py-4
              font-medium text-slate-900 outline-none"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-4 font-medium">{i18n.message.label}</span>
          <textarea
            required
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder={i18n.message.placeholder}
            className="
              resize-none
              rounded-lg border-none px-6
              py-4 font-medium text-slate-900 outline-none"
          />
        </label>

        <button
          type="submit"
          className="h-8 rounded  bg-sky-500 px-4 font-bold text-white hover:bg-cyan-400"
          disabled={loading}>
          <h1>{loading ? i18n.button.sending : i18n.button.send}</h1>
        </button>
      </form>
    </Section>
  );
};

export default Contact;
