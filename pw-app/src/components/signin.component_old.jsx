import {connect, useDispatch} from "react-redux";
import { Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { signin } from '../actions/auth.actions'
import FromField from './formfield.component'

function SignInForm() {
    const dispatch = useDispatch();
    const signInSchema = yup.object().shape({
        email: yup.string().email('Email not valid').required('Email is required'),
        password: yup.string().required('Password is required')
    });

    const handleSubmit = (data) => {
        console.log('dispatch->(A)signin')
        dispatch(signin({email: data.email, password: data.password}));
    };

    console.log('formik render')
    return (
      <Formik
        initialValues={{ 
            email: '',
            password: ''}}
        validationSchema={signInSchema} 
        onSubmit={(values, { setSubmitting }) => {
            alert('xo-xo!')
            console.log('onSubmit');
            handleSubmit(values);
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
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, {signin})(SignInForm);
