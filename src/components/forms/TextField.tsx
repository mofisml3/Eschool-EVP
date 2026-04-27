type TextFieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'email';
  value: string;
  placeholder?: string;
  autoComplete?: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export function TextField({
  id,
  label,
  type = 'text',
  value,
  placeholder,
  autoComplete,
  error,
  disabled,
  onChange,
}: TextFieldProps) {
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink-900">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? errorId : undefined}
        dir="rtl"
        className={[
          'w-full px-4 py-2.5 rounded-lg bg-white text-ink-900 text-base',
          'placeholder:text-ink-500',
          'disabled:bg-ink-100 disabled:text-ink-500 disabled:cursor-not-allowed',
          'outline-none transition-colors border',
          hasError
            ? 'border-state-danger focus:border-state-danger'
            : 'border-ink-200 focus:border-brand-primary',
        ].join(' ')}
      />
      {hasError && (
        <p id={errorId} className="text-xs text-state-danger m-0" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
