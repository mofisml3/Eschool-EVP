import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { LoginPage } from '@/pages/LoginPage';
import { OverviewPage } from '@/pages/portal/OverviewPage';
import { EngagementPage } from '@/pages/portal/EngagementPage';
import { VideosPage } from '@/pages/portal/VideosPage';
import { ExperimentsPage } from '@/pages/portal/ExperimentsPage';
import { TeachersPage } from '@/pages/portal/TeachersPage';
import { AssessmentsPage } from '@/pages/portal/AssessmentsPage';
import { CarePage } from '@/pages/portal/CarePage';
import { ComingSoonPage } from '@/pages/portal/ComingSoonPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

const placeholderRoutes = [
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

      <Route
        path="/portal/content/experiments"
        element={
          <ProtectedRoute>
            <ExperimentsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/portal/academics/teachers"
        element={
          <ProtectedRoute>
            <TeachersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/portal/academics/assessments"
        element={
          <ProtectedRoute>
            <AssessmentsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/portal/care"
        element={
          <ProtectedRoute>
            <CarePage />
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
