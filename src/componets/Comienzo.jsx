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
                 playing={false}
                 width='290px' 
                 height='80%' 
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
               <a  href="https://eltemach.net/" target="_BLANCK"> 
                Seguir en las redes
               </a>
              </div>
              <p>
               Luego de haberlo seguido, comenzaremos con una guía creada para tratar de que tu camino sea lo más fácil posible.
              </p>
            </section>
         </div> 
         <div className={styles.Pasos}>
           <article className={styles.requisitosBasicos}>
             <h2>Requisitos Basicos</h2>
             <p>
              <span>Requisitos: </span>Como ya dijimos antes de comenzar, existen requisitos básicos. En este caso, solo pedimos 3 cosas. Lo primero es que sigas al temach en todas las redes que utilices a menudo. El segundo es que veas el video correspondiente a tu género, que ya nombramos al inicio. Y por último, que tengas en mente que, a pesar de que tal vez estés en un mal momento, tal vez pienses que no estás bien y que no hay salida. Sin embargo, quiero que sepas que no estás solo. Una enorme cantidad de gente entiende lo que estás pasando y está dispuesta a escucharte y ayudarte de la forma que puedan. Solo falta que les des la oportunidad. 
             </p>
             <p className={styles.borderP}>
              <span>¿Por qué debería cumplir estos requisitos?</span><br></br>
               Seguir al temach en redes sociales sirve para enfrentar el problema de las redes sociales. Hoy en día, las redes sociales son un lugar donde se destruye la salud mental masculina, esto debido al contenido sexual tan publicitado en redes que fomenta el simpleo. Lo que buscamos siguiendo al temach en redes es que el algoritmo de tus redes te recomiende el contenido del temach y similares para limpiar tus redes.
               <br></br>
               <br></br>
               <span>¿Y ver los videos para qué?</span><br></br>
                Los videos son una guía hecha por el temach, 10 pasos para que puedas empezar. Una vez que apliques esos consejos, podrás seguir con esta guía o directamente seguir estudiando el contenido por tu cuenta.
             </p>
           </article>
         </div>
        </>
    )
}

export default Comienzo