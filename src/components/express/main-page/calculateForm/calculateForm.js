import React from 'react';
import {ReactDadata} from "react-dadata";

const CalculateForm = (props) => {

    let width = (e) => {
        props.updateTextWidth(e.target.value);
    };
    let height = (e) => {
        props.updateTextHeight(e.target.value);
    };
    let length = (e) => {
        props.updateTextLength(e.target.value);
    };
    let weight = (e) => {
        props.updateTextWeight(e.target.value);
    };
    let quantity = (e) => {
        props.updateTextQuantity(e.target.value);
    };
    let comment = (e) => {
        props.updateTextComment(e.target.value);
    };
    let addCargoData = () => {
        props.addCargo(parseFloat(props.calculateForm.width), parseFloat(props.calculateForm.height), parseFloat(props.calculateForm.length), parseFloat(props.calculateForm.weight), parseInt(props.calculateForm.quantity), props.calculateForm.comment, props.calculateForm.type);
    };
    return <div>
        <input placeholder={'Ширина'} onChange={width} value={props.calculateForm.width}/>
        <input placeholder={'Высота'} onChange={height} value={props.calculateForm.height}/>
        <input placeholder={'Длина'} onChange={length} value={props.calculateForm.length}/>
        <input placeholder={'Вес'} onChange={weight} value={props.calculateForm.weight}/>
        <input placeholder={'Количество'} onChange={quantity} value={props.calculateForm.quantity}/>
        <input placeholder={'Комментарий'} onChange={comment} value={props.calculateForm.comment}/>
        <button onClick={addCargoData}>Отправить</button>
    </div>

}
export default CalculateForm;