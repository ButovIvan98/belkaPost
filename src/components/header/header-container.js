import React from 'react';
import '../../css/header.css';
import {connect} from "react-redux";
import Header from "./header";
import {auth, authMe} from "../../redux/authReducer";

class HeaderCont extends React.Component {
    render() {
        return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state) => {
    return {
        Sidebar: state.Sidebar,
        login: state.AuthPage.login,
        isAuth: state.AuthPage.isAuth
    }
}
const HeaderContainer = connect(mapStateToProps, {auth})(HeaderCont);
export default HeaderContainer;