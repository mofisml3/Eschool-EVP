import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  type?: 'button' | 'submit';
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-primary text-white hover:bg-brand-primary-dark disabled:bg-ink-200 disabled:text-ink-500',
  secondary:
    'bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary-light disabled:opacity-50',
  ghost:
    'bg-transparent text-brand-primary hover:bg-brand-primary-light disabled:opacity-50',
};

export function Button({
  type = 'button',
  variant = 'primary',
  loading,
  disabled,
  fullWidth,
  onClick,
  children,
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={[
        'px-6 py-3 rounded-card font-medium transition-colors',
        'disabled:cursor-not-allowed',
        'inline-flex items-center justify-center gap-2',
        variants[variant],
        fullWidth ? 'w-full' : '',
      ].join(' ')}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
        />
      )}
      <span>{children}</span>
    </button>
  );
}
