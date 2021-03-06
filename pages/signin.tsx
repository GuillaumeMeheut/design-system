import type { NextPage } from 'next'
import { AppButton, AppInput, AppText } from '../components'
import css from '../styles/signin.module.scss'
import { ButtonSize, Color, InputSize, Typography } from '../theme'

const SignIn: NextPage = () => {
    const validation = () => {
        console.log('proc');
    }
    return (
        <div className={css.page}>
            <div className={css.bgContainer}>
                <div className={css.contentContainer}>

                    <AppText Tag={'h3'} text={"Sign in"} color={Color.white} fonts={Typography.title} />
                    <div className={css.textContainer}>
                        <div style={{ marginRight: "5px" }}>
                            <AppText Tag={'p'} text={"Not signed up?"} color={Color.white} fonts={Typography.para} />
                        </div>
                        <AppText Tag={'a'} href="/" text={"Sign up"} color={Color.tertiary} fonts={Typography.para} />
                    </div>
                    <AppInput label={"Email"} placeholder='email@gmail.com' labelColor={Color.white} id={"email"} password={false} color={Color.primary} fonts={Typography.para} size={InputSize.input} />
                    <AppInput label={"Password"} placeholder='*********' labelColor={Color.white} id={"password"} password={true} color={Color.primary} fonts={Typography.para} size={InputSize.input} />
                    <a href="/forgot-password" style={{ alignSelf: "flex-start" }}>
                        <AppText Tag={'a'} text={"Forgot password? "} color={Color.tertiary} fonts={Typography.paraSmall} />
                    </a>
                    <AppButton text={"Sign In"} color={Color.white} fonts={Typography.para} size={ButtonSize.button} onClick={() => validation()} />

                </div>
            </div>
        </div>
    )
}

export default SignIn
