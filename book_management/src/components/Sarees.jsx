import { SimpleGrid } from "@chakra-ui/react"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts } from '../Redux/Books/action'
import { store } from '../Redux/store'
import ProductCard from "./ProductCard"




const Sarees = () => {
    const dispatch = useDispatch()

    const products = useSelector((store)=>store.products)
    //console.log(products)

    let sareeData = products.filter((el)=> el.category == "Sarees")
    console.log(sareeData)

    useEffect(()=>{
      dispatch(getproducts())
    },[])

  return (
    <SimpleGrid columns={[1, 2, 3,4]} spacing='40px' >
        {  sareeData.length>0 &&
            sareeData.map((el)=>{
                return <ProductCard key={el.id} card={el}/>
            })
        }
    </SimpleGrid>
  )
}

export default Sarees



