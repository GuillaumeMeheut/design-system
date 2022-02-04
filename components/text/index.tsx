import css from './style.module.scss'

type Props = {
    Tag: any,
    text: string,
    color: { color: string }
    fonts: { fontSize: string, fontWeight: string }
};

export const AppText = ({ Tag, text, color, fonts }: Props) => {
    return (
        <Tag className={css.text} style={
            { ...fonts, ...color }
        }>{text}</Tag>
    )
}