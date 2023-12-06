import { useState } from 'react'
import { DefaultInput, PasswordInput } from '../../components/Inputs/Inputs'
import { NavBar } from '../../components/NavBar/NavBar'
import { Link} from 'react-router-dom'
import style from './Login.module.css'
import React from "react";

export function Login() {
    return (
        <>
            <NavBar />
            <div className={style.two_grid_container}>
                <div className={style.infos_container}>
                    <div>
                        <h1>Login</h1>
                        <p className={style.blue_text}>Bem-vindo novamente!</p>
                        <p className={style.blue_text}>por favor realize o seu login</p>
                    </div>
                    <div className={style.inputs_container}>
                        <DefaultInput name="email" title="E-mail" />
                        <PasswordInput name="password" title="Senha" />
                    </div>
                    <button className={style.blue_button}>Login</button>
                    <p>Não possui uma conta? <Link to="/cadastro" className={style.blue_text_small}>Cadastre-se agora!</Link></p>
                </div>
                <div>
                    <p className={style.image}>Imagem</p>
                </div>
            </div>
        </>
    )
}

export function Register() {

    return (
        <>
            <NavBar />
            <div className={`${style.register_container}`}>
                <div className={style.infos_container}>
                    <div>
                        <h1>Cadastro</h1>
                        <p className={style.blue_text}>Seja bem vindo</p>
                        <p className={style.blue_text}>Realize o seu cadastro para criar debates incríveis.</p>
                    </div>
                    <div className={style.inputs_row_container}>
                        <div className={style.inputs_container}>

                            <DefaultInput placeholder="Ex: Roger" title="Nome" />
                            <DefaultInput placeholder="Ex: username@hotmail.com" title="Email" />
                        </div>
                        <div className={style.inputs_container}>
                            <PasswordInput placeholder="************ " title="Senha" />
                            <PasswordInput placeholder="************ " title="Confirma Senha" />
                        </div>
                    </div>
                    <div className={style.bottom_infos_container}>
                        <button className={style.blue_button}>Cadastrar-se</button>
                        <p>Já possui uma conta? <Link to="/login" className={style.blue_text_small}>Faça o login agora!</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}