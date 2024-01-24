import {connect, useSelector, useDispatch} from "react-redux";
import { Component } from "react";
import { withFormik, Form, Field } from 'formik'
import * as yup from 'yup'
import { register } from '../actions/auth.actions'
import FromField from './formfield.component'

const Register = () => {
    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    
    return (
            <div>
            <h1 className="">Signup</h1>
            <Form className="form p-3">
              <FromField
                type="text"
                label="User Name"
                name="userName"
                placeholder="Lorem"
              />
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
              <FromField
                type="text"
                name="confirmPassword"
                label="Confirm Password"
                placeholder=""
              />
              <button className="btn btn-dark m-3" type="submit">
                Register
              </button>
              <button className="btn btn-primary m-3" type="reset">
                Reset
              </button>
            </Form>
          </div>
        );
    }

const RegisterForm = withFormik({
        mapPropsToValues({ userName, email, password, confirmPassword }) {
            return {
            userName: userName || '',
            email: email || '',
            password: password || '',
            confirmPassword: confirmPassword || ''
            }
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Email not valid').required('Email is required'),
            userName: yup.string().required('User Name is required!'),
            password: yup.string().min(8, 'Password must be 9 characters or longer').required('Password is required'),
            confirmPassword: yup.string()
                .required("Confirm Password is required")
                .oneOf([yup.ref("password"), null], "Confirm Password does not match")
        }),
        handleSubmit(values, { register }) {
            register(values);
        }
        })(Register);

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};
const mapDispatchToProps = dispatch => ({
    register: values =>          
        dispatch(register({username: values.userName, email: values.email, password: values.password})),
  });

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
