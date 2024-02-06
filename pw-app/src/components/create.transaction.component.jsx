import React from 'react';
import {connect, useDispatch} from "react-redux";
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { getUsers } from '../actions/user.actions'
import { showModal } from '../actions/modal.actions'
import { createTransaction } from '../actions/transaction.actions'
import FromField from './formfield.component'
import { Autocomplete, TextField } from "@mui/material";

class CreateTransaction extends React.Component {
  componentDidMount()
  {
    debugger;
    this.props.getUsers();
  }
  handleCloseModal()
  {
    this.props.showModal(false);
  }
m
  render()
  {
    var users = this.props.user?.users;
    var errors = this.props.user?.error;
    return (
      <modal show={this.props.modal.showModal} onHide={() => this.handleCloseModal()} backdrop="static">
          <h4>Create transaction</h4>
          <>
            <Formik
              initialValues={{
                amount: 0,
                recipient: ''
              }}
              validationSchema={
                yup.object({
                    amount: yup.string().required("Amount is required"),
                    recipient: yup.string().required("Recipient is required")
              })}
              onSubmit={(values, { setSubmitting }) => {
                this.props.createTransaction(values.recipient, values.amount);
              }}
            >
              {({ handleChange, values, setFieldValue, handleBlur, touched }) => (
                <div>
                <Form className="form p-3">
                  <label htmlFor="recipient">Recipient: </label>
                  <Autocomplete
                      id="recipient-autocomplete"
                      options={users}
                      getOptionLabel={(user) => user.name}
                      onChange={(e, value) => setFieldValue("recipient", value?.id || "")}
                      onOpen={handleBlur}
                      includeInputInList
                      renderInput={(params) => (
                          <TextField
                              {...params}
                              error={Boolean(touched?.recipient && errors)}
                              fullWidth
                              helperText={touched?.recipient && errors}
                              label="Recipient"
                              name="recipient"
                              variant="outlined"
                          />
                      )}
                  />
                  <FromField
                    type="text"
                    name="amount"
                    label="Amount"
                    placeholder=""
                  />
                  <button className="btn btn-dark m-3" type="submit">
                    Send
                  </button>
                  <button className="btn btn-primary m-3" type="reset" onClick={() => this.handleCloseModal()}>
                    Close
                  </button>
                </Form>
              </div>
              )}
              </Formik>
          </>
      </modal>
        );
    }
  }

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.user,
        modal: state.modal
    };
};

export default connect(mapStateToProps, {createTransaction, getUsers, showModal})(CreateTransaction);
