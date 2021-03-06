import React from 'react';
import {Alert} from 'bootstrap-4-react';
import TextLvl1 from "../../common/style_text/header_text/text_lvl_1/text_lvl_1";
import classes from './css/registration.module.css';
import InputMask from "react-input-mask";

const Registration = (props) => {
    debugger
    let surname = (e) => {
        props.validSurname(e.target.value);
    }
    let name = (e) => {
        props.updateTextName(e.target.value);
        props.validName(e.target.value);
    }
    let middleName = (e) => {
        props.updateTextMiddleName(e.target.value);
        props.validMiddleName(e.target.value);
    }
    let phone = (e) => {
        props.updateTextPhone(e.target.value);
        props.validPhone(e.target.value);
    }
    let email = (e) => {
        props.updateTextEmail(e.target.value);
        props.validEmail(e.target.value);
    }
    let password = (e) => {
        props.updateTextPassword(e.target.value);
        props.validPassword(e.target.value);
    }
    let addUser = () => {
        props.addUsers();
    }
    return <div className={'container-fluid'}>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-lg-12 text-center'}>
                    <TextLvl1 text={"Регистрация"}/>
                </div>
                <div className={'col-lg-12'}>
                    <div className={'row mt-5'}>
                        <div className={'col-lg-6 text-left'}>
                            <div className={classes.block_input_left}>
                                <input onChange={surname} style={{border: props.registrationPage.colorSurname}}
                                       className={classes.inputDouble} value={props.registrationPage.surname}></input>
                                <label className={classes.labelText}>Фамилия</label>
                            </div>
                        </div>
                        <div className={'col-lg-6'}>
                            <div className={classes.block_input_right}>
                                <input onChange={name} style={{border: props.registrationPage.colorName}}
                                       className={classes.inputDouble} value={props.registrationPage.name}></input>
                                <label className={classes.labelText}>Имя</label>
                            </div>
                        </div>
                    </div>
                    <div className={'row mt-4'}>
                        <div className={'col-lg-6 text-left'}>
                            <div className={classes.block_input_left}>
                                <input onChange={middleName} style={{border: props.registrationPage.colorMiddleName}}
                                       className={classes.inputDouble}
                                       value={props.registrationPage.middleName}></input>
                                <label className={classes.labelText}>Отчество</label>
                            </div>
                        </div>
                        <div className={'col-lg-6'}>
                            <div className={classes.block_input_right}>
                                <InputMask style={{border: props.registrationPage.colorPhone}}
                                           placeholder={'+7(___)-___-__-__'} className={classes.inputDouble}
                                           mask="+7(999)-999-99-99" onChange={phone}
                                           value={props.registrationPage.phone}/>
                                {/*<input  value={props.registrationPage.phone}></input>*/}
                                <label className={classes.labelText}>Телефон</label>
                            </div>
                        </div>
                    </div>
                    <div className={'row mt-4'}>
                        <div className={'col-lg-6 text-left'}>
                            <div className={classes.block_input_left}>
                                <input style={{border: props.registrationPage.colorEmail}} onChange={email}
                                       className={classes.inputDouble} value={props.registrationPage.email}/>
                                <label className={classes.labelText}>Email</label>
                            </div>
                        </div>
                        <div className={'col-lg-6'}>
                            <div className={classes.block_input_right}>
                                <input style={{border: props.registrationPage.colorPassword}} type={'password'}
                                       onChange={password} className={classes.inputDouble}
                                       value={props.registrationPage.password}></input>
                                <label className={classes.labelText}>Пароль</label>
                            </div>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-lg-12'}>
                            <button onClick={addUser}>Регистрация</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};
export default Registration;