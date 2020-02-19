import React from 'react';
import classes from './contacts.module.css';
import TextLvl1 from "../../common/style_text/header_text/text_lvl_1/text_lvl_1";
import TextLvl3 from "../../common/style_text/header_text/text_lvl_3/text_lvl_3";

const Contact = (props) => {
    return <div className={'container' + ' ' + classes.block}>
        <div className={'row' + ' ' + classes.blockRow}>
            <div className="col-lg-6 col-12">
                <div className="row">
                    <div className="col-12 mt-4">
                        <TextLvl1 text={'Адреса и контакты'}/>
                        <hr/>
                    </div>
                    <div className="col-12">
                        <a href="tel:+78006004044" className={classes.contactPhone}>8-800-600-40-44</a><br/>
                        <a href="mailto:support@kenguruexpress.ru"
                           className={classes.contactPhone}>support@kenguruexpress.ru </a>
                    </div>
                    <div className="col-12 mt-4">
                        <TextLvl3 text={'Kenguruexpress - Барнаул'}/>
                    </div>
                    <div className="col-12">
                        <a href="https://2gis.ru/barnaul/search/Баварина%202/firm/563478234528324?queryState=center%2F83.797531%2C53.357314%2Fzoom%2F12"
                           target="_blank" className={classes.contactPhone}>656056, Алтайский край, город Барнаул,
                            площадь им
                            В.Н.Баварина, дом 2, офис 900</a><br/>
                        <a href="tel:+78006004044" className={classes.contactPhone}>8-800-600-40-44</a>
                    </div>
                    <div className="col-12 mt-4">
                        <TextLvl1 text={'Реквизиты для платежей'}/>
                        <hr/>
                    </div>
                    <div className="col-12 mt-0">
                        <TextLvl3 text={'ООО"31"'}/>
                        <span className={classes.contactsHeader}>ИНН: 2225155751</span><br/>
                        <span className={classes.contactsHeader}>ОГРН: 1152225000652</span><br/>
                        <span className={classes.contactsHeader}>БИК: 040173604</span><br/>
                        Юридический адрес: <a
                        href="https://2gis.ru/barnaul/search/Баварина%202/firm/563478234528324?queryState=center%2F83.797531%2C53.357314%2Fzoom%2F12"
                        target="_blank" className={classes.contactPhone}>656056, Алтайский край, город Барнаул, площадь
                        им
                        В.Н.Баварина, дом 2, офис 900</a>
                    </div>
                </div>
            </div>
            {/*<div className="col-lg-6 col-12">*/}
            {/*    <div className="row">*/}
            {/*        <div className="col-12 p-0">*/}
            {/*            <iframe id="bx_form_iframe_7" name="bx_form_iframe_7"*/}
            {/*                    src="https://wallaroo.bitrix24.ru/pub/form.php?view=frame&amp;form_id=7&amp;widget_user_lang=ru&amp;sec=6b698r&amp;r=1580790310070#%7B%22domain%22%3A%22https%3A%2F%2Fkenguruexpress.ru%22%2C%22from%22%3A%22https%3A%2F%2Fkenguruexpress.ru%2Fsite%2Fcontact%22%2C%22options%22%3A%7B%7D%7D"*/}
            {/*                    scrolling="no" frameBorder="0" marginHeight="0" marginWidth="0"*/}
            {/*                    className={classes.bitrix}></iframe>*/}
            {/*            /!*<script id="bx24_form_inline" data-skip-moving="true">*!/*/}
            {/*            /!*    (function(w,d,u,b){w['Bitrix24FormObject'] = b;w[b] = w[b] || function(){arguments[0].ref=u;*!/*/}
            {/*            /!*    (w[b].forms=w[b].forms||[]).push(arguments[0])};*!/*/}
            {/*            /!*    if(w[b]['forms']) return;*!/*/}
            {/*            /!*    var s=d.createElement('script');s.async=1;s.src=u+'?'+(1*new Date());*!/*/}
            {/*            /!*    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);*!/*/}
            {/*            /!*})(window,document,'https://wallaroo.bitrix24.ru/bitrix/js/crm/form_loader.js','b24form');*!/*/}

            {/*            /!*    b24form({"id":"7","lang":"ru","sec":"6b698r","type":"inline"});*!/*/}
            {/*            /!*</script>*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>
}
export default Contact