import { Info } from 'lucide-react';
import { t } from '@/i18n';

/**
 * Honest scope clarification displayed below the page hero on the
 * Executive Overview. Communicates that the current rollout phase
 * covers only G9 (الثالث متوسط) and G12 (السادس الإعدادي) for the
 * 2025/2026 academic year, while content for all grades is already
 * available in the library. Subsequent rollout phases will activate
 * the remaining grades.
 */
export function ScopeStrip() {
  return (
    <div
      role="note"
      className="bg-brand-primary-light border border-brand-primary/20 rounded-card-lg p-4 md:p-5 flex items-start gap-3"
    >
      <Info
        size={20}
        className="text-brand-primary flex-shrink-0 mt-0.5"
        aria-hidden="true"
      />
      <p className="text-sm text-ink-700 leading-relaxed m-0">
        <strong className="text-brand-primary font-semibold">
          {t('shell.scope.title')}:
        </strong>{' '}
        {t('shell.scope.body')}
      </p>
    </div>
  );
}
