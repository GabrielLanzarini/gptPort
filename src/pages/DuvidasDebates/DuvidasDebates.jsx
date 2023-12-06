import { useState } from "react";
import React from "react";
import { NavBarLogged } from "../../components/NavBar/NavBar";
import style from './Duvidas.module.css'


export default function Duvidas() {
    const [value, setValue] = useState('')

    const handleValue = (e) => setValue(e.target.value)

    return (
        <div className={style.main_container_flex}>
            <NavBarLogged />
            <div className={style.main_container}>
                <div className={style.chat_container}>
                    <div className={style.chat_container_int}>
                        <p className={style.message_chat}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, veritatis excepturi. Atque culpa optio repellat, fugit similique expedita, porro beatae deleniti ex dolorem vel nihil tempore eius molestiae et veritatis.</p>
                        <p className={style.message_person}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque vel possimus repudiandae nam exercitationem eligendi quibusdam a maxime consequuntur perspiciatis quidem rerum temporibus in minus eius, accusantium maiores nulla facere.</p>
                        <p className={style.message_chat}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, veritatis excepturi. Atque culpa optio repellat, fugit similique expedita, porro beatae deleniti ex dolorem vel nihil tempore eius molestiae et veritatis.</p>
                        <p className={style.message_person}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque vel possimus repudiandae nam exercitationem eligendi quibusdam a maxime consequuntur perspiciatis quidem rerum temporibus in minus eius, accusantium maiores nulla facere.</p>
                        <p className={style.message_chat}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, veritatis excepturi. Atque culpa optio repellat, fugit similique expedita, porro beatae deleniti ex dolorem vel nihil tempore eius molestiae et veritatis.</p>
                        <p className={style.message_person}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque vel possimus repudiandae nam exercitationem eligendi quibusdam a maxime consequuntur perspiciatis quidem rerum temporibus in minus eius, accusantium maiores nulla facere.</p>
                        <p className={style.message_chat}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, veritatis excepturi. Atque culpa optio repellat, fugit similique expedita, porro beatae deleniti ex dolorem vel nihil tempore eius molestiae et veritatis.</p>
                        <p className={style.message_person}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque vel possimus repudiandae nam exercitationem eligendi quibusdam a maxime consequuntur perspiciatis quidem rerum temporibus in minus eius, accusantium maiores nulla facere.</p>
                    </div>
                </div>
                <div className={style.inputs_container}>
                    {value.length > 3 && <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 13.0001H9V11.0001H3V1.8457C3 1.56956 3.22386 1.3457 3.5 1.3457C3.58425 1.3457 3.66714 1.36699 3.74096 1.4076L22.2034 11.562C22.4454 11.695 22.5337 11.9991 22.4006 12.241C22.3549 12.3241 22.2865 12.3925 22.2034 12.4382L3.74096 22.5925C3.499 22.7256 3.19497 22.6374 3.06189 22.3954C3.02129 22.3216 3 22.2387 3 22.1544V13.0001Z"></path></svg>}
                    <input type="text" value={value} onChange={handleValue} className={style.input} />
                </div>
            </div>
        </div >
    )
}