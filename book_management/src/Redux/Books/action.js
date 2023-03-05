import axios from "axios"
import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./actionTypes"

export const getproducts = ()=>async (dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING})

    try{
       let res = await axios.get("https://meesho-backend-3037.onrender.com/products")
        console.log(res.data)
       dispatch({type : GET_PRODUCTS_SUCCESS , payload : res.data})
    }
    catch(error){
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}