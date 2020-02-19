import {CalculateAPI} from "../API/api";

let UPDATE_WIDTH = 'UPDATE_WIDTH';
let UPDATE_HEIGHT = 'UPDATE_HEIGHT';
let UPDATE_LENGHT = 'UPDATE_LENGHT';
let UPDATE_WEIGHT = 'UPDATE_WEIGHT';
let UPDATE_QUANTITY = 'UPDATE_QUANTITY';
let UPDATE_COMMENT = 'UPDATE_COMMENT';
let UPDATE_TYPE = 'UPDATE_TYPE';
let ADD_CARGO = 'ADD_CARGO';
let initialState = {
    list: [
        {
            widthCargo: 10,
            heightCargo: 10,
            lengthCargo: 5,
            weightCargo: 0.2,
            quantityCargo: 1,
            commentCargo: "parcel",
            typeCargo: "parcel"
        },
        {
            widthCargo: 10,
            heightCargo: 10,
            lengthCargo: 5,
            weightCargo: 0.2,
            quantityCargo: 1,
            commentCargo: "parcel",
            typeCargo: "parcel"
        },
    ],
    width: 1,
    height: 5,
    length: 5,
    weight: 2,
    quantity: 4,
    comment: 12,
    type: 'parcel',
}
const CalculateFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_WIDTH:
            return {
                ...state,
                width: action.bodyWidth,
                type: 'parcel'
            }
        case UPDATE_HEIGHT:
            return {
                ...state,
                height: action.bodyHeight
            }
        case UPDATE_LENGHT:
            return {
                ...state,
                length: action.bodyLength
            }
        case UPDATE_WEIGHT:
            return {
                ...state,
                weight: action.bodyWeight
            }
        case UPDATE_QUANTITY:
            return {
                ...state,
                quantity: action.bodyQuantity
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                comment: action.bodyComment
            }
        case ADD_CARGO:
            return {
                ...state,
                comment: [...state.list, {
                    widthCargo: state.width,
                    heightCargo: state.height,
                    lengthCargo: state.length,
                    weightCargo: state.weight,
                    quantityCargo: state.quantity,
                    commentCargo: state.comment,
                    typeCargo: state.type
                }]
            };
        default:
            return {
                state
            }
    }
    return state;
};
export const updateTextWidth = (width) => ({type: UPDATE_WIDTH, bodyWidth: width});
export const updateTextHeight = (height) => ({type: UPDATE_HEIGHT, bodyHeight: height});
export const updateTextLength = (length) => ({type: UPDATE_LENGHT, bodyLength: length});
export const updateTextWeight = (weight) => ({type: UPDATE_WEIGHT, bodyWeight: weight});
export const updateTextQuantity = (quantity) => ({type: UPDATE_QUANTITY, bodyQuantity: quantity});
export const updateTextComment = (comment) => ({type: UPDATE_COMMENT, bodyComment: comment});
export const addCargoData = () => ({type: ADD_CARGO});

export const addCargo = (width, height, length, weight, quantity, comment, type) => {
    return (dispatch) => {
        CalculateAPI.addСargo(width, height, length, weight, quantity, comment, type).then(
            responce => {
                console.log(responce)
            }
        )
        dispatch(addCargoData);
    }
}
export default CalculateFormReducer;