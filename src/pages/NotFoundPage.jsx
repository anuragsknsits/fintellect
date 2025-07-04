import { Link } from 'react-router-dom';
import Meta from '../components/common/Meta';

const NotFoundPage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <Meta title="404 Not Found | FINTELLECT" description="Page not found." />
    <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
    <p className="mb-6 text-lg">Oops! The page you are looking for does not exist.</p>
    <Link to="/" className="text-blue-600 hover:underline">
      Go back to Home
    </Link>
  </div>
);

export default NotFoundPage;