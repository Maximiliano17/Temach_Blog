import styles from "../modules/Comunidad.module.css"
import Header from "../componets/Header"

function Creadores(){
    return(
        <> 
        <div className={styles.containerCreadores}>
         <Header />
          <section className={styles.creadoresHome}>
           Pitos
          </section>
        </div>
        </>
    )
}

export default Creadores 