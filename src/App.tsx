import { t } from '@/i18n';

function App() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="h-1 w-24 rounded-full bg-gradient-to-l from-brand-secondary to-brand-primary" />
      <h1 className="text-3xl md:text-4xl font-semibold text-brand-primary m-0">
        {t('login.heroLine1')}
      </h1>
      <p className="text-ink-700 m-0 text-base md:text-lg max-w-xl">
        {t('login.welcomeSubtitle')}
      </p>
      <p className="text-ink-500 m-0 text-sm">
        {t('shell.nav.version')} — جميع النصوص مصدرها قاموس الترجمة
      </p>
    </main>
  );
}

export default App;
