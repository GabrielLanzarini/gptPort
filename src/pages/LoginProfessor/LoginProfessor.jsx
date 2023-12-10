import { Link } from 'react-router-dom'
import { DefaultInput, PasswordInput } from '../../components/Inputs/Inputs'
import { NavBar } from '../../components/NavBar/NavBar'
import style from './LoginProfessor.module.css'
import React from "react";
import img from './Professor.jpg'

export default function LoginProfessor() {
    return (
        <>
            <NavBar />
            <div className={style.two_grid_container}>
                <div className={style.infos_container}>
                    <div>
                        <h1>Login Professor</h1>
                        <p className={style.blue_text}>por favor realize o seu login</p>
                    </div>
                    <div className={style.inputs_container}>
                        <DefaultInput name="email" title="E-mail" />
                        <PasswordInput name="password" title="Senha" />
                    </div>
                    <button className={style.blue_button}><Link to="/palavrasMaisBuscadas" className={style.blue_button} >Login</Link></button>
                </div>
                <div> 
                    <img className={style.image_container} src={img}/>
                </div>
            </div>
        </>
    )
}