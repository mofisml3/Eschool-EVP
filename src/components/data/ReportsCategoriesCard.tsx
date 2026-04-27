import { t } from '@/i18n';
import type { ReportCategory } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = {
  categories: ReportCategory[];
  activeId: string | null;
  onChange: (id: string | null) => void;
};

export function ReportsCategoriesCard({ categories, activeId, onChange }: Props) {
  const total = categories.reduce((sum, c) => sum + c.count, 0);

  return (
    <ChartCard title={t('reports.categories.title')}>
      <ul className="flex flex-wrap gap-2">
        <li>
          <button
            type="button"
            onClick={() => onChange(null)}
            className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
              activeId === null
                ? 'bg-brand-primary text-white'
                : 'bg-ink-100 text-ink-700 hover:bg-brand-primary-light hover:text-brand-primary'
            }`}
          >
            <span>{t('reports.categories.all')}</span>{' '}
            <span dir="ltr" className="text-xs opacity-80">
              ({total})
            </span>
          </button>
        </li>
        {categories.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              onClick={() => onChange(c.id)}
              className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                activeId === c.id
                  ? 'bg-brand-primary text-white'
                  : 'bg-ink-100 text-ink-700 hover:bg-brand-primary-light hover:text-brand-primary'
              }`}
            >
              <span>{c.label}</span>{' '}
              <span dir="ltr" className="text-xs opacity-80">
                ({c.count})
              </span>
            </button>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
