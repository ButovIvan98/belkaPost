import React from 'react';
import classes from './index.module.css'
import Footer from './components/footer/footer';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/header/header-container";
import AuthorizationContainerExport from "./components/authorization/authorizationUser/authorizationContainer";
import AddressContainerExport from "./components/express/my_address/add_address/add_addressContainer";
import AboutMe from "./components/footer/aboutMe/aboutMe";
import Contact from "./components/footer/contacts/contacts";
import PolicyAndPrivacy from "./components/footer/policyAndPrivacy/policyAndPrivacy";
import PublicOffer from "./components/footer/publicOffer/publicOffer";
import PaymentMethod from "./components/footer/PaymentMethod/paymentMethod";
import ExportTransportCompany from "./components/footer/transportCompany/transportCompanyContainer";
import ExportProfileTransportCompany from "./components/footer/transportCompany/profileCompany/profileCompanyContainer";
import Centrifuge from "centrifuge";
import ExportMyShipmentsContainer from "./components/express/myShipments/myShipmentsContainer";
import ExportMyShipmentsInformationContainer
    from "./components/express/myShipments/myShipmentsInformation/myShipmentsInformationContainer";
import CalculateFormContainer from "./components/express/main-page/calculateForm/calculateFormContainer";

const App = () => {
    var centrifuge = new Centrifuge('ws://192.168.3.105:8000/connection/websocket');
    centrifuge.subscribe("calc", function (message) {
        console.log(message);
    });
    centrifuge.connect();
    return (
        <div className={classes.main}>
            <HeaderContainer/>
            <div className={classes.container}>
                <Route path='/express/my_address' render={() => <AddressContainerExport/>}/>
                <Route path='/myShipments' render={() => <ExportMyShipmentsContainer/>}/>
                <Route path='/login' render={() => <AuthorizationContainerExport/>}/>
                <Route path={'/footer/aboutMe'} render={() => <AboutMe/>}/>
                <Route path={'/footer/contact'} render={() => <Contact/>}/>
                <Route path={'/footer/policy'} render={() => <PolicyAndPrivacy/>}/>
                <Route path={'/footer/publicOffer'} render={() => <PublicOffer/>}/>
                <Route path={'/footer/paymentMethod'} render={() => <PaymentMethod/>}/>
                <Route path={'/footer/transportCompany'} render={() => <ExportTransportCompany/>}/>
                <Route path={'/footer/transportCompany/profileCompany/'}
                       render={() => <ExportProfileTransportCompany/>}/>
                <Route path={'/1'} render={() => <ExportMyShipmentsInformationContainer/>}/>
                <Route path={'/calculate'} render={() => <CalculateFormContainer/>}/>
            </div>
            <Footer/>
        </div>
    );
};
export default App;
