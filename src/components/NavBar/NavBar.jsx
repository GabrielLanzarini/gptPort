import { useEffect, useState } from 'react'
import style from './NavBar.module.css'
import { Link } from 'react-router-dom'
import img from './Logo.png'

export function NavBar() {
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(prev => !prev)

    useEffect(() => {
        setModal(false)
    }, [])

    return (
        <div className={style.main_container_ext}>
            <svg onClick={handleModal} className={style.menuIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>


            <div style={{ left: modal ? "0%" : "100%" }} className={style.main_container}>
                <img className={style.image_logo} src={img}/>
                <svg onClick={handleModal} className={style.closeIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path></svg>

                <nav>
                    <Link to="/" className={style.link_title}>Inicio</Link>
                    <Link to="/login" className={style.link_title}>Login</Link>
                    <Link to="/loginProfessor" className={style.link_title}>Professor</Link>
                    <Link to="/cadastro" className={style.blue_button} >Cadastro</Link>
                </nav>
            </div>
        </div>
    )
}

export function NavBarLogged() {
    return (
        <div className={style.main_container_logged}>
            <p>Image</p>
            <nav>
                {/* <Link >Duvidas</Link> */}
                <Link to="/duvidas" className={style.link_title} >Simulador</Link>
                <Link to="/" className={style.link_title} >Início</Link>
                <Link to="/" className={style.red_button} >Logout</Link >
            </nav>
        </div>
    )
} 