const LanguagePicker = () => {
  // eslint-disable-next-line no-undef
  const language = window.location.pathname.replaceAll('/', '');

  return (
    <div className="flex items-center justify-end">
      {language === '' && <a href="/es/">Español</a>}
      {language === 'es' && <a href="/">English</a>}
    </div>
  );
};

export default LanguagePicker;
