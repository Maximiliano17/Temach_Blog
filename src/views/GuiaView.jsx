//Components
import Comienzo from "../componets/Comienzo";
import Header from "../componets/Header"
//Styles
import styles from "../modules/Guia.module.css"
//React 
import ReactPlayer from "react-player";

function Guia(){
    return( 
        <>
         <div className={styles.ContainerGuia}>
          <Header />
          <div className={styles.guiaInicio}>
            <section className={styles.videoGuia}>
             <ReactPlayer
                 className={styles.video}
                 url='https://www.youtube.com/live/fBhIw70HAGU?si=MdQsS6hVXZquym6t'
                 controls = {true}
                 width='80%' 
                 height='60%'
                />
            </section>
            <section className={styles.infoGuia}>
                <h1>Comienza el camino del alfa</h1>
                <p>
                 Mis compas en este live nos sumergiremos en el poder de la auto-convicción y cómo nuestra percepción de nosotros mismos puede moldear nuestra realidad. "Créetelo" no es solo un llamado a la acción, es una invitación a una transformación profunda.    
                </p>
            </section>
          </div>  
         </div>
         <Comienzo />
        </>
    )
}

export default Guia