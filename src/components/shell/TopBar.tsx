import { Link } from 'react-router-dom';
import { Logo } from '@/components/brand/Logo';
import { SessionMenu } from './SessionMenu';
import { t } from '@/i18n';

type TopBarProps = {
  pageTitle: string;
};

/**
 * In RTL: with `justify-between`, the first DOM child sits at the visual
 * right (start) and the last at the visual left (end). So Logo→right,
 * page title→center, SessionMenu→left, matching the wireframe.
 */
export function TopBar({ pageTitle }: TopBarProps) {
  return (
    <header className="h-16 bg-white border-b border-ink-200 px-4 md:px-6 flex items-center justify-between flex-shrink-0">
      <Link
        to="/portal/overview"
        title={t('shell.topBar.logoTooltip')}
        aria-label={t('shell.topBar.logoTooltip')}
        className="flex-shrink-0"
      >
        <Logo size="sm" />
      </Link>

      <h1 className="text-base md:text-lg font-semibold text-brand-primary m-0 truncate px-3">
        {pageTitle}
      </h1>

      <SessionMenu />
    </header>
  );
}
