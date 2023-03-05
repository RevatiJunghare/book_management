import { SimpleGrid } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from '../Redux/Books/action'
import { store } from '../Redux/store'
import ProductCard from "./ProductCard"




const Kitchen = () => {
    const dispatch = useDispatch()

    const products = useSelector((store)=>store.products)
    //console.log(products)

    let KitchenData = products.filter((el)=> el.category == "Home and Kitchen")
    console.log(KitchenData)

    useEffect(()=>{
      dispatch(getproducts())
    },[])

  return (
    <SimpleGrid columns={[1, 2, 3,4]} spacing='40px' >
        {  KitchenData.length>0 &&
            KitchenData.map((el)=>{
                return <ProductCard key={el.id} card={el}/>
            })
        }
    </SimpleGrid>
  )
}

export default Kitchen



