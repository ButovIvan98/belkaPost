import React from 'react';
import CalculateForm from "./calculateForm";
import {connect} from "react-redux";
import {
    addCargo,
    updateTextComment, updateTextHeight, updateTextLength,
    updateTextQuantity, updateTextWeight, updateTextWidth
}
    from "../../../../redux/calculateFormReducer";

class CalculateFormContainer extends React.Component {
    render() {
        return <CalculateForm {...this.props} calculateForm={this.props.calculateForm}/>
    }
}

let mapStateToProps = (state) => {
    return {
        calculateForm: state.CalculateFormPage
    }
};
const CalculateFormContainerExport = connect(mapStateToProps, {
    updateTextQuantity,
    updateTextComment,
    updateTextWeight,
    updateTextWidth,
    updateTextHeight,
    updateTextLength,
    addCargo
})(CalculateFormContainer);
// const AuthorizationContainerExport = connect(mapStateToProps,{updateEmail,updatePassword,auth,validEmail,validPassword})(AuthorizationContainer);
export default CalculateFormContainerExport;