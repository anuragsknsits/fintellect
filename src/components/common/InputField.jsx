import { forwardRef } from 'react';

const InputField = forwardRef(({ label, type = 'text', name, icon: Icon, error, ...rest }, ref) => (
  <div className="flex flex-col mb-4">
    <label className="text-gray-700 mb-1">{label}</label>
    <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
      {Icon && <Icon className="text-gray-400 ml-3" />}
      <input
        type={type}
        name={name}
        ref={ref}
        {...rest}
        className="p-3 w-full border-0 focus:ring-0"
      />
    </div>
    {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
  </div>
));

export default InputField;
