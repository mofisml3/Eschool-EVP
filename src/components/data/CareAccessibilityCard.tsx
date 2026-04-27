import { Captions, Eye, Contrast } from 'lucide-react';
import { t } from '@/i18n';
import type { CareAccessibility } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: CareAccessibility };

export function CareAccessibilityCard({ data }: Props) {
  const items = [
    { Icon: Captions, value: data.captionsCoveragePercent, label: t('care.accessibility.captions') },
    { Icon: Eye, value: data.screenReaderCompatibilityPercent, label: t('care.accessibility.screenReader') },
    { Icon: Contrast, value: data.highContrastAndZoomSupportPercent, label: t('care.accessibility.contrast') },
  ];
  return (
    <ChartCard title={t('care.accessibility.title')} insight={t('care.accessibility.insight')}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div key={i} className="bg-brand-primary-light rounded-card p-5 flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-white text-brand-primary flex items-center justify-center flex-shrink-0">
              <it.Icon size={20} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-3xl font-bold text-brand-primary m-0 leading-none" dir="ltr">
                {it.value}٪
              </p>
              <p className="text-xs text-ink-700 m-0 mt-1 leading-snug">{it.label}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-ink-500 mt-3 m-0">{t('care.accessibility.footnote')}</p>
    </ChartCard>
  );
}
