import { Sparkles, BookMarked, MailOpen } from 'lucide-react';
import { t } from '@/i18n';
import type { CareWellbeing } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: CareWellbeing };

export function CareWellbeingCard({ data }: Props) {
  const items = [
    { Icon: Sparkles, value: data.counselingSessionsThisMonth, label: t('care.wellbeing.counseling') },
    { Icon: BookMarked, value: data.academicFollowupsForAtRiskLearners, label: t('care.wellbeing.followups') },
    { Icon: MailOpen, value: data.parentCommunicationsThisMonth, label: t('care.wellbeing.parents') },
  ];
  return (
    <ChartCard title={t('care.wellbeing.title')} insight={t('care.wellbeing.insight')}>
      <ul className="flex flex-col gap-3">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center gap-3 pb-3 last:pb-0 border-b last:border-b-0 border-ink-100"
          >
            <span className="w-10 h-10 rounded-full bg-brand-primary-light text-brand-primary flex items-center justify-center flex-shrink-0">
              <it.Icon size={18} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xl font-bold text-brand-primary m-0 leading-tight" dir="ltr" style={{ textAlign: 'start' }}>
                {it.value.toLocaleString('en-US')}
              </p>
              <p className="text-xs text-ink-700 m-0 mt-0.5 leading-snug">{it.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
