import React, { useEffect } from 'react';
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import FromField from '../../common/components/formfield.component'
import { Autocomplete, TextField, Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@mui/material";
import { useUser } from '../../user/stores/user.hooks';
import { useModal } from '../../modal/stores/modal.hooks';
import { useTransaction } from '../stores/transaction.hooks';

export const CreateTransaction = () => {
  let { fetchUsers, currentUser, users, error } = useUser();
  let { showModal, closeModal } = useModal();
  let { doCreateTransaction, transaction } = useTransaction();

  useEffect(() =>
  {
    fetchUsers();
  });

    var errors = error;
    var user = currentUser;
    
    if (!!user)
    {
      users = users.filter(x => x.id != user.id);
    }
    
    return (
      <Dialog 
        open={showModal}
        onClose={() => closeModal()}
        >
          
        <DialogTitle>Create transaction</DialogTitle>
        <DialogContent>
          <>
            <Formik
              initialValues={{
                amount: transaction?.amount != null ? transaction?.amount : 0,
                recipient: transaction?.recipient != null ? transaction?.recipient : ''
              }}
              validationSchema={
                yup.object({
                    amount: yup.number().required("Amount is required").min(0),
                    recipient: yup.string().required("Recipient is required")
              })}
              onSubmit={(values, { setSubmitting }) => {
                
                doCreateTransaction(values.recipient, values.amount);
              }}
            >
              {({ handleChange, values, setFieldValue, handleBlur, touched }) => (
                <div>
                <Form>
                  <Autocomplete
                      options={users}
                      getOptionLabel={(user) => user.name}
                      onChange={(e, value) => setFieldValue("recipient", value?.name || "")}
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
                  <DialogActions>
                    <Button onClick={() => closeModal()}>Cancel</Button>
                    <Button type="submit">Send</Button>
                  </DialogActions>
                </Form>
              </div>
              )}
              </Formik>
          </>
          </DialogContent>
      </Dialog>
        );
    }
