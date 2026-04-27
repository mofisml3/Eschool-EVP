import { Heart, School, Hand } from 'lucide-react';
import { t } from '@/i18n';
import type { CareInclusion } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: CareInclusion };

export function CareInclusionCard({ data }: Props) {
  const items = [
    { Icon: Heart, value: data.specialNeedsLearnersSupported, label: t('care.inclusion.specialNeeds') },
    { Icon: School, value: data.specialEducationSchoolsServed, label: t('care.inclusion.schools') },
    { Icon: Hand, value: data.signLanguageLessons, label: t('care.inclusion.signLanguage') },
  ];
  return (
    <ChartCard title={t('care.inclusion.title')} insight={t('care.inclusion.insight')}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div key={i} className="bg-brand-secondary-light rounded-card p-5 flex flex-col gap-2 items-start">
            <span className="w-10 h-10 rounded-full bg-white text-brand-secondary-dark flex items-center justify-center">
              <it.Icon size={18} aria-hidden="true" />
            </span>
            <p className="text-3xl font-bold text-brand-secondary-dark m-0 leading-none" dir="ltr">
              {it.value.toLocaleString('en-US')}
            </p>
            <p className="text-xs text-ink-700 m-0 leading-snug">{it.label}</p>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
