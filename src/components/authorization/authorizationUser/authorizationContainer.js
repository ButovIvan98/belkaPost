import React from 'react';
import Authorization from "./authorization";
import {connect} from "react-redux";
import {auth, updateEmail, updatePassword, validEmail, validPassword} from "../../../redux/authReducer";

class AuthorizationContainer extends React.Component {
    authUser() {
        this.props.auth(this.props.authorization.email, this.props.authorization.password);
    }

    render() {
        return <Authorization {...this.props} authUsers={this.authUser.bind(this)}/>
    }
}

let mapStateToProps = (state) => {
    return {
        authorization: state.AuthPage
    }
};
const AuthorizationContainerExport = connect(mapStateToProps, {
    updateEmail,
    updatePassword,
    auth,
    validEmail,
    validPassword
})(AuthorizationContainer);
export default AuthorizationContainerExport