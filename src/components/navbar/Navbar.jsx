/* eslint-disable react/prop-types */
import { LiaOpencart } from "react-icons/lia";
import styles from "./Navbar.module.css"
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ numberOfCartItems}) => {
    // const [productCount,setProductCount] = useState(0)
    const navigate = useNavigate();
    return (
        <div className={ styles.nav}>
      <div className={styles.brand}>
          <LiaOpencart className={ styles.logo} />
                <h2 onClick={()=>navigate("/")} className={ styles.name}>Delivery <span>Mart</span></h2>
            </div>
            <div className={ styles.cartLoginRegister}>
                    <div className={ styles.cartAndCount}>
                    <FaShoppingCart onClick={()=>navigate("/cart")} className={styles.cartLogo} />
                        <p>{numberOfCartItems}</p>
                </div>
            <div className={ styles.LoginRegisterParent}>
                <p onClick={()=>navigate("/login")} className={ styles.loginBtn}>Login</p>
            <p onClick={()=>navigate("/signin")} className={ styles.registerBtn}>Register</p></div></div>
        </div>
  )
}

export default Navbar