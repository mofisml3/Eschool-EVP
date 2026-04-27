import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { t } from '@/i18n';
import { ChartCard } from './ChartCard';

type SupportSnapshotData = {
  averageResponseMinutes: number;
  slaAdherencePercent: number;
  ticketsHandledThisMonth: number;
};

type Row = {
  Icon: LucideIcon;
  label: string;
  value: string;
};

export function SupportSnapshotCard({ data }: { data: SupportSnapshotData }) {
  const rows: Row[] = [
    {
      Icon: Clock,
      label: t('overview.support.metrics.responseTime'),
      value: `${data.averageResponseMinutes} ${t('overview.support.units.minutes')}`,
    },
    {
      Icon: ShieldCheck,
      label: t('overview.support.metrics.slaAdherence'),
      value: `${data.slaAdherencePercent}٪`,
    },
    {
      Icon: MessageCircle,
      label: t('overview.support.metrics.ticketsHandled'),
      value: data.ticketsHandledThisMonth.toLocaleString('en-US'),
    },
  ];

  return (
    <ChartCard
      title={t('overview.support.title')}
      insight={t('overview.support.insight')}
    >
      <ul className="flex flex-col gap-4">
        {rows.map((r, i) => (
          <li
            key={i}
            className="flex items-center gap-3 pb-3 last:pb-0 border-b last:border-b-0 border-ink-100"
          >
            <span className="w-10 h-10 rounded-full bg-brand-primary-light text-brand-primary flex items-center justify-center flex-shrink-0">
              <r.Icon size={18} aria-hidden="true" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-ink-500 m-0">{r.label}</p>
              <p className="text-xl font-bold text-brand-primary m-0 mt-0.5 leading-tight">
                {r.value}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex justify-end">
        <Link
          to="/portal/care"
          className="inline-flex items-center gap-1.5 text-sm text-brand-primary hover:text-brand-primary-dark font-medium"
        >
          <span>{t('overview.support.cta')}</span>
          <ArrowLeft size={14} aria-hidden="true" />
        </Link>
      </div>
    </ChartCard>
  );
}
