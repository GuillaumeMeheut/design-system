import type { NextPage } from 'next'
import { AppButton, AppInput, AppText } from '../components'
import css from '../styles/index.module.scss'
import { ButtonSize, Color, InputSize, Typography } from '../theme'

const SignIn: NextPage = () => {
    return (
        <div>
            <AppButton text={"Se connecter"} color={Color.primary} fonts={Typography.title} size={ButtonSize.button} />
            <AppText Tag={'h3'} text={"Se connecter"} color={Color.primary} fonts={Typography.title} ></AppText>
            <AppInput label={"Email"} id={"Email"} password={false} color={Color.danger} fonts={Typography.para} size={InputSize.input} />
        </div>
    )
}

export default SignIn
