import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-3">
      <h1 className="text-xl font-bold">My App</h1>
      {user && (
        <div className="relative group">
          <button className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
            Hi, {user.username}
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => navigate('/profile')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
            <button onClick={() => navigate('/change-password')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Change Password</button>
            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;