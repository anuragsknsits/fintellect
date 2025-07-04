import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', roles: ['USER', 'ADMIN'] },
    { label: 'Profile', path: '/profile', roles: ['USER', 'ADMIN'] },
    { label: 'Change Password', path: '/change-password', roles: ['USER', 'ADMIN'] },
    { label: 'Admin Panel', path: '/admin', roles: ['ADMIN'] },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <nav className="flex flex-col p-4">
        {menuItems
          .filter(item => item.roles.includes(user?.role))
          .map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded hover:bg-gray-700 ${location.pathname === item.path ? 'bg-gray-700' : ''}`}
            >
              {item.label}
            </Link>
          ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
