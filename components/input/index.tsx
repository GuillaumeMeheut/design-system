import { useState } from 'react';
import css from './style.module.scss'

type Props = {
    label: string,
    id: string,
    password: boolean,
    color: { color: string }
    fonts: { fontSize: string, fontWeight: string }
    size: any
};

export const AppInput = ({ label, id, password, color, fonts, size }: Props) => {
    console.log({ ...fonts, ...color, ...size });

    const [visible, setVisible] = useState(!password)

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div>
                <input id={id} type={visible ? "text" : 'password'} />
                {password ? <button onClick={() => setVisible(!visible)}>svg oeil</button> : <></>}
            </div>
        </div>
    )
}