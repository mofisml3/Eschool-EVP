import { t } from '@/i18n';

export function Footer() {
  return (
    <footer className="bg-brand-primary-dark text-white px-6 py-4 flex-shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm">
        <p className="m-0">{t('shell.footer.identity')}</p>
        <p className="m-0 opacity-80 text-center">
          {t('shell.footer.version')}
        </p>
        <p className="m-0 opacity-80">{t('shell.footer.copyright')}</p>
      </div>
    </footer>
  );
}
