import css from './style.module.scss'

type Props = {
    text: string,
    color: string
};

export const AppButton = ({ text, color }: Props) => {

    return (
        <button className={css.button} style={{
            color: color
        }}>{text}</button>
    )
}