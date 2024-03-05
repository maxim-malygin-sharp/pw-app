import React from 'react';
 import { Formik, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import FromField from '../../common/components/formfield.component'
 import { Button } from "@mui/material";
import { useAuth } from '../stores/auth.hooks';
import { SIGN_UP } from '../../../constants/routes';
 
 export const SignIn = (props) => {
   let { doSignin, error } = useAuth();

   return (
    <div className="login-form-wrap">
      <h2>Login</h2> 
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().required('Password is required')
       })}
       onSubmit={(data, { setSubmitting }) => {
        doSignin({email: data.email, password: data.password});

       }}
     >
       <Form className='login-form'>
            <FromField
                type="email"
                name="email"
                label="Email"
                placeholder="email"
              />
              <FromField
                type="password"
                name="password"
                label="Password"
                placeholder="password"
              />
              
            <ErrorMessage name='name' component='div'>    
              { msg => <div style={{ color: 'red' }}>{ msg}</div> }  
            </ErrorMessage>
              {!!error ?
                <div style={{ color: 'red' }}>{ error }</div>
                : null
              }
          <Button type="submit">Sign In</Button>
          <div id="create-account-wrap">
            <p>Not a member? <a href={SIGN_UP}>Create Account</a></p>
          </div>
       </Form>
     </Formik>
     </div>
   );
 };