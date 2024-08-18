/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import axios from "axios"
import CircularProgress from '@mui/joy/CircularProgress';
import styles from "./ProductsSection.module.css"
import Card from "../productsCard/Card";
import Grid from '@mui/material/Grid';

const ProductsSection = ({quantity, cart,setCart}) => {
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => { 
        (async function () { 
            try {
                setLoading(true)
                const data = await axios.get(`https://fakestoreapi.com/products`)
                console.log(data.data)
                setProducts(data.data)

            } catch (error) {
                console.log(error)

            } finally { 
                setLoading(false)
            }
        })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    

    return (
        <div className={styles.products_wrapper}>{loading ?
            <div className={styles.loading}>
                <CircularProgress variant="plain" size="lg" /> <p>Products on the way please wait !...</p>
            </div> : <Grid className={ styles.productsWrapper} container spacing={2}>
        {products.map((product,idx) => {
          return (
              <Grid key={idx} item xs={12} sm={ 6} md={6} lg={3}>
                  <Card
                      quantity={quantity}
                      cart={cart}
                      setCart={setCart}
                      id={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      rating={product.rating.rate}
                      count={ product.rating.count}
              />
            </Grid>
          );
        })}
      </Grid>}</div>
  )
}

export default ProductsSection