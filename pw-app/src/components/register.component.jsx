import {connect, useDispatch} from "react-redux";
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { register, authCheck } from '../actions/auth.actions'
import FromField from './formfield.component'
import { useNavigate } from "react-router-dom";
import { Component } from "react";
import { Button } from "@mui/material";

class Register extends Component {

  handleBack()
  {

  }

  render()
  {
    return (
      <div className="login-form-wrap">
      <h1 className="">Signup</h1>
        <Formik
          initialValues={{ 
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={yup.object({
            email: yup.string().email('Email not valid').required('Email is required'),
            userName: yup.string().required('User Name is required!'),
            password: yup.string().min(8, 'Password must be 9 characters or longer').required('Password is required'),
            confirmPassword: yup.string()
                .required("Confirm Password is required")
                .oneOf([yup.ref("password"), null], "Confirm Password does not match")
          })}
          onSubmit={(values, { setSubmitting }) => {
            this.props.register({username: values.userName, email: values.email, password: values.password});
          }}
        >
              <Form className="login-form">
              <FromField
                type="text"
                label="User Name"
                name="userName"
                placeholder="User Name"
              />
              <FromField
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
              />
              <FromField
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
              />
              <FromField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
              <Button type="submit">Register</Button>
            </Form>
          </Formik>
          </div>
        );
    }
  }

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { register, authCheck })(Register);
