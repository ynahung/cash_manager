import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-xs italic mt-1">{error}</p>
      )}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
