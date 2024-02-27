import React from 'react';
import {connect, useDispatch} from "react-redux";
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import { signin } from '../actions/auth.actions'
 import FromField from './formfield.component'
 import { Button } from "@mui/material";
import { useAuth } from '../stores/auth.hooks';
 
 export const SignIn = (props) => {
   let { doSignin, error } = useAuth();

    debugger;
   return (
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().required('Password is required')
       })}
       onSubmit={(data, { setSubmitting }) => {
        console.log('signin.submit')
        debugger;
        //props.signin({email: data.email, password: data.password});
        doSignin({email: data.email, password: data.password});
        //dispatch(signin({email: data.email, password: data.password}));

       }}
     >
       <Form>
            <FromField
                type="email"
                name="email"
                label="Email"
                placeholder="loremipsum@gmail.com"
              />
              <FromField
                type="password"
                name="password"
                label="Password"
                placeholder=""
              />
              
            <ErrorMessage name='name' component='div'>    
              { msg => <div style={{ color: 'red' }}>{ msg}</div> }  
            </ErrorMessage>
              {!!error ?
                <div style={{ color: 'red' }}>{ error }</div>
                : null
              }
          <Button type="submit">Sign In</Button>
          <Button>Cancel</Button>
       </Form>
     </Formik>
   );
 };

// const mapStateToProps = (state) => {
//     return {
//         auth: state.auth,
//     };
// };

// export default connect(mapStateToProps, {signin})(SignIn);
