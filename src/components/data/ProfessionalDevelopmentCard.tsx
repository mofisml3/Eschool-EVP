import { Award, Clock, GraduationCap } from 'lucide-react';
import { t } from '@/i18n';
import type { TeachersProfessionalDevelopment } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: TeachersProfessionalDevelopment };

export function ProfessionalDevelopmentCard({ data }: Props) {
  const items = [
    {
      Icon: Award,
      value: data.certifiedTeachersCount.toLocaleString('en-US'),
      label: t('teachers.development.certified'),
    },
    {
      Icon: Clock,
      value: data.averageTrainingHoursPerYear.toString(),
      label: t('teachers.development.trainingHours'),
    },
    {
      Icon: GraduationCap,
      value: data.trainingProgramsCompletedThisYear.toLocaleString('en-US'),
      label: t('teachers.development.programs'),
    },
  ];
  return (
    <ChartCard
      title={t('teachers.development.title')}
      insight={t('teachers.development.insight')}
    >
      <ul className="flex flex-col gap-3">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-center gap-3 pb-3 last:pb-0 border-b last:border-b-0 border-ink-100"
          >
            <span className="w-10 h-10 rounded-full bg-brand-secondary-light text-brand-secondary-dark flex items-center justify-center flex-shrink-0">
              <it.Icon size={18} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p
                className="text-xl font-bold text-brand-primary m-0 leading-tight"
                dir="ltr"
                style={{ textAlign: 'start' }}
              >
                {it.value}
              </p>
              <p className="text-xs text-ink-700 m-0 mt-0.5 leading-snug">{it.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
