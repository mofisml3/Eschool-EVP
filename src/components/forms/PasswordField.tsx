import { useState } from 'react';
import { t } from '@/i18n';
import { useCapsLock } from '@/hooks/useCapsLock';

type PasswordFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export function PasswordField({
  id,
  label,
  value,
  placeholder,
  error,
  disabled,
  onChange,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const capsLockOn = useCapsLock();
  const errorId = `${id}-error`;
  const hintId = `${id}-capslock-hint`;
  const hasError = Boolean(error);

  const describedBy =
    [hasError ? errorId : null, capsLockOn ? hintId : null]
      .filter(Boolean)
      .join(' ') || undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink-900">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          value={value}
          placeholder={placeholder}
          autoComplete="current-password"
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={hasError || undefined}
          aria-describedby={describedBy}
          dir="ltr"
          className={[
            'w-full px-4 py-2.5 pe-12 rounded-lg bg-white text-ink-900 text-base',
            'placeholder:text-ink-500 placeholder:text-start',
            'text-start',
            'disabled:bg-ink-100 disabled:text-ink-500 disabled:cursor-not-allowed',
            'outline-none transition-colors border',
            hasError
              ? 'border-state-danger focus:border-state-danger'
              : 'border-ink-200 focus:border-brand-primary',
          ].join(' ')}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          disabled={disabled}
          aria-label={
            visible
              ? t('login.fields.hidePassword')
              : t('login.fields.showPassword')
          }
          className={[
            'absolute inset-y-0 end-2 my-auto px-2',
            'text-ink-500 hover:text-brand-primary',
            'disabled:cursor-not-allowed',
            'text-sm font-medium transition-colors',
          ].join(' ')}
        >
          {visible ? '👁‍🗨' : '👁'}
        </button>
      </div>

      {hasError && (
        <p id={errorId} className="text-xs text-state-danger m-0" role="alert">
          {error}
        </p>
      )}

      {capsLockOn && (
        <p
          id={hintId}
          className="text-xs text-state-warning-text m-0"
          role="status"
        >
          {t('login.capsLockHint')}
        </p>
      )}
    </div>
  );
}
