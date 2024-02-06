import {connect, useDispatch} from "react-redux";
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { register, authCheck } from '../actions/auth.actions'
import FromField from './formfield.component'
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    var navigate = useNavigate();
    this.props.authCheck();
    if (props.auth?.isAuthenticated == true)
    {
      navigate('/', { replace: true });
    }

    return (
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
            props.register({username: values.userName, email: values.email, password: values.password});
          }}
        >
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
          </Formik>
        );
    }

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, { register, authCheck })(Register);
