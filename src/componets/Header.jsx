import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
//Styles
import styles from "../modules/Header.module.css"
//Imagenes
import imagen from "../assets/icons/web.png"

function Header(){ 
    return(  
        <> 
        <header className={styles.header}> 
          <nav className={styles.navBar}>
              <NavLink exact to={`/`} className={styles.listitem} activeClassName={styles.active} > 
                Inicio
              </NavLink> 
              <Link  to={`/Guia`}  className={styles.listitem}> 
                Como empezar 
              </Link> 
              <a href="#">Temach entrevista</a>
              <a href="#">Compas de hierro</a>
              <a href="#">Mercancia de la comunidad</a>
          </nav>
          <button>
           <a href="https://eltemach.net/" target="_BLANCK">Pagina oficial</a>
          </button>
        </header> 
        </>
    )
}

export default Header