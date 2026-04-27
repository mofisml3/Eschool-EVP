import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { LoginPage } from '@/pages/LoginPage';
import { OverviewPage } from '@/pages/portal/OverviewPage';
import { EngagementPage } from '@/pages/portal/EngagementPage';
import { VideosPage } from '@/pages/portal/VideosPage';
import { ComingSoonPage } from '@/pages/portal/ComingSoonPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const placeholderRoutes = [
  '/portal/content/experiments',
  '/portal/academics/teachers',
  '/portal/academics/assessments',
  '/portal/care',
  '/portal/impact',
  '/portal/reports',
  '/portal/about',
];

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/portal" element={<Navigate to="/portal/overview" replace />} />

      <Route
        path="/portal/overview"
        element={
          <ProtectedRoute>
            <OverviewPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/portal/engagement"
        element={
          <ProtectedRoute>
            <EngagementPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/portal/content/videos"
        element={
          <ProtectedRoute>
            <VideosPage />
          </ProtectedRoute>
        }
      />

      {placeholderRoutes.map((path) => (
        <Route
          key={path}
          path={path}
          element={
            <ProtectedRoute>
              <ComingSoonPage />
            </ProtectedRoute>
          }
        />
      ))}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
