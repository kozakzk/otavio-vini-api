import { Navigate } from 'react-router';

export function PrivateRoute({ to }: { to: string }) {
  const isAuthentificated = localStorage.getItem('auth_token');

  return isAuthentificated ? (
    <Navigate to={to} />
  ) : (
    <Navigate to={'/login'} replace />
  );
}
