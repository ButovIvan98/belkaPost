import React from 'react';
import classes from './css/profileCompany.module.css';
import Rating from "react-rating";
import emptyStar from './img/emptySter.png';
import fullStar from './img/fullStar.png';
import {validStar, validText} from "../../../../redux/profileTransportCompanyReducer";

const ProfileCompany = (props) => {
    let comment = props.ProfileCompany.comment.map(com => (
        <div className={'row ml-0 mr-0 pl-0 pr-0 mt-2' + ' ' + classes.blockListComment}>
            <div className={'col-lg-auto col-12 text-center'}>
                <img src={'https://kenguruexpress.ru/images/views/user.png'} className={classes.imagesUser}/>
            </div>
            <div className={'col-lg-10 col-12 text-lg-left text-center pl-0'}>
                <div className={'row'}>
                    <div className={'col-12 mt-2'}>
                        <span><b>{com.sender}</b></span>

                        <span>{com.dateAndTime}</span><br/>
                    </div>
                    <div className={'col-12 text-lg-left text-center '}>
                        <Rating
                            emptySymbol={<img src={emptyStar}/>}
                            fullSymbol={<img src={fullStar}/>}
                            initialRating={com.rating}
                            readonly
                        />
                    </div>
                </div>
                <p>{com.text}</p>
            </div>
        </div>)
    )
    let updateText = (e) => {
        props.updateTextComment(e.target.value);
        props.validText(e.target.value);
    }
    let updateRating = (e) => {
        props.updateRaitingComment(e);
        props.validStar(e);
    }
    let addComment = () => {
        props.addComm();
    }
    return <div className={'container mb-2 pb-4' + ' ' + classes.block}>
        <div className={'row' + ' ' + classes.blockRow}>
            <div className={'col-lg-6 col-12 text-center'}>
                <img src={props.ProfileCompany.dpd[0].logo} className={classes.imgTK}/><br/>
                <hr/>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <div className={'mb-2' + ' ' + classes.iconsInfo}>
                            <img src={'https://kenguruexpress.ru/images/views/globus.png'}/>
                        </div>
                        <p>Россия</p>
                    </div>
                    <div className={'col-4'}>
                        <div className={'mb-2' + ' ' + classes.iconsInfo}>
                            <p className={classes.textNumber}>{props.ProfileCompany.dpd[0].rating}</p>
                        </div>
                        <p className="old-page-company-text-icons">Рейтинг</p>
                    </div>
                    <div className={'col-4'}>
                        <div className={'mb-2' + ' ' + classes.iconsInfo}>
                            <p className={classes.textNumber}>{props.ProfileCompany.dpd[0].age}</p>
                        </div>
                        <p>Лет на рынке</p>
                    </div>
                </div>
            </div>
            <div className={'col-lg-6 col-12 mb-2'}>
                <div className={'row'}>
                    <div className={'col-12 mt-2'}>
                        <p className={classes.textDescription}>
                            {props.ProfileCompany.dpd[0].description}
                        </p>
                        <hr/>
                    </div>
                    <div className={'col-12 pl-0 pr-0'}>
                        <div className={'row' + ' ' + classes.blockComment}>
                            <div className={'col-12'}>
                                <Rating className={classes.star}
                                        style={{borderBottom: props.ProfileCompany.ratingBorder}}
                                        emptySymbol={<img src={emptyStar}/>}
                                        fullSymbol={<img src={fullStar}/>}
                                        fractions={2}
                                        initialRating={props.ProfileCompany.rating}
                                        onClick={(rate) => updateRating(rate)}
                                /><br/>
                                <textarea placeholder={'Текст комментария.'}
                                          style={{border: props.ProfileCompany.commentBorder}}
                                          className={classes.textareaComment}
                                          onChange={updateText}
                                          value={props.ProfileCompany.newComment}></textarea>
                                <button onClick={addComment} className={classes.button}>Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'col-12'}>
                <hr/>
            </div>

            <div className={'col-12'}>
                {comment}
                <hr/>
            </div>
        </div>
    </div>
}
export default ProfileCompany;