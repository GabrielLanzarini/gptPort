import { NavBar } from "../../components/NavBar/NavBar";
import style from './PalavrasMaisBuscadas.module.css'
import React from "react";
import img from './Grafico.png'

export function PalavrasMaisBuscadas() {
    return (
        <>
            <NavBar />
            <div className={style.mainContainer} >
                <p className={style.blue_text}>Gráfico de palavras mais procuradas</p>
                <img className={style.chartContainer} src={img}/>
            </div>
        </>
    )
}

// function chartBar() {
//     return (
//         <>
//             <div>

        
//         </>
//     )
// }