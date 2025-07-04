const Button = ({ children, loading, ...rest }) => (
  <button
    {...rest}
    disabled={loading}
    className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
  >
    {loading ? 'Please wait...' : children}
  </button>
);

export default Button;

