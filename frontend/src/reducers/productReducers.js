import {
    PRODUCT_Details_REQUEST,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_Details_SUCCESS,
    PRODUCT_Details_FAIL,
} from '../constants/productConstants'

//a reducer takes in two things
//takes in initialstate and set to empty object 
//it also takes in an action
// We will dispatch an action to this reducer

export const productListReducer =
    (state = { products: [] }, action) => {
    switch(action.type){

        case PRODUCT_LIST_REQUEST:
            return {loading:true, products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, products:action.payload} 
        case PRODUCT_LIST_FAIL:
            return {loading:false, error: action.payload}  
        default:
            return state 
    }
}
        
export const productDetailsReducer =
    (state = { product: {reviews:[]} }, action) => {
    switch(action.type){

        case PRODUCT_Details_REQUEST:
            return {loading:true, ...state}
        case PRODUCT_Details_SUCCESS:
            return {loading:false, product:action.payload} 
        case PRODUCT_Details_FAIL:
            return {loading:false, error: action.payload}  
        default:
            return state 
    }
}