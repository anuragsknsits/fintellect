import { useEffect, lazy, Suspense, memo } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// App Utilities
import { verifyTokenRequest } from './redux/actions/authAction';
import history from './utills/history';
import ProtectedRoute from './routes/ProtectedRoute';

// Components
import ToastMessageComponent from './components/feedback/ToastMessage';
import SessionTimeoutPopupComponent from './components/common/SessionTimeoutPopup';
import HeaderComponent from './components/layout/Header';
import SidebarComponent from './components/layout/Sidebar';

// Memoized Components
const ToastMessage = memo(ToastMessageComponent);
const SessionTimeoutPopup = memo(SessionTimeoutPopupComponent);
const Header = memo(HeaderComponent);
const Sidebar = memo(SidebarComponent);

// Lazy-loaded Pages
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ChangePasswordPage = lazy(() => import('./pages/ChangePasswordPage'));
const Unauthorized = lazy(() => import('./pages/Unauthorized'));

const AppRoutes = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const showSessionPopup = useSelector((state) => state.session.showPopup);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const publicRoutes = ['/', '/signup', '/forgot-password'];

  useEffect(() => {
    if (!publicRoutes.includes(location.pathname)) {
      dispatch(verifyTokenRequest());
    }
  }, [dispatch, location.pathname]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <ToastMessage />
      {showSessionPopup && <SessionTimeoutPopup />}
      {isAuthenticated && <Header />}
      {isAuthenticated && <Sidebar />}

      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route element={<ProtectedRoute roles={['USER', 'ADMIN']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <HistoryRouter history={history}>
    <AppRoutes />
  </HistoryRouter>
);

export default memo(App);
