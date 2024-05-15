//Styles
import styles from "../modules/Footer.module.css"
//Imagenes
import logoMaxiDev from "../assets/temachLogo.jpg"

function Footer(){
    return(
        <>
        <footer className={styles.footer}>  
          <section className={styles.derechosFooter}>
            <p>
             Todos los derehos reservados @MaxiDev CEO de connected world.
            </p>
          </section>
        </footer>
        </> 
    )
}

export default Footer