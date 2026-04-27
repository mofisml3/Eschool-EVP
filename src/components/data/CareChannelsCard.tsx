import { MessageCircle, Mail, Smartphone, Phone, type LucideIcon } from 'lucide-react';
import { t } from '@/i18n';
import type { CareChannel } from '@/data/types';
import { ChartCard } from './ChartCard';

type Props = { data: CareChannel[] };

const channelIcon: Record<CareChannel['channelId'], LucideIcon> = {
  chat: MessageCircle,
  email: Mail,
  'in-app': Smartphone,
  phone: Phone,
};

export function CareChannelsCard({ data }: Props) {
  const max = Math.max(...data.map((d) => d.ticketsCount), 1);
  return (
    <ChartCard
      title={t('care.channels.title')}
      insight={t('care.channels.insight')}
    >
      <ul className="flex flex-col gap-3">
        {data.map((c) => {
          const Icon = channelIcon[c.channelId];
          const widthPct = (c.ticketsCount / max) * 100;
          return (
            <li key={c.channelId} className="flex items-center gap-3 text-sm">
              <span className="w-9 h-9 rounded-full bg-brand-primary-light text-brand-primary flex items-center justify-center flex-shrink-0">
                <Icon size={16} aria-hidden="true" />
              </span>
              <span className="w-24 md:w-32 flex-shrink-0 text-ink-700 truncate">{c.label}</span>
              <div className="flex-1 h-3 bg-ink-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-primary rounded-full" style={{ width: `${widthPct}%` }} />
              </div>
              <span className="text-xs text-ink-700 w-32 text-end" dir="ltr" style={{ textAlign: 'end' }}>
                <span className="font-semibold text-brand-primary">{c.ticketsCount.toLocaleString('en-US')}</span>
                {' · '}
                {c.sharePercent}٪
              </span>
            </li>
          );
        })}
      </ul>
    </ChartCard>
  );
}
