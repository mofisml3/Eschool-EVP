import { Star, Smile, Users } from 'lucide-react';
import { t } from '@/i18n';
import type { TeachersQualityIndicators } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: TeachersQualityIndicators };

export function TeachersQualityCard({ data }: Props) {
  return (
    <ChartCard
      title={t('teachers.quality.title')}
      insight={t('teachers.quality.insight')}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Peer review */}
        <div className="bg-brand-primary-light rounded-card p-5 flex flex-col items-start gap-3">
          <Star size={22} className="text-brand-primary" aria-hidden="true" />
          <p
            className="text-3xl font-bold text-brand-primary m-0 leading-none"
            dir="ltr"
          >
            {data.averagePeerReviewRating.toFixed(1)}{' '}
            <span className="text-base font-normal text-ink-500">
              {t('teachers.quality.outOf')}
            </span>
          </p>
          <p className="text-xs text-ink-700 m-0">{t('teachers.quality.peerReview')}</p>
        </div>

        {/* Learner satisfaction */}
        <div className="bg-brand-secondary-light rounded-card p-5 flex flex-col items-start gap-3">
          <Smile size={22} className="text-brand-secondary-dark" aria-hidden="true" />
          <p
            className="text-3xl font-bold text-brand-secondary-dark m-0 leading-none"
            dir="ltr"
          >
            {data.averageLearnerSatisfaction.toFixed(1)}{' '}
            <span className="text-base font-normal text-ink-500">
              {t('teachers.quality.outOf')}
            </span>
          </p>
          <p className="text-xs text-ink-700 m-0">
            {t('teachers.quality.satisfaction')}
          </p>
        </div>

        {/* Peer review participation */}
        <div className="bg-ink-100 rounded-card p-5 flex flex-col items-start gap-3">
          <Users size={22} className="text-ink-700" aria-hidden="true" />
          <p
            className="text-3xl font-bold text-ink-900 m-0 leading-none"
            dir="ltr"
          >
            {data.peerReviewParticipationPercent}٪
          </p>
          <p className="text-xs text-ink-700 m-0">
            {t('teachers.quality.participation')}
          </p>
        </div>
      </div>
    </ChartCard>
  );
}
