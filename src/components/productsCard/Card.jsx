/* eslint-disable react/prop-types */
import styles from "./Card.module.css"
import { IoIosStar } from "react-icons/io";
import { useSnackbar } from "notistack";
  
const Card = ({quantity,cart,setCart,id, image, title, price, rating, count }) => {
    
  const addToCart = (id,image,name,price,quantity) => { 
        const obj = {
            id,image,name,price,quantity
        }
    setCart([...cart, obj])
    }

  const addToCartAndPreventDuplicate = () => {
    let checkCart = cart.filter((curr) => {
      return curr.id == id;
    })
    if (checkCart.length != 0)
          enqueueSnackbar(`Item Already exists in Cart`, { variant: "error" })
    else{
      addToCart(id, image, title, price,quantity)
    enqueueSnackbar(`Item Added Successfully!`, { variant: "success" })
  }
  }
    const { enqueueSnackbar } = useSnackbar();

  return (
    <div className={styles.cardsWrapper}>
          <img className={styles.image} src={image} alt="image" />
          <p className={styles.rating}>{rating}<IoIosStar style={{color:"green"}} /> | { count}</p>
          <p className={ styles.title}>{title}</p>
          <p>$ {price}</p>
      <p onClick={addToCartAndPreventDuplicate} className={styles.addToCartBtn}>Add To Cart</p>
      </div>
  )
}

export default Card