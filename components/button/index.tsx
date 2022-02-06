import css from './style.module.scss'


type Props = {
    text: string,
    color: { color: string }
    fonts: { fontSize: string, fontWeight: string }
    size: any
    onClick: (x: any) => void
};

export const AppButton = ({ text, color, fonts, size, onClick }: Props) => {
    return (
        <button className={css.button} style={
            { ...fonts, ...color, ...size }
        } onClick={onClick}>
            {text}
        </button>
    )
}