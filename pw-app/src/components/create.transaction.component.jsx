import React from 'react';
import {connect, useDispatch} from "react-redux";
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { getUsers } from '../actions/user.actions'
import { showModal } from '../actions/modal.actions'
import { createTransaction } from '../actions/transaction.actions'
import FromField from './formfield.component'
import { Autocomplete, TextField, Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material";

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

  render()
  {
    var users = this.props.user?.users;
    var errors = this.props.user?.error;
    console.log('this.props.modal.showModal -> ' + this.props.modal.showModal);
    return (
      <Dialog 
        open={this.props.modal.showModal}
        onClose={() => this.handleCloseModal()}
        
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            const email = formJson.email;
            console.log(email);
            this.handleCloseModal();
          },
        }}>
          
        <DialogTitle>Create transaction</DialogTitle>
        <DialogContent>
          <>
            <Formik
              initialValues={{
                amount: 0,
                recipient: ''
              }}
              validationSchema={
                yup.object({
                    amount: yup.number().required("Amount is required").min(0),
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
                </Form>
              </div>
              )}
              </Formik>
          </>
        <DialogActions>
          <Button onClick={() => this.handleCloseModal()}>Cancel</Button>
          <Button type="submit">Send</Button>
        </DialogActions>
          </DialogContent>
      </Dialog>
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