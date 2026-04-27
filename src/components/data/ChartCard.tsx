import type { ReactNode } from 'react';

type ChartCardProps = {
  title: string;
  insight?: string;
  source?: string;
  rightSlot?: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * Standard wrapper for any chart / map / data visualization on a page.
 * Provides the title, optional 'analytical insight' line under the
 * visual, and an optional 'source' attribution at the bottom — exactly
 * the structure documented in docs/shell/01-global-shell.md § 5.
 */
export function ChartCard({
  title,
  insight,
  source,
  rightSlot,
  children,
  className = '',
}: ChartCardProps) {
  return (
    <section
      className={`bg-white rounded-card-lg shadow-card p-6 md:p-8 ${className}`}
    >
      <header className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-base md:text-lg font-semibold text-ink-900 m-0 leading-snug">
          {title}
        </h3>
        {rightSlot && <div className="flex-shrink-0">{rightSlot}</div>}
      </header>

      <div>{children}</div>

      {insight && (
        <p className="text-sm italic text-ink-700 mt-5 m-0 leading-relaxed border-s-2 border-brand-primary-light ps-3">
          {insight}
        </p>
      )}

      {source && (
        <p className="text-xs text-ink-500 mt-3 m-0">{source}</p>
      )}
    </section>
  );
}
