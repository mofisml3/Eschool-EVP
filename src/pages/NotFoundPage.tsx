import { Link } from 'react-router-dom';
import { t } from '@/i18n';

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-2xl font-semibold text-brand-primary m-0">
        {t('shell.states.error404')}
      </h1>
      <Link
        to="/"
        className="text-brand-primary hover:text-brand-primary-dark underline"
      >
        {t('shell.buttons.back')}
      </Link>
    </main>
  );
}
