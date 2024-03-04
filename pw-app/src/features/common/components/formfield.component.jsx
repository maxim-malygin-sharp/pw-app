import React from 'react';
import { ErrorMessage, useField} from 'formik';


const FormField  = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <p>
          <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <i class="validation"><span></span><span></span></i>
        ) : null}
        </p>
      </>
    );
  }

export default FormField;