import { t } from '@/i18n';

type LoadingStateProps = {
  message?: string;
};

export function LoadingState({ message }: LoadingStateProps) {
  return (
    <div
      className="flex items-center justify-center py-20"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 text-ink-700">
        <span
          aria-hidden="true"
          className="inline-block w-5 h-5 border-2 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin"
        />
        <span className="text-sm">{message ?? t('shell.states.loading')}</span>
      </div>
    </div>
  );
}
