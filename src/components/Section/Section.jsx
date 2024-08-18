/* eslint-disable react/prop-types */
import ProductsSection from "../products/ProductsSection";

const Section = ({quantity, cart,setCart}) => {
    return (
      <div>
        <ProductsSection quantity={quantity} cart={cart} setCart={ setCart} />       
      </div>
  )
}

export default Section
