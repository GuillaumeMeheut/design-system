import type { NextPage } from 'next'
import { AppButton, AppInput, AppText } from '../components'
import css from '../styles/index.module.scss'
import { ButtonSize, Color, InputSize, Typography } from '../theme'

const SignUp: NextPage = () => {
    return (
        <div className={css.page}>
            <div className={css.bgContainer}>
                <div className={css.contentContainer}>

                    <AppText Tag={'h3'} text={"Sign up"} color={Color.black} fonts={Typography.title} />
                    <div className={css.textContainer}>
                        <div style={{ marginRight: "5px" }}>
                            <AppText Tag={'p'} text={"Already got registered?"} color={Color.black} fonts={Typography.para} />
                        </div>
                        <a href="/signin">
                            <AppText Tag={'a'} text={"Sign in"} color={Color.tertiary} fonts={Typography.para} />
                        </a></div>
                    <AppInput label={"Email"} labelColor={Color.black} id={"email"} password={false} color={Color.primary} fonts={Typography.para} size={InputSize.input} />
                    <AppInput label={"Password"} labelColor={Color.black} id={"password"} password={true} color={Color.primary} fonts={Typography.para} size={InputSize.input} />

                    <AppButton text={"Sign Up"} color={Color.white} fonts={Typography.para} size={ButtonSize.button} />

                </div>
            </div>
        </div>
    )
}

export default SignUp
