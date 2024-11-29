import ProductDetails from '@/features/product-details/product-details.component'
import React from 'react'

type Props = {
  params: { id: string };
};
const ProductDetail = ({params: { id }}: Props) => {

  return (
    <ProductDetails id={id}/>
  )
}

export default ProductDetail