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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam error enim saepe aperiam nulla iure officiis qui itaque consectetur, repellendus vero placeat culpa deserunt laudantium fugiat fuga. Neque, maxime tenetur!
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