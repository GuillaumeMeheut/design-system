import type { NextPage } from 'next'
import { AppButton } from '../components'
import css from '../styles/index.module.scss'
import { Color, Fonts } from '../theme'

const SignIn: NextPage = () => {
    return (
        <div>
            <AppButton text={"Se connecter"} color={Color.primary} fonts={Fonts.title} />
        </div>
    )
}

export default SignIn
