import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../redux/actions/authAction";
import logo from "../assets/logo/VKADLogo.jpg";
import { HiOutlineMail, HiLockClosed } from 'react-icons/hi';

const Login = () => {
  const [credentials, setCredentials] = useState({ emailId: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  const handleChange = ({ target: { name, value } }) => {
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(credentials));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center">
          <img src={logo} alt="VKAD Associates Logo" className="w-32 mb-4" />
        </div>
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Log In</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-700">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <HiOutlineMail className="text-gray-400 ml-3" />
              <input
                type="email"
                name="emailId"
                value={credentials.emailId}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="mt-2 p-3 w-full border-0 focus:ring-0"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <HiLockClosed className="text-gray-400 ml-3" />
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="mt-2 p-3 w-full border-0 focus:ring-0"
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div >
    </div >
  );
};

export default Login;
