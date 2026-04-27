type LogoSize = 'sm' | 'md' | 'lg';

type LogoProps = {
  size?: LogoSize;
  className?: string;
};

const sizes: Record<LogoSize, { icon: number; textClass: string; gap: string }> = {
  sm: { icon: 32, textClass: 'text-base leading-tight', gap: 'gap-2' },
  md: { icon: 48, textClass: 'text-xl leading-tight', gap: 'gap-3' },
  lg: { icon: 96, textClass: 'text-3xl md:text-4xl leading-tight', gap: 'gap-4' },
};

/**
 * Placeholder rendition of the official E-School logo. Uses the brand
 * teal→green gradient with a play icon over a book outline, paired with
 * the Arabic wordmark. To be replaced with the official SVG asset
 * when provided.
 */
export function Logo({ size = 'md', className = '' }: LogoProps) {
  const { icon, textClass, gap } = sizes[size];

  return (
    <div
      className={`flex items-center ${gap} ${className}`}
      role="img"
      aria-label="المدرسة الإلكترونية"
    >
      <div className={`flex flex-col font-bold text-brand-primary ${textClass}`}>
        <span>المدرسة</span>
        <span>الإلكترونية</span>
      </div>

      <svg
        width={icon}
        height={icon}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="evp-logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#71B36E" />
            <stop offset="100%" stopColor="#08798C" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="160" height="160" rx="20" fill="url(#evp-logo-gradient)" />
        <polygon points="82,68 82,132 138,100" fill="white" />
        <path
          d="M30 178 Q100 168 170 178"
          stroke="#04576A"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M30 186 Q100 176 170 186"
          stroke="#04576A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
