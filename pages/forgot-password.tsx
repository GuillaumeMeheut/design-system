import type { NextPage } from 'next'
import { AppButton, AppInput, AppText } from '../components'
import css from '../styles/forgot-password.module.scss'
import { ButtonSize, Color, InputSize, Typography } from '../theme'

const ForgotPassword: NextPage = () => {
    return (
        <div className={css.page}>
            <div className={css.bgContainer}>
                <div className={css.contentContainer}>

                    <AppText Tag={'h3'} text={"Forgot password"} color={Color.white} fonts={Typography.title} />
                    <div className={css.textContainer}>
                        <div style={{ marginRight: "5px" }}>
                            <AppText Tag={'p'} text={"Return to "} color={Color.white} fonts={Typography.para} />
                        </div>
                        <a href="/signin">
                            <AppText Tag={'a'} text={"Sign In"} color={Color.tertiary} fonts={Typography.para} />
                        </a></div>
                    <AppInput label={"Password"} labelColor={Color.white} id={"password"} password={true} color={Color.primary} fonts={Typography.para} size={InputSize.input} />
                    <AppButton text={"Send"} color={Color.white} fonts={Typography.para} size={ButtonSize.button} />

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
