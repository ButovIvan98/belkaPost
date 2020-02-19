import React from 'react';
import {Alert} from 'bootstrap-4-react';
import TextLvl1 from "../../common/style_text/header_text/text_lvl_1/text_lvl_1";
import classes from "./css/authorization.module.css";

const Authorization = (props) => {

    let email = (e) => {
        props.updateEmail(e.target.value);
        props.validEmail(e.target.value);
    };
    let password = (e) => {
        props.updatePassword(e.target.value);
        props.validPassword(e.target.value)
    };
    let auth = () => {
        props.authUsers();
    };
    return <div className={'container-fluid'}>
        <div className={'row'}>
            <div className={'col-12'}>
                <TextLvl1 text={"Авторизация"}/>
            </div>
        </div>
        <div className={'row mt-4'}>
            <div className={'col-lg-12 text-left'}>
                <div className={classes.block_input}>
                    <input style={{border: props.authorization.colorEmail}} className={classes.inputDouble}
                           onChange={email} value={props.authorization.email}/>
                    <label className={classes.labelText}>Email</label>
                </div>
            </div>
            <div className={'col-lg-12 mt-4'}>
                <div className={classes.block_input}>
                    <input style={{border: props.authorization.colorPassword}} onChange={password} type={'password'}
                           className={classes.inputDouble} value={props.authorization.password}/>
                    <label className={classes.labelText}>Пароль</label>
                </div>
            </div>
            <div className={'col-12'}>
                <button onClick={auth}>
                    Авторизация
                </button>
            </div>
        </div>
    </div>
}
export default Authorization;