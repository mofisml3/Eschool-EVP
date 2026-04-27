import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { t } from '@/i18n';
import { ChartCard } from './ChartCard';

type ContentFootprintData = {
  videoLessons: number;
  contentHours: number;
  interactiveExperiments: number;
  subjectsCovered: number;
};

type Stat = { value: number; unit: string };

export function ContentFootprintCard({ data }: { data: ContentFootprintData }) {
  const stats: Stat[] = [
    { value: data.videoLessons, unit: t('overview.content.units.lessons') },
    { value: data.contentHours, unit: t('overview.content.units.hours') },
    {
      value: data.interactiveExperiments,
      unit: t('overview.content.units.experiments'),
    },
    {
      value: data.subjectsCovered,
      unit: t('overview.content.units.subjects'),
    },
  ];

  return (
    <ChartCard
      title={t('overview.content.title')}
      insight={t('overview.content.insight')}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-brand-primary-light rounded-card p-4 md:p-5 text-center flex flex-col gap-2"
          >
            <p className="text-2xl md:text-3xl font-bold text-brand-primary m-0 leading-none">
              {s.value.toLocaleString('en-US')}
            </p>
            <p className="text-xs md:text-sm text-ink-700 m-0">{s.unit}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-end">
        <Link
          to="/portal/content/videos"
          className="inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-primary-dark font-medium"
        >
          <span>{t('overview.content.cta')}</span>
          <ArrowLeft size={14} aria-hidden="true" />
        </Link>
      </div>
    </ChartCard>
  );
}
