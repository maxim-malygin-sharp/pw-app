import { Component } from "react";
import { connect } from "react-redux";
import { getTransactions, setRepeatTransaction } from "../actions/transaction.actions";
import { showModal } from "../actions/modal.actions";
import { CreateTransaction } from "./create.transaction.component";
import { Button } from "@mui/material";

class Transactions extends Component {
    componentDidMount()
    {
        this.props.getTransactions();
    }

    handleShowModal(username, amount) {
        console.log('handleShowModal')
        if (!!username && !!amount){
            this.props.setRepeatTransaction( username, amount);
        }
        this.props.showModal(true);
    };

    handleRepeat(username, amount) {
        if (amount < 0) {
            amount = Math.abs(amount);
        }
        this.handleShowModal(username, amount);
    };

    render(){
        return (
        
            <>
                <CreateTransaction />
                <Button onClick={() => this.handleShowModal()}>Create Transaction</Button>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Correspondent Name</th>
                            <th>Amount</th>
                            <th>Balance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.transactions?.data?.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>{transaction.username}</td>
                                <td>{transaction.amount.toFixed(2)}</td>
                                <td>{transaction.balance.toFixed(2)}</td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>{this.props.transactions?.error}</div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions?.data,
        error: state.transactions?.error,
    };
};

export default connect(mapStateToProps, { getTransactions, showModal, setRepeatTransaction })(Transactions);