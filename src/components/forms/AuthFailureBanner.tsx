import { t } from '@/i18n';

type AuthFailureBannerProps = {
  message: string;
  onDismiss?: () => void;
};

export function AuthFailureBanner({ message, onDismiss }: AuthFailureBannerProps) {
  return (
    <div
      role="alert"
      className="bg-state-warning-bg text-state-warning-text rounded-lg px-4 py-3 flex items-start justify-between gap-3 border border-state-warning/20"
    >
      <div className="flex items-start gap-2 text-sm">
        <span aria-hidden="true" className="text-base leading-none">
          ⚠
        </span>
        <p className="m-0 leading-relaxed">{message}</p>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label={t('shell.buttons.close')}
          className="text-state-warning-text hover:opacity-70 text-xl leading-none px-1"
        >
          ×
        </button>
      )}
    </div>
  );
}
