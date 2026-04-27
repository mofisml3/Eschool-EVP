import { Captions, MonitorPlay } from 'lucide-react';
import { t } from '@/i18n';
import type { VideosQualityIndicators } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: VideosQualityIndicators };

export function QualityIndicatorsCard({ data }: Props) {
  const items = [
    {
      Icon: MonitorPlay,
      value: data.hdCoveragePercent,
      label: t('videos.quality.hd'),
      color: 'brand-primary' as const,
    },
    {
      Icon: Captions,
      value: data.captionsCoveragePercent,
      label: t('videos.quality.captions'),
      color: 'brand-secondary' as const,
    },
  ];

  return (
    <ChartCard
      title={t('videos.quality.title')}
      insight={t('videos.quality.insight')}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`rounded-card p-5 flex items-center gap-4 ${
              item.color === 'brand-primary'
                ? 'bg-brand-primary-light'
                : 'bg-brand-secondary-light'
            }`}
          >
            <span
              className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                item.color === 'brand-primary'
                  ? 'bg-white text-brand-primary'
                  : 'bg-white text-brand-secondary-dark'
              }`}
            >
              <item.Icon size={22} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p
                className={`text-3xl font-bold m-0 leading-none ${
                  item.color === 'brand-primary'
                    ? 'text-brand-primary'
                    : 'text-brand-secondary-dark'
                }`}
              >
                <span dir="ltr">{item.value}</span>٪
              </p>
              <p className="text-xs text-ink-700 m-0 mt-2 leading-snug">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-ink-500 mt-3 m-0">
        {t('videos.quality.footnote')}
      </p>
    </ChartCard>
  );
}
