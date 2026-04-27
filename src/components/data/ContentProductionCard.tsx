import { PlayCircle, FlaskConical, ClipboardCheck } from 'lucide-react';
import { t } from '@/i18n';
import type { TeachersContentBreakdown } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: TeachersContentBreakdown };

export function ContentProductionCard({ data }: Props) {
  const items = [
    {
      Icon: PlayCircle,
      value: data.videoLessonsAuthored,
      label: t('teachers.content.lessons'),
    },
    {
      Icon: FlaskConical,
      value: data.experimentsAuthored,
      label: t('teachers.content.experiments'),
    },
    {
      Icon: ClipboardCheck,
      value: data.assessmentsAuthored,
      label: t('teachers.content.assessments'),
    },
  ];
  return (
    <ChartCard
      title={t('teachers.content.title')}
      insight={t('teachers.content.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div
            key={i}
            className="bg-brand-primary-light rounded-card p-5 flex flex-col gap-2 items-start"
          >
            <span className="w-10 h-10 rounded-full bg-white text-brand-primary flex items-center justify-center">
              <it.Icon size={18} aria-hidden="true" />
            </span>
            <p
              className="text-3xl font-bold text-brand-primary m-0 leading-none"
              dir="ltr"
            >
              {it.value.toLocaleString('en-US')}
            </p>
            <p className="text-xs text-ink-700 m-0">{it.label}</p>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
