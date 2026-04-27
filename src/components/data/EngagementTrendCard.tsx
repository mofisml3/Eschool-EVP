import { useCallback } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { t } from '@/i18n';
import { useAsyncData } from '@/hooks/useAsyncData';
import { loadEngagementTrend } from '@/services/dataService';
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

function formatTickMonth(yyyymm: string): string {
  return monthShort.format(parseMonth(yyyymm));
}

function formatTooltipMonth(yyyymm: string): string {
  return monthLong.format(parseMonth(yyyymm));
}

function formatYTick(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)} م`;
  if (v >= 1_000) return `${Math.round(v / 1_000)} ك`;
  return String(v);
}

export function EngagementTrendCard() {
  const loader = useCallback(() => loadEngagementTrend(), []);
  const { state, reload } = useAsyncData<TrendPayload>(loader);

  if (state.status === 'loading') {
    return (
      <ChartCard title={t('overview.engagement.title')}>
        <LoadingState />
      </ChartCard>
    );
  }

  if (state.status === 'error') {
    return (
      <ChartCard title={t('overview.engagement.title')}>
        <ErrorState onRetry={reload} />
      </ChartCard>
    );
  }

  return <EngagementTrendInner data={state.data} />;
}

function EngagementTrendInner({ data }: { data: TrendPayload }) {
  return (
    <ChartCard
      title={t('overview.engagement.title')}
      insight={t('overview.engagement.insight')}
      source={t('overview.engagement.source')}
      rightSlot={
        <span className="text-xs text-ink-500 whitespace-nowrap">
          {t('overview.engagement.period')}
        </span>
      }
    >
      <div className="h-64 w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data.points}
            margin={{ top: 8, right: 8, left: 8, bottom: 8 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E3E8EB"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              tickFormatter={formatTickMonth}
              tick={{ fill: '#6B7A82', fontSize: 11 }}
              axisLine={{ stroke: '#E3E8EB' }}
              tickLine={false}
              minTickGap={8}
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
                      {formatTooltipMonth(label as string)}
                    </p>
                    <p className="m-0 mt-1 font-semibold text-brand-primary">
                      <span dir="ltr">{value.toLocaleString('en-US')}</span>{' '}
                      {t('overview.engagement.unit')}
                    </p>
                  </div>
                );
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#08798C"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: '#08798C', stroke: '#FFFFFF', strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
