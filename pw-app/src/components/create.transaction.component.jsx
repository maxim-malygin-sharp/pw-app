import React, { useEffect } from 'react';
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import FromField from './formfield.component'
import { Autocomplete, TextField, Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material";
import { useUser } from '../stores/user.hooks';
import { useModal } from '../stores/modal.hooks';
import { useTransaction } from '../stores/transaction.hooks';

export const CreateTransaction = () => {
  let { fetchUsers, currentUser, users, error } = useUser();
  let { showModal, closeModal } = useModal();
  let { createTransaction } = useTransaction();

  useEffect(() =>
  {
    debugger;
    fetchUsers();
  });

    var errors = error;
    var user = currentUser;
    
debugger;
    if (!!user)
    {
      users = users.filter(x => x.id != user.id);
    }
debugger;
    return (
      <Dialog 
        open={showModal}
        onClose={() => closeModal()}
        
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            const email = formJson.email;
            console.log(email);
            closeModal();
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
                debugger;
                createTransaction(values.recipient, values.amount);
              }}
            >
              {({ handleChange, values, setFieldValue, handleBlur, touched }) => (
                <div>
                <Form>
                  <Autocomplete
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
              <DialogActions>
                <Button onClick={() => closeModal()}>Cancel</Button>
                <Button type="submit">Send</Button>
              </DialogActions>
              </div>
              )}
              </Formik>
          </>
          </DialogContent>
      </Dialog>
        );
    }
