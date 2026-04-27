import { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  PlayCircle,
  FlaskConical,
  GraduationCap,
  ClipboardCheck,
  HeartPulse,
  Target,
  FileText,
  PanelRightClose,
  PanelRightOpen,
  Info,
  type LucideIcon,
} from 'lucide-react';
import { t } from '@/i18n';

type NavItem = {
  href: string;
  i18nKey: string;
  Icon: LucideIcon;
};

const navItems: NavItem[] = [
  { href: '/portal/overview', i18nKey: 'shell.nav.overview', Icon: LayoutDashboard },
  { href: '/portal/engagement', i18nKey: 'shell.nav.engagement', Icon: Users },
  { href: '/portal/content/videos', i18nKey: 'shell.nav.videos', Icon: PlayCircle },
  { href: '/portal/content/experiments', i18nKey: 'shell.nav.experiments', Icon: FlaskConical },
  { href: '/portal/academics/teachers', i18nKey: 'shell.nav.teachers', Icon: GraduationCap },
  { href: '/portal/academics/assessments', i18nKey: 'shell.nav.assessments', Icon: ClipboardCheck },
  { href: '/portal/care', i18nKey: 'shell.nav.care', Icon: HeartPulse },
  { href: '/portal/impact', i18nKey: 'shell.nav.impact', Icon: Target },
  { href: '/portal/reports', i18nKey: 'shell.nav.reports', Icon: FileText },
];

// Section dividers AFTER these indices (groups: 1 / 2-4 / 5-6 / 7 / 8-9)
const dividerAfterIndex = new Set([0, 3, 5, 6]);

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden md:flex flex-col bg-white border-s border-ink-200 transition-[width] duration-200 ease-out flex-shrink-0 ${
        collapsed ? 'w-[72px]' : 'w-[264px]'
      }`}
      aria-label="القائمة الجانبية"
    >
      <div className="px-3 py-3 flex justify-end">
        <button
          type="button"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={t('shell.nav.collapse')}
          title={t('shell.nav.collapse')}
          className="p-2 text-ink-500 hover:text-brand-primary rounded-card hover:bg-ink-100 transition-colors"
        >
          {collapsed ? <PanelRightOpen size={18} /> : <PanelRightClose size={18} />}
        </button>
      </div>

      <nav className="flex-1 px-2 overflow-y-auto" aria-label="الأقسام">
        <ul className="flex flex-col gap-1">
          {navItems.map((item, idx) => (
            <Fragment key={item.href}>
              <li>
                <NavLink
                  to={item.href}
                  end={item.href === '/portal/overview'}
                  title={collapsed ? t(item.i18nKey) : undefined}
                  className={({ isActive }) =>
                    [
                      'group flex items-center gap-3 px-3 py-2.5 rounded-card text-sm relative transition-colors',
                      isActive
                        ? 'bg-brand-primary-light text-brand-primary font-semibold'
                        : 'text-ink-700 hover:bg-ink-100 hover:text-ink-900',
                    ].join(' ')
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute start-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand-primary rounded-e-full"
                        />
                      )}
                      <item.Icon size={18} className="flex-shrink-0" />
                      {!collapsed && (
                        <span className="leading-tight">{t(item.i18nKey)}</span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
              {dividerAfterIndex.has(idx) && (
                <li className="px-3 py-1" aria-hidden="true">
                  <div className="border-t border-ink-200" />
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </nav>

      <div className="border-t border-ink-200 p-3">
        <NavLink
          to="/portal/about"
          title={collapsed ? t('shell.nav.about') : undefined}
          className={({ isActive }) =>
            [
              'flex items-center gap-3 px-3 py-2 rounded-card text-sm transition-colors',
              isActive
                ? 'text-brand-primary font-semibold'
                : 'text-ink-700 hover:text-brand-primary',
            ].join(' ')
          }
        >
          <Info size={16} className="flex-shrink-0" />
          {!collapsed && <span>{t('shell.nav.about')}</span>}
        </NavLink>
        {!collapsed && (
          <p className="text-xs text-ink-500 px-3 mt-2 m-0">
            {t('shell.nav.version')}
          </p>
        )}
      </div>
    </aside>
  );
}
