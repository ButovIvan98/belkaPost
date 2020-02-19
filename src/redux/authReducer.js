import {RegistrationAPI, userAPI} from "../API/api";
import Cookies from 'js-cookie';

const UPDATE_TEXT_LOGIN = 'UPDATE_TEXT_LOGIN';
const UPDATE_TEXT_PASSWORD = 'UPDATE_TEXT_PASSWORD';

const AUTH = 'AUTH';

const VALID_PASSWORD = 'VALID_PASSWORD';
const VALID_EMAIL = 'VALID_EMAIL';
let initialState = {
    idUser: '',
    email: '',
    password: '122',
    isAuth: false,
    token: '',
    validEmail: false,
    colorEmail: '1px solid #c0e4f9',
}
const AuthorezetionReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_LOGIN:
            return {
                ...state,
                email: action.emailBody
            };
        case UPDATE_TEXT_PASSWORD:
            return {
                ...state,
                password: action.passwordBody
            }
        case VALID_EMAIL:
            return {
                ...state,
                validEmail: action.emailValid,
                colorEmail: action.emailColor
            };
        case VALID_PASSWORD:
            return {
                ...state,
                validPassword: action.passwordValid,
                colorPassword: action.passwordColor
            };
        case AUTH:
            return {
                ...state,
                isAuth: action.authBody
            };
        default:
            return state;
    }
};
export const updateEmail = (email) => ({type: UPDATE_TEXT_LOGIN, emailBody: email});
export const updatePassword = (password) => ({type: UPDATE_TEXT_PASSWORD, passwordBody: password});
const checkValidPassword = (password, color) => ({type: VALID_PASSWORD, passwordValid: password, passwordColor: color});
const checkValidEmail = (email, color) => ({type: VALID_EMAIL, emailValid: email, emailColor: color});
export const authIs = (auth) => ({type: AUTH, authBody: auth});

export const validEmail = (email) => {
    return (dispatch) => {
        if (!/.+@.+\.[A-Za-z]+$/.test(email)) {
            dispatch(checkValidEmail(false, '1px solid red'));
        } else {
            dispatch(checkValidEmail(true, '1px solid #c0e4f9'));
        }
    }
};

export const validPassword = (password) => {
    return (dispatch) => {
        if (!/[a-zA-Z0-9]/.test(password) || password.length < 6) {
            dispatch(checkValidPassword(false, '1px solid red'));
        } else {
            dispatch(checkValidPassword(true, '1px solid #c0e4f9'));
        }
    }
};

export const auth = (email, password) => {
    return (dispatch) => {
        RegistrationAPI.putAthorization(email, password).then(response => {
            if (response.data.success) {
                Cookies.set('authToken', response.data.data.authToken, {expires: 365})
                dispatch(authIs(true));
                //browserHistory.push({pathname: '/pathname', state: {message: "hello, im a passed message!"}});
            } else {
                dispatch(authIs(false));
                console.log('Cookies не добавлены')
            }
        });
    }
};
export default AuthorezetionReducer;