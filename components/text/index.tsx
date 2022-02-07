import css from './style.module.scss'

type Props = {
    Tag: any,
    text: string,
    color: { color: string }
    fonts: { fontSize: string, fontWeight: string }
    href?: string
};

export const AppText = ({ Tag, text, color, fonts, href }: Props) => {
    return (
        <Tag href={href} className={css.text} style={
            { ...fonts, ...color }
        }>{text}</Tag>
    )
}