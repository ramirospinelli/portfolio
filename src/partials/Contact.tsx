import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { GradientText } from '@/shared/Gradient';
import { Section } from '@/shared/Section';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
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

    // sign up on emailjs.com (select the gmail service and connect your account).
    // click on create a new template then click on save.
    emailjs
      .send(
        'serviceID', // paste your ServiceID here (you'll get one when your service is created).
        'templateID', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'YourName', // put your name here.
          from_email: form.email,
          to_email: 'youremail@gmail.com', // put your email here.
          message: form.message,
        },
        'yourpublickey' // paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          alert('Something went wrong. Please try again.');
        }
      );
  };
  return (
    <Section>
      <div>
        <div className="flex flex-row gap-1 text-3xl font-bold">
          <h1>Get in</h1>
          <h1>
            <GradientText>Touch</GradientText>
          </h1>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="
              rounded-lg
              border-none border-l-amber-50 px-6
              py-4 font-medium
              text-slate-900 outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className=" mb-4 font-medium">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="
              rounded-lg
              border-none px-6 py-4
              font-medium text-slate-900 outline-none"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="
              resize-none
              rounded-lg border-none px-6
              py-4 font-medium text-slate-900 outline-none"
            />
          </label>

          <button
            type="submit"
            className="h-8 rounded  bg-sky-500 px-4 font-bold text-white hover:bg-cyan-400"
          >
            <h1>{loading ? 'Sending' : 'Send'}</h1>
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
