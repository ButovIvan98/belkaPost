import React from 'react';
import Registration from "./registration";
import {connect} from "react-redux";
import {
    addUser,
    updateTextEmail,
    updateTextMiddleName,
    updateTextName,
    updateTextPassword,
    updateTextPhone,
    updateTextSurname, validEmail, validMiddleName, validName, validPassword, validPhone,
    validSurname
} from "../../../redux/registrationReducer";

class RegistrationForm extends React.Component {

    addUsersReg() {
        this.props.addUser(this.props.registrationPage.validSurname, this.props.registrationPage.validName, this.props.registrationPage.validMiddleName,
            this.props.registrationPage.validPhone, this.props.registrationPage.validEmail, this.props.registrationPage.validPassword,
            this.props.registrationPage.surname, this.props.registrationPage.name, this.props.registrationPage.middleName, this.props.registrationPage.phone,
            this.props.registrationPage.email, this.props.registrationPage.password);
    }

    render() {
        return <Registration {...this.props} address={this.props.addressPage} addUsers={this.addUsersReg.bind(this)}/>
    }
}

let mapStateToProps = (state) => {
    return {
        registrationPage: state.Registration
    }
};
const RegistrationContainerExport = connect(mapStateToProps, {
    validName,
    validSurname,
    validMiddleName,
    validPhone,
    validEmail,
    validPassword,
    addUser,
    updateTextSurname,
    updateTextName,
    updateTextMiddleName,
    updateTextPhone,
    updateTextEmail,
    updateTextPassword
})(RegistrationForm)
export default RegistrationContainerExport;