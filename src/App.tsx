import { BrowserRouter } from 'react-router-dom';
import { SessionProvider } from '@/contexts/SessionContext';
import { AppRoutes } from '@/routes/AppRoutes';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SessionProvider>
        <AppRoutes />
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;
