import { AlertCircle, RotateCw } from 'lucide-react';
import { t } from '@/i18n';

type ErrorStateProps = {
  message?: string;
  onRetry?: () => void;
};

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="bg-white rounded-card-lg shadow-card p-8 max-w-2xl mx-auto flex flex-col items-center text-center gap-4"
    >
      <div className="w-12 h-12 rounded-full bg-state-warning-bg text-state-warning flex items-center justify-center">
        <AlertCircle size={24} aria-hidden="true" />
      </div>
      <p className="text-ink-900 m-0 leading-relaxed">
        {message ?? t('shell.states.errorGeneric')}
      </p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-card hover:bg-brand-primary-dark transition-colors text-sm font-medium"
        >
          <RotateCw size={14} aria-hidden="true" />
          <span>{t('shell.buttons.retry')}</span>
        </button>
      )}
    </div>
  );
}
