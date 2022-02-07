import { useState } from 'react';
import { Typography } from '../../theme';
import css from './style.module.scss'

type Props = {
    label: string,
    labelColor: { color: string },
    id: string,
    password: boolean,
    color: { color: string }
    fonts: { fontSize: string, fontWeight: string }
    size: any,
    placeholder: string
};

export const AppInput = ({ label, labelColor, id, password, color, fonts, size, placeholder }: Props) => {
    const [visible, setVisible] = useState(!password)


    return (
        <div>
            <label htmlFor={id} style={{ ...Typography.para, ...labelColor }} className={css.label} >{label}</label>
            <div className={css.inputContainer}>
                <input id={id} type={visible ? "text" : 'password'} placeholder={placeholder} style={{ ...fonts, ...color, ...size }} className={css.input} />
                {password ? <button className={css.button} onClick={() => setVisible(!visible)}>{visible ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.59 10.59C10.384 10.811 10.1356 10.9884 9.85962 11.1113C9.58362 11.2343 9.28568 11.3004 8.98357 11.3058C8.68146 11.3111 8.38137 11.2555 8.10121 11.1424C7.82104 11.0292 7.56654 10.8608 7.35289 10.6471C7.13923 10.4334 6.9708 10.1789 6.85763 9.89878C6.74447 9.61862 6.6889 9.31853 6.69423 9.01642C6.69956 8.71431 6.76568 8.41637 6.88866 8.14037C7.01163 7.86438 7.18894 7.61597 7.41 7.40999M13.455 13.455C12.1729 14.4322 10.6118 14.9736 9 15C3.75 15 0.75 8.99999 0.75 8.99999C1.68292 7.26141 2.97685 5.74244 4.545 4.54499L13.455 13.455ZM7.425 3.17999C7.94125 3.05915 8.4698 2.99874 9 2.99999C14.25 2.99999 17.25 8.99999 17.25 8.99999C16.7947 9.85169 16.2518 10.6535 15.63 11.3925L7.425 3.17999Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M0.75 0.75L17.25 17.25" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg> : <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 9C0.75 9 3.75 3 9 3C14.25 3 17.25 9 17.25 9C17.25 9 14.25 15 9 15C3.75 15 0.75 9 0.75 9Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                }</button> : <></>}
            </div>
        </div>
    )
}