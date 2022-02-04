import type { NextPage } from 'next'
import { AppButton, AppText } from '../components'
import css from '../styles/index.module.scss'
import { ButtonSize, Color, Typography } from '../theme'

const SignIn: NextPage = () => {
    return (
        <div>
            <AppButton text={"Se connecter"} color={Color.primary} fonts={Typography.title} size={ButtonSize.button} />
            <AppText Tag={'h3'} text={"Se connecter"} color={Color.primary} fonts={Typography.title} ></AppText>
        </div>
    )
}

export default SignIn
