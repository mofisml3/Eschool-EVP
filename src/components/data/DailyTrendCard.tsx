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
import { loadDailyEngagement } from '@/services/dataService';
import type { DailyTrendPayload } from '@/data/types';
import { ChartCard } from './ChartCard';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';

const dateFmtShort = new Intl.DateTimeFormat('ar-IQ-u-nu-latn-ca-gregory', {
  day: 'numeric',
  month: 'short',
});
const dateFmtFull = new Intl.DateTimeFormat('ar-IQ-u-nu-latn-ca-gregory', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function formatDateShort(iso: string): string {
  return dateFmtShort.format(new Date(iso));
}

function formatDateFull(iso: string): string {
  return dateFmtFull.format(new Date(iso));
}

function formatYTick(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)} م`;
  if (v >= 1_000) return `${Math.round(v / 1_000)} ك`;
  return String(v);
}

export function DailyTrendCard() {
  const loader = useCallback(() => loadDailyEngagement(), []);
  const { state, reload } = useAsyncData<DailyTrendPayload>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('engagement.dailyTrend.title')}>
        <LoadingState />
      </ChartCard>
    );
  }

  if (state.status === 'error') {
    return (
      <ChartCard title={t('engagement.dailyTrend.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }

  return <DailyTrendInner data={state.data} />;
}

function DailyTrendInner({ data }: { data: DailyTrendPayload }) {
  return (
    <ChartCard
      title={t('engagement.dailyTrend.title')}
      insight={t('engagement.dailyTrend.insight')}
      source={t('engagement.dailyTrend.source')}
      rightSlot={
        <span className="text-xs text-ink-500 whitespace-nowrap">
          {t('engagement.dailyTrend.period')}
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
              <linearGradient id="daily-trend-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#08798C" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#08798C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E3E8EB"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickFormatter={formatDateShort}
              tick={{ fill: '#6B7A82', fontSize: 11 }}
              axisLine={{ stroke: '#E3E8EB' }}
              tickLine={false}
              minTickGap={20}
              reversed
            />
            <YAxis
              tickFormatter={formatYTick}
              tick={{ fill: '#6B7A82', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={48}
              orientation="right"
            />
            <Tooltip
              cursor={{ stroke: '#08798C', strokeOpacity: 0.2 }}
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                const value = payload[0]?.value as number;
                return (
                  <div
                    dir="rtl"
                    className="bg-white border border-ink-200 rounded-card shadow-card-hover px-3 py-2 text-xs"
                  >
                    <p className="m-0 text-ink-500">
                      {formatDateFull(label as string)}
                    </p>
                    <p className="m-0 mt-1 font-semibold text-brand-primary">
                      <span dir="ltr">{value.toLocaleString('en-US')}</span>{' '}
                      {t('engagement.dailyTrend.unit')}
                    </p>
                  </div>
                );
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#08798C"
              strokeWidth={2.5}
              fill="url(#daily-trend-fill)"
              isAnimationActive={false}
              dot={false}
              activeDot={{
                r: 5,
                fill: '#08798C',
                stroke: '#FFFFFF',
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
