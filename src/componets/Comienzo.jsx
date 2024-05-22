//Styles
import styles from "../modules/Guia.module.css"
//React 
import ReactPlayer from "react-player"; 

function Comienzo(){
    return( 
        <>
         <div className={styles.ComienzoContainer}>
            <article className={styles.shortInfo}>
             <ReactPlayer
                 className={styles.video}
                 url='https://youtube.com/shorts/TgoEBntmQ6U?si=MIxxMSHEH165CqBd'
                 controls = {true}
                 playing={true}
                 width='290px' 
                 height='80%'
                 config={{ youtube: { playerVars: { start: 10 } } }}
                />
            </article>
            <section className={styles.infoShort}>
              <h2>El primer paso es el mas dificil.</h2>
              <p>
               El primer paso siempre es el más difícil, ya sea por el miedo a qué hacer o por la falta de una guía adecuada. En este artículo, te daremos una idea de cómo empezar en este camino. Compartiremos videos que te ayudarán a comprender los aspectos básicos de esta filosofía, así como consejos de una comunidad que estará dispuesta a ayudarte.
              </p>
              <p>
               El primer paso en este camino consiste en seguir en redes sociales a personas de valor. Sin embargo, esto no se considera el primer paso, ya que es un requisito previo para comenzar.
              </p>
              <div className={styles.redes}>
               <button>
                Seguir en las redes
               </button>
              </div>
            </section>
         </div>
        </>
    )
}

export default Comienzo