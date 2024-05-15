//styles
import styles from "../modules/Negocio.module.css"
//Imagenes Iconos
import canalMorras from "../assets/CanalesSecundarios/TemachMujeresChannel.jpg"
import canalGamer from "../assets/CanalesSecundarios/TemachGaminChannel.jpg"
import canalMilitante from "../assets/CanalesSecundarios/TemachCombateMilitanteChannel.jpg"
import canalCrew from "../assets/CanalesSecundarios/TemachCrewChannel.jpg"
import canalMati from "../assets/CanalesSecundarios/TemachMatiChannel.jpg"

function Negocio(){
    return(
        <>
         <seccion className={styles.containerCanales}>
            <h3>Canales Secundarios</h3>
            <div className={styles.canalesSecundarios}>
                <a href="https://www.youtube.com/@ELTEMACH" target="_BLANCK" className={styles.canalSecundario}>
                   <img alt="EL TEMACH MORRAS" title="EL TEMACH MORRAS" loading="lary" src={canalMorras} />
                </a>
                <a href="https://www.youtube.com/@ELTEMACH" target="_BLANCK" className={styles.canalSecundario}>
                 <img alt="EL TEMACH MORRAS" title="EL TEMACH MORRAS" loading="lary" src={canalGamer} />
                </a>
                <a href="https://www.youtube.com/@ELTEMACH" target="_BLANCK" className={styles.canalSecundario}>
                 <img alt="EL TEMACH MORRAS" title="EL TEMACH MORRAS" loading="lary" src={canalMilitante} />
                </a>
                <a href="https://www.youtube.com/@ELTEMACH" target="_BLANCK" className={styles.canalSecundario}>
                 <img alt="EL TEMACH MORRAS" title="EL TEMACH MORRAS" loading="lary" src={canalCrew} />
                </a>
                <a href="https://www.youtube.com/@ELTEMACH" target="_BLANCK" className={styles.canalSecundario}>
                 <img alt="EL TEMACH MORRAS" title="EL TEMACH MORRAS" loading="lary" src={canalMati} />
                </a>
            </div> 
         </seccion>
        </>
    )
}

export default Negocio