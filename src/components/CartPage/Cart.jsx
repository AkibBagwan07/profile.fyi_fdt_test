/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./Cart.module.css"
import Grid from '@mui/material/Grid';
import { LiaOpencart } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const Cart = ({setCartItems, cartItems }) => {
  const [cartCopy, setCartCopy] = useState([])
  
  let date = new Date
  const nextThreeDays = new Date(date.setDate(date.getDate() + 3))
  const fututeDayArr = (nextThreeDays.toString().split(" "))
  const day = fututeDayArr[0]
  const month = fututeDayArr[1]
  const futureDate = fututeDayArr[2]

  useEffect(() => {
    setCartCopy(cartItems)
  }, [cartItems])
  
  // const [cartValue, setCartValue] = useState(0)
  // const [cartValue, setCartValue] = useState([])
  // console.log(cartValue)
  // const [isCartEmpty, setIsCartEmpty] = useState(true)
  
  // const checkCartIsEmpty = () => { 
  //   if (addedCartItems.length > 0)
  //     setIsCartEmpty(false)
  // }
  
  const deleteByIndex = index => {
      setCartItems(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }
  
    const navigate = useNavigate();
    return (
      <div>
        {cartItems.length == 0 ? <div className={styles.emptyCartQuote}>
          <LiaOpencart className={styles.cartLogo} />
          <div className={styles.quoteAndExplore}>
            <p>Cart is empty please add some items to Cart!</p>
            <span className={styles.exploreProductsBtn}><p onClick={() => navigate("/")}>Explore Products</p></span></div>
        </div> :
          <div className={styles.cartProductsAndTotalParent}>
            <Grid className={styles.productsWrapper} container justifyContent="center" spacing={2}>
              {cartCopy?.map((product, idx) => {
                return (
                  <Grid key={idx} item xs={10} sm={10} md={10} lg={10}>
                    <div className={styles.cardWrapper}>
                      <img className={styles.image} src={product.image} alt="" />
                      <div className={styles.titleAndDeliveryDate}>
                        <p className={styles.title}>{product.title}</p>
                        <p>Delivery by {day} {month} {futureDate} | <span style={{ color: "yellowgreen" }}>Free</span></p>
                        <p className={styles.price}>$ {product.price}</p>
                        <div className={styles.quantityAndRemoveBtn}>
                          <div className={styles.quantity}>
                            <button onClick={() => {
                              const CART = cartCopy.map((item, index) => {
                                return idx === index ? { ...item, quantity: item.quantity - 1 } : item
                              })
                              setCartCopy(CART)
                            }}>-</button>
                            <p className={styles.quantityCount}>{product.quantity}</p>
                            <button onClick={() => {
                              const CART = cartCopy.map((item, index) => {
                                return idx === index ? { ...item, quantity: item.quantity + 1 } : item
                              })
                              setCartCopy(CART)
                            }}>+</button>
                          </div>
                          <div ><button
                            onClick={() => deleteByIndex(idx)}
                            className={styles.removeBtn}>Remove</button> </div>
                          <p>$ {product.price * product.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })}
              {cartItems.length == 0 ? "empty" :
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <div className={styles.grandTotalSection}>
                  <p className={styles.detailsHead}>Price Details</p>
                  <hr />
                  <div className={styles.priceAndItems}>
                    <p>Price ({cartCopy.length}  item ) </p><p>{cartCopy.map((ele) => ele.price * ele.quantity).reduce((total, value) => total + value, 0)}</p>
                  </div>
                  <div className={styles.priceAndItems}>
                    <p>Discount Offer </p><p>$10</p>
                  </div>
                  <div className={styles.priceAndItems}>
                    <p>Delivery Charges </p><span>Free</span>
                  </div>
                  <div className={styles.priceAndItems}>
                    <p>Secured Packaging Fee</p><p>$2</p>
                  </div>
                  <hr />
                  <div className={styles.totalAmount}>
                    <p>Total Payable Amount </p><p>{cartCopy.map((ele) => ele.price * ele.quantity).reduce((total, value) => total + value, 0) + 2 - 10}</p>
                  </div>
                </div>
              </Grid>}
            </Grid>
          </div>}
      </div>
    )
  }

export default Cart