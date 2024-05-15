//Styles
import styles from "../modules/QuienSoy.module.css"
//Imagenes
import logo from "../assets/temachLogo.jpg"

function QuienSoy() {

  return (
    <>
      <div className={styles.containerQuienSoy}>
        <section className={styles.infoQuien}>
         <h2>¿Quién es el Temach?</h2>
         <p>
          El Temach es un reconocido influencer dedicado a aconsejar a jóvenes en el camino del alfa; de igual manera, guía a las mujeres en el camino de la omega. El Temach busca devolverle la dignidad y el valor que, con el paso de los años, los hombres perdieron.
         </p>
        </section>
        <section className={styles.infoImagen}>
          <img src={logo} alt="Logo del temach" title="Logo del temach" loading="lary" />
        </section>
      </div>
    </>
  )
}

export default QuienSoy
