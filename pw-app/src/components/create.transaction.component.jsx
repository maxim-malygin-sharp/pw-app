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


/*
//----------------------------

function CreateTransaction({showModal, transactionData, handleCloseModal}) {
  const {
      register,
      formState: {errors},
      handleSubmit,
  } = useForm({
      values: transactionData,
      resolver: yupResolver(schema),
  });

  const createTransactionData = useSelector((state) => state.createTransactionData);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUsersAction());
  }, [dispatch]);

  const createTransaction = (data) => {
      dispatch(createTransactionAction(data.recipient, data.amount));
  };

  return (
      <Modal show={showModal} onHide={() => handleCloseModal()} backdrop="static">
          <Modal.Header closeButton>
              <Modal.Title>Create transaction</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {createTransactionData.isCreated === true && (
                  <SuccessMessage successMessage="Transaction created successfully"></SuccessMessage>
              )}

              <ErrorMessage errorMessage={createTransactionData.error}></ErrorMessage>
              <Form>
                  <Form.Group className="mb-3" controlId="formRecipient">
                      <Form.Label>Recipient</Form.Label>
                      <Form.Select {...register("recipient")} isInvalid={!!errors.recipient}>
                          <option value=""></option>
                          {createTransactionData.users?.map((user) => (
                              <option key={user.id} value={user.name}>
                                  {user.name}
                              </option>
                          ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.recipient?.message}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formAmount">
                      <Form.Label>Amount</Form.Label>
                      <Form.Control type="number" min="0" {...register("amount")} isInvalid={!!errors.amount} />
                      <Form.Control.Feedback type="invalid">{errors.amount?.message}</Form.Control.Feedback>
                  </Form.Group>
              </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="secondary" onClick={() => handleCloseModal()}>
                  Close
              </Button>
              <Button
                  variant="primary"
                  onClick={handleSubmit(createTransaction)}
                  disabled={createTransactionData.isLoading}
              >
                  Create
              </Button>
          </Modal.Footer>
      </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
      createTransactionData: state.createTransactionData,
  };
};

export default connect(mapStateToProps)(CreateTransaction);
*/