import {RegistrationAPI} from "../API/api";

const INPUT_TEXT_SURNAME = 'INPUT_TEXT_SURNAME';//Фамилия
const INPUT_TEXT_NAME = 'INPUT_TEXT_NAME';//Имя
const INPUT_TEXT_MIDDLE_NAME = 'INPUT_TEXT_MIDDLE_NAME';//Отчество
const INPUT_TEXT_PHONE = 'INPUT_TEXT_PHONE';//Телефон
const INPUT_TEXT_EMAIL = 'INPUT_TEXT_EMAIL';//Емаил
const INPUT_TEXT_PASSWORD = 'INPUT_TEXT_PASSWORD';//Пароль

const VALID_SURNAME = 'VALID_SURNAME';
const VALID_NAME = 'VALID_NAME';
const VALID_MIDDLE_NAME = 'VALID_MIDDLE_NAME';
const VALID_PHONE = 'VALID_PHONE';
const VALID_EMAIL = 'VALID_EMAIL';
const VALID_PASSWORD = 'VALID_PASSWORD';

let initialState = {
    surname: '1',
    validSurname: false,
    name: '2',
    validName: false,
    middleName: '3',
    validMiddleName: false,
    phone: '',
    validPhone: false,
    email: '5',
    validEmail: false,
    password: '6',
    validPassword: false,
    colorSurname: '1px solid #c0e4f9',
    colorName: '1px solid #c0e4f9',
    colorMiddleName: '1px solid #c0e4f9',
    colorPhone: '1x solid #c0e4f9',
    colorEmail: '1px solid #c0e4f9',
    colorPassword: '1px solid #c0e4f9',
};

const RegistrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_TEXT_SURNAME:
            return {
                ...state,
                surname: action.bodySurname
            };
        case INPUT_TEXT_NAME:
            return {
                ...state,
                name: action.bodyName
            };
        case INPUT_TEXT_MIDDLE_NAME:

            return {
                ...state,
                middleName: action.bodyMiddleName
            };
        case INPUT_TEXT_PHONE:
            return {
                ...state,
                phone: action.bodyPhone
            };
        case INPUT_TEXT_EMAIL:
            return {
                ...state,
                email: action.bodyEmail
            };
        case INPUT_TEXT_PASSWORD:
            return {
                ...state,
                password: action.bodyPassword
            };
        case VALID_SURNAME:
            return {
                ...state,
                validSurname: action.surnameBoolean,
                colorSurname: action.surnameColor
            };
        case VALID_NAME:
            return {
                ...state,
                validName: action.nameBoolean,
                colorName: action.nameColor
            };
        case VALID_MIDDLE_NAME:
            return {
                ...state,
                validMiddleName: action.middleNameBoolean,
                colorMiddleName: action.middleNameColor
            };
        case VALID_PHONE:
            return {
                ...state,
                validPhone: action.phoneBoolean,
                colorPhone: action.phoneColor
            };
        case VALID_EMAIL:
            return {
                ...state,
                validEmail: action.emailBoolean,
                colorEmail: action.emailColor
            };
        case VALID_PASSWORD:
            return {
                ...state,
                validPassword: action.passwordBoolean,
                colorPassword: action.passwordColor
            };
        default:
            return {...state}
    }
};
export const updateTextSurname = (surname) => ({type: INPUT_TEXT_SURNAME, bodySurname: surname});
export const updateTextName = (name) => ({type: INPUT_TEXT_NAME, bodyName: name});
export const updateTextMiddleName = (middleName) => ({type: INPUT_TEXT_MIDDLE_NAME, bodyMiddleName: middleName});
export const updateTextPhone = (phone) => ({type: INPUT_TEXT_PHONE, bodyPhone: phone});
export const updateTextEmail = (email) => ({type: INPUT_TEXT_EMAIL, bodyEmail: email});
export const updateTextPassword = (password) => ({type: INPUT_TEXT_PASSWORD, bodyPassword: password});

const checkValidSurname = (boolean, color) => ({type: VALID_SURNAME, surnameBoolean: boolean, surnameColor: color});
const checkValidName = (boolean, color) => ({type: VALID_NAME, nameBoolean: boolean, nameColor: color});
const checkValidMiddleName = (boolean, color) => ({
    type: VALID_MIDDLE_NAME,
    middleNameBoolean: boolean,
    middleNameColor: color
});
const checkValidPhone = (boolean, color) => ({type: VALID_PHONE, phoneBoolean: boolean, phoneColor: color});
const checkValidEmail = (boolean, color) => ({type: VALID_EMAIL, emailBoolean: boolean, emailColor: color});
const checkValidPassword = (boolean, color) => ({type: VALID_PASSWORD, passwordBoolean: boolean, passwordColor: color});

export const addUser = (validSurname, validName, validMiddleName, validPhone, validEmail, validPassword, surname, name, middleName, phone, email, password) => {
    return () => {
        if (validEmail && validSurname && validName && validMiddleName && validPhone && validPassword) {
            RegistrationAPI.putRegistration(surname, name, middleName, phone, email, password)
        }
    }
};

export const validSurname = (surname) => {
    return (dispatch) => {
        dispatch(updateTextSurname(surname));
        if (surname.length < 2) {
            dispatch(checkValidSurname(false, '1px solid red'));
            //Сообщение об ошибке
        } else {
            dispatch(checkValidSurname(true, '1px solid #c0e4f9'));
        }
    }
};
export const validName = (name) => {
    return (dispatch) => {
        if (name.length < 2) {
            dispatch(checkValidName(false, '1px solid red'));
            //Сообщение об ошибке
        } else {
            dispatch(checkValidName(true, '1px solid #c0e4f9'));
        }
    }
};
export const validMiddleName = (middleName) => {
    return (dispatch) => {
        if (middleName.length < 2) {
            dispatch(checkValidMiddleName(false, '1px solid red'));
            //Сообщение об ошибке
        } else {
            dispatch(checkValidMiddleName(true, '1px solid #c0e4f9'));
        }
    }
};
export const validPhone = (phone) => {
    console.log(phone.replace(/\D+/g, "").length);
    return (dispatch) => {
        if (phone.replace(/\D+/g, "").length < 11) {
            dispatch(checkValidPhone(false, '1px solid red'));
        } else {
            dispatch(checkValidPhone(true, '1px solid #c0e4f9'));
        }
    }
};
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
export default RegistrationReducer;

