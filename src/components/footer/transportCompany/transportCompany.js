import React from 'react';
import classes from './css/transportCompany.module.css';
import TextLvl1 from "../../common/style_text/header_text/text_lvl_1/text_lvl_1";
import {NavLink} from "react-router-dom";

const TransportCompany = (props) => {

    let elementTk = props.transportCompany.listTK.map(nav => (<div className={'col-lg-3 mt-2'}>
        <div className={classes.blockTK}><NavLink to={'/footer/transportCompany/profileCompany/' + nav.id}><img
            src={nav.img} className={classes.imgTK}/></NavLink>
        </div>
    </div>))
    return <div className={'container pb-4' + ' ' + classes.block}>
        <div className={'row ' + ' ' + classes.blockRow}>
            <div className="col-12">
                <TextLvl1 text={'Транспортные компании'}/>
                <hr/>
            </div>
            {elementTk}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/cdek.png'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/pecom.jpg'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/energy.jpg'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/jde.png'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/pochta.png'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/baikal.png'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/gtd.jpg'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/dimex.png'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/dellin.png'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/pony.jpg'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={'col-lg-3 mt-2'}>*/}
            {/*        <div className={classes.blockTK}>*/}
            {/*            <img src={'https://kenguruexpress.ru/images/services/glavdostavka.png'} className={classes.imgTK}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*<div className={'col-lg-3 mt-2'}>*/}
            {/*    <div className={classes.blockTK}>*/}
            {/*        <img src={'https://kenguruexpress.ru/images/services/ups.png'} className={classes.imgTK}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>
}
export default TransportCompany;