import type { NextPage } from 'next'
import { AppButton, AppInput, AppText } from '../components'
import css from '../styles/index.module.scss'
import { ButtonSize, Color, InputSize, Typography } from '../theme'

const SignUp: NextPage = () => {
    const validation = () => {
        console.log('proc');
    }
    return (
        <div className={css.page}>
            <div className={css.bgContainer}>
                <div className={css.contentContainer}>

                    <AppText Tag={'h3'} text={"Sign up"} color={Color.white} fonts={Typography.title} />
                    <div className={css.textContainer}>
                        <div style={{ marginRight: "5px" }}>
                            <AppText Tag={'p'} text={"Already got registered?"} color={Color.white} fonts={Typography.para} />
                        </div>
                        <AppText Tag={'a'} href="/signin" text={"Sign in"} color={Color.tertiary} fonts={Typography.para} />
                    </div>
                    <AppInput label={"Email"} placeholder='email@gmail.com' labelColor={Color.white} id={"email"} password={false} color={Color.primary} fonts={Typography.para} size={InputSize.input} />
                    <AppInput label={"Password"} placeholder='*********' labelColor={Color.white} id={"password"} password={true} color={Color.primary} fonts={Typography.para} size={InputSize.input} />
                    <AppButton text={"Sign Up"} color={Color.white} fonts={Typography.para} size={ButtonSize.button} onClick={() => validation()} />

                </div>
            </div>
        </div>
    )
}

export default SignUp
