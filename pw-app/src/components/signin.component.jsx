import React from 'react';
import {connect, useDispatch} from "react-redux";
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import { authCheck, signin } from '../actions/auth.actions'
 import FromField from './formfield.component'
 import { useNavigate } from "react-router-dom";
 
 const SignIn = (props) => {
    
    const dispatch = useDispatch();
    // var navigate = useNavigate();
    // dispatch(authCheck());
    // if (props.auth?.isAuthenticated == true)
    // {
    //   navigate('/', { replace: true });
    // }

   return (
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().required('Password is required')
       })}
       onSubmit={(data, { setSubmitting }) => {
        console.log('signin.submit')
        props.signin({email: data.email, password: data.password});
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
                type="text"
                name="password"
                label="Password"
                placeholder=""
              />
              
            <ErrorMessage name='name' component='div' />
            <button type='submit'>
              Sign In
            </button>
            <button className="btn btn-primary m-3" type="reset">
              Cancel
            </button>
       </Form>
     </Formik>
   );
 };

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, {signin})(SignIn);
