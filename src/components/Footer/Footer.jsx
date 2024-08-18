import { LiaOpencart } from "react-icons/lia";
import styles from "./Footer.module.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const Footer = () => {
    return (
        <div className={ styles.Footer}>
      <div className={styles.brand}>
          <LiaOpencart className={ styles.logo} />
                <h2  className={ styles.name}>Delivery <span>Mart</span></h2>
            </div>
            <p className={styles.quote}>Our Greater asset is customer!</p>
            <div className={ styles.socialLinksParent}>
            <p>Reach out to Developer on</p></div>
            <div className={ styles.AllLinks}>
           <a className={styles.Link} href="https://www.linkedin.com/in/akib-bagwan-4997b625a/" target="_blank"> <FaLinkedin /><p>LinkedIn</p></a> |
           <a className={styles.Link} href="https://github.com/AkibBagwan07" target="_blank"> <FaGithub /><p>Github</p></a> |
            <a className={styles.Link} href="https://www.crio.do/learn/portfolio/akibbagwan69/" target="_blank"> <ImProfile /><p>Portfolio</p></a> |
             </div>  
        </div>
  )
}

export default Footer