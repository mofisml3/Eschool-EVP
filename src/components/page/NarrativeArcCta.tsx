import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type NarrativeArcCtaProps = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaTo: string;
};

/**
 * Closing card for every page in the narrative arc. Subtle
 * teal-tinted background, centered title + body, primary CTA
 * with a forward arrow (ArrowLeft → inline-end in RTL).
 *
 * Reused across the 9 module pages — each one's closing arc
 * passes its own copy and destination.
 */
export function NarrativeArcCta({
  title,
  body,
  ctaLabel,
  ctaTo,
}: NarrativeArcCtaProps) {
  return (
    <div
      role="region"
      aria-label={title}
      className="bg-brand-primary-light rounded-card-lg p-8 md:p-10 text-center flex flex-col items-center gap-3"
    >
      <h3 className="text-xl md:text-2xl font-semibold text-brand-primary m-0 leading-tight">
        {title}
      </h3>
      <p className="text-sm md:text-base text-ink-700 m-0 max-w-2xl leading-relaxed">
        {body}
      </p>
      <Link
        to={ctaTo}
        className="inline-flex items-center gap-2 mt-3 px-6 py-3 bg-brand-primary text-white rounded-card hover:bg-brand-primary-dark transition-colors font-medium shadow-card hover:shadow-card-hover"
      >
        <span>{ctaLabel}</span>
        <ArrowLeft size={18} aria-hidden="true" />
      </Link>
    </div>
  );
}
