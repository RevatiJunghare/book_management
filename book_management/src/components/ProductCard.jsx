import { Image,Box,Text,Heading,HStack} from "@chakra-ui/react"
import React from 'react'
import { StarIcon } from "@chakra-ui/icons";




const ProductCard = ({card}) => {
  return (
    <Box key={card.id}   m="auto" p="15px 7px" minW="210px" maxWidth="260px"  position="relative" className='product-card'>
                    <Image src={card.images[0]} m="auto" width="200px" height="230px" alt="image"/>
                    <Heading color="black" fontSize="14px" mt={2}>{card.title}</Heading>
                    <HStack display="flex" h="30px"  alignItems="center" flexWrap="wrap" marginLeft="40px">
                      <Text fontSize="16px" color="gray" textDecoration="line-through">{card.original_price}</Text>
                      
                      <Text >{card.discounted_price}</Text>
                    </HStack>
                    
                    <Box display="flex"  alignItems="center" marginLeft="30px">
                      {Array(5)
                        .fill("")
                          .map((e, i) => (
                            <StarIcon boxSize={3} key={i}
                                      color={ i < Math.floor(card.rating) ? "yellow.400" : "gray.600"}
                            />
                       ))}
                       <Box as="span"  ml="2" color="gray.600" fontSize="sm">
                           ({card.rating})
                       </Box>
                    </Box>
                </Box>
  )
}

export default ProductCard