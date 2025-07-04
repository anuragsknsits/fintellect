import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ roles = [] }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to="/" replace />;
  if (roles.length && (!user || !roles.includes(user.role))) return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};

export default ProtectedRoute;