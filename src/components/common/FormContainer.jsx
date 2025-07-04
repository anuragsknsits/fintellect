const FormContainer = ({ children }) => (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      {children}
    </div>
  </div>
);

export default FormContainer;
