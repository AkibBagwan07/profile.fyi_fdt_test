import styles from "./SignIn.module.css"
import { LiaOpencart } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  return (
      <div className={styles.emptyCartQuote}>
          <LiaOpencart className={styles.cartLogo} />
          <div className={styles.quoteAndExplore}>
            <p>Register yet to be implemented!</p>
            <span className={styles.exploreProductsBtn}><p onClick={() => navigate("/")}>Explore Products</p></span></div>
    </div>
  )
}

export default SignIn