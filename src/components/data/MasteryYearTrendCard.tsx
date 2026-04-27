import { useCallback } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadAssessmentsYearTrend } from '@/services/dataService';
import type { TrendPayload } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

const monthShort = new Intl.DateTimeFormat('ar-IQ-u-nu-latn-ca-gregory', {
  month: 'short',
});
const monthLong = new Intl.DateTimeFormat('ar-IQ-u-nu-latn-ca-gregory', {
  month: 'long',
  year: 'numeric',
});

function parseMonth(yyyymm: string): Date {
  const [y, m] = yyyymm.split('-').map(Number);
  return new Date(y!, (m ?? 1) - 1, 1);
}

export function MasteryYearTrendCard() {
  const loader = useCallback(() => loadAssessmentsYearTrend(), []);
  const { state, reload } = useAsyncData<TrendPayload>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('assessments.yearTrend.title')}>
        <LoadingState />
      </ChartCard>
    );
  }
  if (state.status === 'error') {
    return (
      <ChartCard title={t('assessments.yearTrend.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }
  return <Inner data={state.data} />;
}

function Inner({ data }: { data: TrendPayload }) {
  return (
    <ChartCard
      title={t('assessments.yearTrend.title')}
      insight={t('assessments.yearTrend.insight')}
      source={t('assessments.yearTrend.source')}
      rightSlot={
        <span className="text-xs text-ink-500 whitespace-nowrap">
          {t('assessments.yearTrend.period')}
        </span>
      }
    >
      <div className="h-72 w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data.points}
            margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
          >
            <defs>
              <linearGradient id="mastery-trend-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#71B36E" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#71B36E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E3E8EB" vertical={false} />
            <XAxis
              dataKey="month"
              tickFormatter={(m) => monthShort.format(parseMonth(m))}
              tick={{ fill: '#6B7A82', fontSize: 11 }}
              axisLine={{ stroke: '#E3E8EB' }}
              tickLine={false}
              minTickGap={8}
              reversed
            />
            <YAxis
              tickFormatter={(v) => `${v}٪`}
              domain={[60, 85]}
              tick={{ fill: '#6B7A82', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={48}
              orientation="right"
            />
            <Tooltip
              cursor={{ stroke: '#71B36E', strokeOpacity: 0.25 }}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                const value = payload[0]?.value as number;
                return (
                  <div
                    dir="rtl"
                    className="bg-white border border-ink-200 rounded-card shadow-card-hover px-3 py-2 text-xs"
                  >
                    <p className="m-0 text-ink-500">
                      {monthLong.format(parseMonth(label as string))}
                    </p>
                    <p className="m-0 mt-1 font-semibold text-brand-secondary-dark">
                      <span dir="ltr">{value.toFixed(1)}٪</span>{' '}
                      {t('assessments.yearTrend.unit')}
                    </p>
                  </div>
                );
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#558E54"
              strokeWidth={2.5}
              fill="url(#mastery-trend-fill)"
              isAnimationActive={false}
              dot={false}
              activeDot={{ r: 5, fill: '#558E54', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
