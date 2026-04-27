import type { ReactNode } from 'react';
import { TopBar } from './TopBar';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';

type PortalLayoutProps = {
  pageTitle: string;
  children: ReactNode;
};

/**
 * Authenticated chrome wrapper. Layout (RTL):
 *
 *   +----------------------------------------------+
 *   |                  TopBar                       |
 *   +-----------------------------+----------------+
 *   |                             |                |
 *   |   <main> children           |   <Sidebar>    |
 *   |   (visual left)             |   (visual right)
 *   +-----------------------------+----------------+
 *   |                  Footer                       |
 *   +----------------------------------------------+
 *
 * In RTL, the first child of a horizontal flex row is on the right.
 * <Sidebar/> is rendered first so it sits at the visual right edge.
 */
export function PortalLayout({ pageTitle, children }: PortalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-ink-100">
      <TopBar pageTitle={pageTitle} />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 min-w-0 overflow-x-auto">
          <div className="px-4 md:px-6 lg:px-8 py-6 md:py-8 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
