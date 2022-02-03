import css from './style.module.scss'

type Props = {
    text: string,
    color: { color: string }
    fonts: { fontSize: string, fontWeight: string }
};

export const AppButton = ({ text, color, fonts }: Props) => {
    fonts
    return (
        <button className={css.button} style={
            { ...fonts, ...color }
        }>{text}</button>
    )
}