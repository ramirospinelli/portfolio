import { Section } from '@/shared/Section';

import LanguagePicker from './LanguagePicker';
import Social from './Social';

const Header = () => (
  <Section>
    <div className="flex justify-between">
      <Social />
      <LanguagePicker />
    </div>
  </Section>
);

export default Header;
