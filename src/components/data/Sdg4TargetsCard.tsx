import { Check, CircleDot, X } from 'lucide-react';
import { t } from '@/i18n';
import type { Sdg4Target } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: Sdg4Target[] };

const statusConfig: Record<
  Sdg4Target['status'],
  { label: () => string; bg: string; text: string; Icon: typeof Check }
> = {
  covered: {
    label: () => t('impact.sdg4.covered'),
    bg: 'bg-brand-secondary-light',
    text: 'text-brand-secondary-dark',
    Icon: Check,
  },
  partial: {
    label: () => t('impact.sdg4.partial'),
    bg: 'bg-state-warning-bg',
    text: 'text-state-warning-text',
    Icon: CircleDot,
  },
  'out-of-scope': {
    label: () => t('impact.sdg4.outOfScope'),
    bg: 'bg-ink-100',
    text: 'text-ink-500',
    Icon: X,
  },
};

export function Sdg4TargetsCard({ data }: Props) {
  return (
    <ChartCard title={t('impact.sdg4.title')} insight={t('impact.sdg4.insight')}>
      <ul className="flex flex-col gap-2">
        {data.map((target) => {
          const cfg = statusConfig[target.status];
          return (
            <li
              key={target.id}
              className={`${cfg.bg} rounded-card p-3 flex items-center gap-3`}
            >
              <span
                className={`${cfg.text} w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0`}
                aria-hidden="true"
              >
                <cfg.Icon size={14} />
              </span>
              <span
                className="text-xs font-semibold text-ink-900 flex-shrink-0 tabular-nums"
                dir="ltr"
              >
                {target.id}
              </span>
              <span className="text-sm text-ink-700 flex-1 min-w-0 leading-snug">
                {target.title}
              </span>
              <span className={`${cfg.text} text-xs font-medium flex-shrink-0`}>
                {cfg.label()}
              </span>
            </li>
          );
        })}
      </ul>
    </ChartCard>
  );
}
