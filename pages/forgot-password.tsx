import type { NextPage } from 'next'
import { AppButton, AppInput, AppText } from '../components'
import css from '../styles/forgot-password.module.scss'
import { ButtonSize, Color, InputSize, Typography } from '../theme'

const ForgotPassword: NextPage = () => {

    const validation = () => {
        console.log('proc');
    }

    return (
        <div className={css.page}>
            <div className={css.bgContainer}>
                <div className={css.contentContainer}>

                    <AppText Tag={'h3'} text={"Forgot password"} color={Color.white} fonts={Typography.title} />
                    <div className={css.textContainer}>
                        <div style={{ marginRight: "5px" }}>
                            <AppText Tag={'p'} text={"Return to "} color={Color.white} fonts={Typography.para} />
                        </div>
                        <AppText Tag={'a'} href="/signin" text={"Sign In"} color={Color.tertiary} fonts={Typography.para} />
                    </div>
                    <AppInput label={"Password"} labelColor={Color.white} id={"password"} password={true} color={Color.primary} fonts={Typography.para} size={InputSize.input} />
                    <AppButton text={"Send"} color={Color.white} fonts={Typography.para} size={ButtonSize.button} onClick={() => validation()} />

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
