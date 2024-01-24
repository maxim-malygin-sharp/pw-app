import React from 'react';
import { ErrorMessage, useField} from 'formik';

const FormField  = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label>
          {label}
          <input {...field} {...props} />
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  }

export default FormField;