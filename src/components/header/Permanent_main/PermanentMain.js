import React from 'react';
import classes from './Permanent_main.module.css';
import {NavLink} from "react-router-dom";

const Permanent_main = (props) => {
    return <div className={'container-fluid'}>
        <div className={'row' + ' ' + classes.mainBlock}>
            <div className={'col-lg-4 col-3 mt-lg-1' + ' ' + classes.indexHeaderLogo}>
                <NavLink to="/kenguru">
                    <svg height="40" viewBox="0 0 87 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M85.3171 26.9185L78.5061 27.5873L55.7382 37.9842L59.5107 32.6031L44.6739 35.4634L56.4416 57.4149L30.0878 30.6071L38.5024 28.2998L0 0L37.6072 15.0193L50.1473 14.528L70.199 24.6343L76.6442 23.4485L73.6671 23.4408L71.3934 20.5856L87 25.0356L85.3171 26.9185Z"
                            fill="white"></path>
                        <path d="M62.3701 32.0501L55.7382 37.9868L59.5107 32.6031L62.3701 32.0501Z"
                              fill="#EFEFEF"></path>
                        <path d="M42.5716 27.1834L38.5024 28.2998L0 0L42.5716 27.1834Z" fill="#EFEFEF"></path>
                        <path d="M56.4415 57.4149L30.0878 30.6071L38.2364 33.3208L56.4415 57.4149Z"
                              fill="#EFEFEF"></path>
                    </svg>
                    <svg className={'d-lg-inline-block d-none' + ' ' + classes.headerLogo} height="18"
                         viewBox="0 0 62 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.12626 0.679703C7.49514 0.698233 7.86247 0.740333 8.22604 0.805744V2.46227H7.73753C7.6177 2.46218 7.50138 2.50299 7.4076 2.57802C7.31742 2.64758 7.24253 2.73515 7.18764 2.83524L6.02393 5.04222L8.39484 9.41502H6.07508L4.19011 5.91164H3.09034V9.40988H0.895901L0.913804 0.816035H3.1108V4.19338H4.21058L5.43568 1.86293C5.59874 1.54039 5.82595 1.25497 6.10321 1.02439C6.40263 0.796888 6.7719 0.682196 7.14672 0.700281"
                            fill="white"></path>
                        <path
                            d="M16.5051 9.4176L9.72992 9.40217L9.75038 0.808319L16.5255 0.823756L16.5204 2.54201L11.9423 2.53172L11.9397 4.19081L15.5408 4.19853L15.5357 5.91678L11.9346 5.90906L11.932 7.68906L16.5102 7.69934L16.5051 9.4176Z"
                            fill="white"></path>
                        <path
                            d="M25.5386 9.43818L23.3416 9.43304L23.3492 5.9348L20.298 5.92708L20.2903 9.42789L18.0933 9.42275L18.1112 0.828903L20.3082 0.834049L20.3006 4.20882L23.3544 4.21654L23.362 0.841765L25.559 0.846911L25.5386 9.43818Z"
                            fill="white"></path>
                        <path
                            d="M29.8098 9.44845L27.6128 9.44331L27.6333 0.852036L34.2856 0.867468L34.2805 2.58572L29.8251 2.57543L29.8098 9.44845Z"
                            fill="white"></path>
                        <path
                            d="M37.7819 9.58992C37.3594 9.5889 36.938 9.5467 36.5235 9.46388V7.80736H37.6208C37.7209 7.81621 37.8213 7.7941 37.9086 7.744C37.9959 7.6939 38.0659 7.61819 38.1093 7.52699C38.1491 7.44713 38.1701 7.35911 38.1707 7.26977C38.1736 7.18034 38.1533 7.09168 38.1118 7.01255L34.769 0.867477H37.209L39.3958 5.24027L41.2372 0.885481H43.6798L40.5492 7.62988C40.3296 8.18867 39.9786 8.68559 39.5262 9.07805C39.0193 9.44291 38.4044 9.62425 37.7819 9.5925"
                            fill="white"></path>
                        <path
                            d="M44.7821 0.890625H49.9101C50.7627 0.890625 51.3825 1.08611 51.7695 1.4771C52.1566 1.86808 52.3484 2.49313 52.345 3.35226V4.59208C52.345 5.44949 52.1498 6.07282 51.7593 6.46209C51.3688 6.85136 50.7482 7.04427 49.8974 7.04084H46.9689V9.49734H44.7744L44.7821 0.890625ZM50.1531 3.35998C50.1676 3.25987 50.1588 3.15774 50.1272 3.06169C50.0956 2.96564 50.0422 2.87832 49.9712 2.80666C49.9002 2.735 49.8135 2.68098 49.7181 2.64888C49.6227 2.61678 49.5212 2.60749 49.4216 2.62174H46.9817V5.32259H49.4242C49.5236 5.33665 49.6249 5.32733 49.7202 5.29537C49.8154 5.26341 49.902 5.20968 49.9732 5.13839C50.0443 5.06711 50.098 4.98021 50.1301 4.88453C50.1622 4.78885 50.1719 4.68698 50.1582 4.58693L50.1531 3.35998Z"
                            fill="white"></path>
                        <path
                            d="M56.0893 9.63367C55.6677 9.63137 55.2473 9.58917 54.8335 9.50762V7.85111H55.9308C56.0309 7.85995 56.1313 7.83784 56.2186 7.78774C56.3059 7.73763 56.3759 7.66192 56.4193 7.57073C56.4591 7.49087 56.4801 7.40285 56.4806 7.3135C56.4827 7.22417 56.4625 7.13574 56.4218 7.05628L53.0841 0.911209H55.5241L57.7109 5.28401L59.5523 0.931787H61.9949L58.8643 7.67877C58.6447 8.23682 58.2937 8.7329 57.8413 9.12436C57.3336 9.48959 56.7178 9.67095 56.0944 9.63881"
                            fill="white"></path>
                    </svg>
                </NavLink>
            </div>
            <div className={'col-lg-4 mt-2 mb-2 col-6'}>

            </div>
            <div className={'col-lg-0 d-lg-none col-3'}>
                <button type="button"
                        className={'btn btn-primary btn-lg open-modal-btn' + ' ' + classes.buttonMobileMenu}
                        data-toggle="modal"
                        data-target="#gridSystemModal">
                    <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0H36L35 2H0L1 0Z" fill="white"></path>
                        <path d="M1 7H24L23 9H0L1 7Z" fill="white"></path>
                        <path d="M1 14H14L13 16H0L1 14Z" fill="white"></path>
                    </svg>
                </button>
            </div>
            <div className={'col-lg-4 d-lg-block d-none mt-3 text-right'}>
                <NavLink className={classes.phoneNumber} to="tel:+78006004044">8 800 600 40 44</NavLink>
                <span>
                                <NavLink to={'/user'} className={'open-modal-lk' + ' ' + classes.indexHeaderLk}>
                                    М. Великосельских
                                    <svg className={classes.iconsHeader}
                                         width="10" height="6" viewBox="0 0 10 6" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" d="M1 1L5 5L9 1" stroke="white"></path>
                                    </svg>
                                </NavLink>
                            </span>
                {/*<div className={'mt-2 close-modal-menu'} id={'menu-users'}>*/}
                {/*    <div className={classes.indexBlockUser}>*/}
                {/*        <NavLink to="/profile" className={'pjax-link' + ' ' + classes.indexBlockUserLink}><p>Профиль</p>*/}
                {/*        </NavLink>*/}
                {/*        <hr className={classes.lineHeader}/>*/}
                {/*        <NavLink to="/profile/logout" className={'pjax-link' + ' ' + classes.indexBlockUserLink}>*/}
                {/*            <p>Выход</p></NavLink>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    </div>
};
export default Permanent_main;