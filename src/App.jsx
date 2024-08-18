/* eslint-disable no-unused-vars */
import Section from "./components/Section/Section"
import styles from "./App.module.css"
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import Cart from "./components/CartPage/Cart";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [quantity,setQuantity] = useState(1)
      console.log("Cart Items ==>" ,cartItems)
  
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Navbar numberOfCartItems={ cartItems.length} />      
        <Routes>
          <Route path="/" element={<Section quantity={quantity} cart={cartItems} setCart={ setCartItems} />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart setCartItems={setCartItems} quantity={quantity} cartItems={ cartItems} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App