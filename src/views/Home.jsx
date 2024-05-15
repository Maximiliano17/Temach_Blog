//styles
import styles from "../modules/Home.module.css"
//Imagenes Iconos
import iconY from "../assets/icons/youtube.png"
import iconI from "../assets/icons/instagram.png"
import iconT from "../assets/icons/twitch.png"

function Home(){
    return(   
        <>
        <div className={styles.ContaierHome}>
        
        <header className={styles.header}>  

          <a href="#">Inicio</a>
          <a href="#">Como empezar</a>
          <a href="#">Temach entrevista</a>
          <a href="#">Compas de hierro</a>
          <a href="#">Mercancia de la comunidad</a>
          
        </header> 
          <section className={styles.infoHome}> 
            <h1>Mode 🔥</h1>
            <p>Puro modo guerra mi compa!!</p>
            <button>Ver Guia</button>
          </section>
        </div>
        <div className={styles.redContact}>
            <a href="https://www.youtube.com/@ELTEMACH" target="_BLANCK"><img src={iconY} loading="lary" alt="Icono De Youtube" title="Canal Oficial" /></a>
            <a href="https://www.instagram.com/eltemach/" target="_BLANCK"><img src={iconI} loading="lary" alt="Icono De Instagram" title="Canal Oficial" /></a>
            <a className={styles.iconoG} target="_BLANCK" href="https://www.twitch.tv/eltemach"><img src={iconT} loading="lary" alt="Icono De Facebook" title="Canal Oficial" /></a>
         </div>
        </>
    )
}

export default Home