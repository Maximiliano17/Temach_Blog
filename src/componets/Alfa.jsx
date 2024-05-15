//Styles
import styles from "../modules/AlfaOmega.module.css"
//Importes
import React from 'react'
import ReactPlayer from "react-player";

function Alfa(){
    return(
        <>
        <div className={styles.containerAlfa}>
          <section className={styles.AlfaArticles}>
            <div className={styles.tituloArticle}>
              <h2>Como empezar el camino del alfa 🏋🏼‍♀️</h2>
            </div>
            <div className={styles.videoAlfa}>
            <ReactPlayer
                className={styles.video}
                url='https://youtu.be/ZltTK8-OuEY?si=Ek9vYg_vxluSyoDW'
                controls = {true}
                width='100%' 
                height='100%'
                />
            </div>
            <p className={styles.textoExplicativo}>
             ¿Quieres comenzar en el camino del alfa? Cuando nos adentramos en este sendero, un problema común es que no sabemos por dónde empezar. Si estás interesado en dar el primer paso, te dejo este video para que te introduzcas en el mundo del alfa. Sin embargo, es importante no malinterpretarlo: este video solo pretende darte una idea del contenido y la mentalidad a la que debes aspirar. Al principio, no hay expectativas definidas; puedes empezar de manera tranquila o sumergirte de forma más intensa. Todo depende completamente de tu tiempo disponible. Si eres mujer y deseas comenzar, es mejor que veas este video para adentrarte en el camino de la omega.
              <br></br>
            </p>
            <div className={styles.videoAlfa}>
                <ReactPlayer
                    className={styles.video}
                    url='https://youtu.be/eK3I4afVCoM?si=Gzj2LxQGbxUsONWj'
                    controls = {true}
                    width='100%'
                    height='100%'
                    />
              </div>
              <p className={styles.textoExplicativo}>
                Nuevamente, este video es solo una introducción al camino correcto: el camino de la superación personal. Si estás interesado en avanzar en este mundo, te dejo una guía sobre cómo comenzar, qué videos ver para comprender los conceptos necesarios, consejos y recursos para que tu camino sea mucho más fácil y ameno. ¡Suerte, mi compa, y Modo Guerra!
                <br></br>
              </p>
              <section className={styles.btnAccion}>
                <button className={styles.btnGuia}>
                  Ver Guia
                </button> 
              </section>
          </section>
        </div> 
        </>
    )
} 

export default Alfa