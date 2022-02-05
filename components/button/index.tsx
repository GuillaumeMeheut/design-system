import css from './style.module.scss'


type Props = {
    text: string,
    color: { color: string }
    fonts: { fontSize: string, fontWeight: string }
    size: any
};

export const AppButton = ({ text, color, fonts, size }: Props) => {
    return (
        <button className={css.button} style={
            { ...fonts, ...color, ...size }
        }>
            {text}
        </button>
    )
}