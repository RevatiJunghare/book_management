import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./actionTypes"

const initialState = {
    products : [],
    isLoading : false,
    isError : false
}

export const bookReducer = (state=initialState,{type,payload})=>{
   switch(type){
     case GET_PRODUCTS_LOADING : return {
        ...state,
        isLoading : true,
        isError : false
     }
     case GET_PRODUCTS_SUCCESS : return {
        ...state,
        isLoading : false,
        isError : false,
        products : payload
     }
     case GET_PRODUCTS_ERROR : return {
        ...state,
        isLoading : false,
        isError : true
     }
     default : return state
   }
}