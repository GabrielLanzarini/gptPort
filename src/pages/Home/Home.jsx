import { NavBar } from "../../components/NavBar/NavBar";
import style from './Home.module.css'
import React from "react";

export default function Home() {
  const handleScrollDuvidas = () => scroll("duvidas")
  const handleScrollDebates = () => scroll("debate")

  const scroll = (id) => {
    const section = document.getElementById(id)
    section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <NavBar />
      <div className={style.two_grid_container}>
        <div className={style.description_container}>
          <p className={style.blue_text}>Seja Bem-vindo ao</p>
          <h1 className={style.title}>DireitoGPT</h1>
          <p className={style.description_text}>Seja bem-vindo ao DireitoGPT, a mais nova plataforma auxiliar de direito! Aqui você terá o suporte necessário para aprimorar e sanar suas experiências e dúvidas relacionadas ao curso de direito, tudo isso usando uma inteligência artificial capaz de responder suas questões e dar respostas para situações hipotéticas!</p>
          <div className={style.buttons_container}>
            <button onClick={handleScrollDuvidas} className={style.blue_button}>Dúvidas</button>
            <button onClick={handleScrollDebates} className={style.blue_button}>Juri</button>
          </div>
        </div>
        <div className={style.image_container}>
        </div>
      </div>
      <div id="duvidas" className={style.two_grid_container}>
        <div className={style.image_container}>
        </div>
        <div className={style.description_container}>
          <h1 className={style.title}>Dúvidas</h1>
          <p className={style.description_text}>Aqui fica a área de dúvidas, onde através de um chat integrado com uma inteligência artificial, você tem a possibilidade de abordar os temas em que precisa de ajuda e obter respostas precisas para um estudo mais completo!</p>
          <div className={style.buttons_container}>
            <button className={style.blue_button}>Dúvidas</button>
          </div>
        </div>
      </div>
      <div id="debate" className={style.two_grid_container}>
        <div className={style.description_container}>
          <h1 className={style.title}>Simule um debate online</h1>
          <p className={style.description_text}>Chegamos a área de simulação! Essa ferramenta foi desenvolvida para proporcionar uma experiência hipotética onde você pode apresentar seu caso para o júri, que é composto pela nossa inteligência artificial, e assim obter um veredito a partir das informações contidas em seu banco de dados!</p>
          <div className={style.buttons_container}>
            <button className={style.blue_button}>Simulador</button>
          </div>
        </div>
        <div className={style.image_container}>
        </div>
      </div>
    </>
  )
}