import React from 'react';
import classes from './footer.module.css';
import {NavLink} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className={classes.footer}>
            <div className={'container-fluid mt-4'}>
                <div className={'row'}>
                    <li className={'col-lg-12 d-none d-lg-block text-lg-center'}>
                        <nav className={classes.indexFooter}>
                            <ul>
                                <li><NavLink to={'/footer/aboutMe'}>О нас</NavLink></li>
                                <li><NavLink to={'/footer/contact'}>Контакты</NavLink></li>
                                <li><NavLink to={'/footer/transportCompany'}>Транспортные компании</NavLink></li>
                                <li><NavLink to={'/footer/policy'}>Политика и конфиденциальность</NavLink></li>
                                <li><NavLink to={'/footer/publicOffer'}>Публичная оферта</NavLink></li>
                                <li><NavLink to={'/footer/paymentMethod'}>Способы оплаты</NavLink></li>
                            </ul>
                        </nav>
                    </li>
                </div>
                <div className={'col-12 text-center'}>
                    <p className={classes.indexFooterText}>
                        © 2016–2019, <NavLink to="/kenguru">Кенгуру</NavLink> - поиск и сравнение тарифов на
                        экспресс-перевозки
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;