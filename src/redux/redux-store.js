import {applyMiddleware, combineReducers, createStore} from "redux";
import ContentReducer from "./content-reducer";
import DialogsReducer from "./dialogs-reducer";
import SidebarReducer from "./header-reducer";
import UserReducer from "./userReducer";
import AuthorezetionReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import AddressReducer from "./addressReducer";
import RegistrationReducer from "./registrationReducer";
import TransportCompanyReducer from "./transportCompanyReducer";
import ProfileTransportCompanyReducer from "./profileTransportCompanyReducer";
import MyShipmentsReducer from "./myShipmentsReducer";
import MyShipmentsInformationReducer from "./myShipmentsInformationReducer";
import CalculateFormReducer from "./calculateFormReducer";

let reducers = combineReducers({
    ProfilePage: ContentReducer,
    messagePage: DialogsReducer,
    Sidebar: SidebarReducer,
    UsersPage: UserReducer,
    AuthPage: AuthorezetionReducer,
    Address: AddressReducer,
    Registration: RegistrationReducer,
    TransportCompany: TransportCompanyReducer,
    ProfileCompanyPage: ProfileTransportCompanyReducer,
    MyShipmentsPage: MyShipmentsReducer,
    MyShipmentsInformationReducerPage: MyShipmentsInformationReducer,
    CalculateFormPage: CalculateFormReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;