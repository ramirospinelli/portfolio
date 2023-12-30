import english from './en.json';
import spanish from './es.json';

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es',
};

export const getI18N = ({ currentLocale = 'en' }: I18NProps) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  return spanish;
};

export interface I18NProps {
  currentLocale: string | undefined;
}
