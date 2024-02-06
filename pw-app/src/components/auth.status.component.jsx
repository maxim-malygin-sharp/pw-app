import { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../actions/user.actions";
import { signoutAction, authCheck } from "../actions/auth.actions";

class AuthStatus extends Component {
    constructor (props){
        super(props);

        this.handleSignOut = this.handleSignOut.bind(this);
    }
      
    componentDidMount()
    {
        Promise.all([
            this.props.authCheck(),
            this.props.getCurrentUser()
        ]);
    }

    handleSignOut()
    {
        debugger;
        this.props.signoutAction();
    }

    render() {
        if (!!this.props.currentUser)
            return (
            <div>
                <h4 className="mb-3">
                    {this.props.currentUser?.name} <br /> balance {this.props.currentUser?.balance.toFixed(2)}
                </h4>
                <button onClick={this.handleSignOut}>Sign out</button>
            </div>
            );
        else
        {
            return null;
        }
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.user?.currentUser,
        isAuthenticated: state.user?.isAuthenticated,
    };
};

export default connect(mapStateToProps, { getCurrentUser, signoutAction, authCheck })(AuthStatus);
