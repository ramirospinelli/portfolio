import { useState } from 'react';

import i18n from '@/pages/i18n';
import { Section } from '@/shared/Section';

const LanguagePicker = () => {
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <Section>
      <div className="flex items-center justify-end">
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          value={language}
          className="bg-slate-900"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </Section>
  );
};

export default LanguagePicker;
