import { NavBar } from "../../components/NavBar/NavBar";
import style from './PalavrasMaisBuscadas.module.css'
import React from "react";

export function PalavrasMaisBuscadas() {
    return (
        <>
            <NavBar />
            <div className={style.mainContainer} >
                <div className={style.numberBarContainer}>

                </div>
                <div className={style.chartContainer}>

                </div>
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