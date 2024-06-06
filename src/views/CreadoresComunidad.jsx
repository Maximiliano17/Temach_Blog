import styles from "../modules/Comunidad.module.css"
import Header from "../componets/Header"
import RecoCards from "../componets/RecomendacionesCard"

function Creadores(){
    return(
        <> 
        <div className={styles.containerCreadores}>
         <Header />
          <section className={styles.creadoresHome}>
           <h1> Recomendados</h1>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nesciunt tenetur expedita fuga nemo placeat amet dolorum, quam impedit sunt, neque voluptatibus ullam. Totam commodi error magni debitis aspernatur ab!
           </p>
          </section>
        </div>
        <RecoCards />
        </>
    )
}

export default Creadores 