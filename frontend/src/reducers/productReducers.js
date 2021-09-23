import {
    PRODCUT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_SUCCESS
} from '../constants/productConstants'

//a reducer takes in two things
//takes in initialstate and set to empty object 
//it also takes in an action
// We will dispatch an action to this reducer

export const productListReducer = (state = {product: []}, action)
=>{
    switch(action.type){

        case PRODCUT_LIST_REQUEST:
            return {loading:true, products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, products:action.payload} 
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, error: action.payload}  
        default:
            return state 
    }

}