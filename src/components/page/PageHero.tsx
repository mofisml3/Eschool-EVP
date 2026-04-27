import type { ReactNode } from 'react';
import { Calendar } from 'lucide-react';
import { t } from '@/i18n';
import { formatDateTime } from '@/utils/format';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  lastUpdatedAt?: string;
  rightSlot?: ReactNode;
};

export function PageHero({
  title,
  subtitle,
  lastUpdatedAt,
  rightSlot,
}: PageHeroProps) {
  return (
    <div className="bg-white rounded-card-lg shadow-card p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl md:text-2xl font-semibold text-brand-primary m-0 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-ink-700 m-0 mt-2 leading-relaxed">
              {subtitle}
            </p>
          )}
          {lastUpdatedAt && (
            <p className="text-xs text-ink-500 m-0 mt-3 inline-flex items-center gap-1.5">
              <Calendar size={12} aria-hidden="true" />
              <span>
                {t('shell.common.lastUpdated')} {formatDateTime(lastUpdatedAt)}
              </span>
            </p>
          )}
        </div>
        {rightSlot && <div className="flex-shrink-0">{rightSlot}</div>}
      </div>
    </div>
  );
}
