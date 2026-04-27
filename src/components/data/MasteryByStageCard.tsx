import { t } from '@/i18n';
import type { AssessmentsMasteryByStage } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: AssessmentsMasteryByStage[] };

const stageColor: Record<AssessmentsMasteryByStage['stageId'], string> = {
  primary: '#A5B5BB',
  middle: '#08798C',
  secondary: '#71B36E',
};

export function MasteryByStageCard({ data }: Props) {
  return (
    <ChartCard
      title={t('assessments.stageMastery.title')}
      insight={t('assessments.stageMastery.insight')}
    >
      <ul className="flex flex-col gap-4">
        {data.map((s) => (
          <li key={s.stageId} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-semibold text-ink-900">{s.label}</span>
              <span
                className="text-sm font-bold tabular-nums"
                dir="ltr"
                style={{ color: stageColor[s.stageId] }}
              >
                {s.masteryPercent}٪
              </span>
            </div>
            <div className="h-3 bg-ink-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${s.masteryPercent}%`,
                  backgroundColor: stageColor[s.stageId],
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}
