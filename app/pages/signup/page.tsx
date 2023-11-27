'use client';
import { useEffect, useState } from 'react';
import styles from './signup.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '@/app/components/Loading';
import { addUser } from '@/services/serverFunctions/Serverfunctions';

export default function SignUp() {
    const router = useRouter();
    const usernameRegex = new RegExp(/^[a-zA-Z0-9]{3,15}$/)
    const emailRegex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);
    const passwordRegex = new RegExp(/^[a-zA-Z0-9]{8,35}$/);
    const [user, setUser] = useState({ username: "", email: "", password: "" })
    const [verificationError, setVerificationError] = useState({ value: false, message: "" });
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { status } = useSession();

    useEffect(() => {
        if (status == 'authenticated') {
            router.push("/");
        }
    }, [status]);

    async function registerUser() {
        const result = await addUser(user);

        if (result == true) {
            router.push("/pages/login");
        } else {
            setVerificationError({
                ...verificationError,
                value: true,
                message: result
            });
        }
    }

    function verifyInput(e: any) {
        e.preventDefault();

        if (!usernameRegex.test(user.username)) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }

        if (!emailRegex.test(user.email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!passwordRegex.test(user.password)) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        if (usernameRegex.test(user.username) && emailRegex.test(user.email) && passwordRegex.test(user.password)) {
            registerUser();
        }
    }

    function inputChange(e: any) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
            {(status == 'unauthenticated') ?
                <div className={styles.form_container}>
                    <form className={styles.signup_form} autoComplete='off' onSubmit={(e) => { verifyInput(e) }}>
                        <h1>Sign Up</h1>
                        {verificationError.value &&
                            <p className={styles.verification_error}>{verificationError.message}</p>
                        }

                        <input id={styles.user_name} type='text' name='username' value={user.username} placeholder='Username' onChange={(e) => { inputChange(e) }} autoComplete='off' />
                        {usernameError &&
                            <p className={styles.error_message}>must be at least 3 characters</p>
                        }

                        <input id={styles.user_email} type='text' name='email' value={user.email} placeholder='Email' onChange={(e) => { inputChange(e) }} autoComplete='off' />
                        {emailError &&
                            <p className={styles.error_message}>valid email is reqiured</p>
                        }

                        <input id={styles.user_pwd} type='password' name='password' placeholder='Password' onChange={(e) => { inputChange(e) }} autoComplete='off' />
                        {passwordError &&
                            <p className={styles.error_message}>must be 8 to 35 characters</p>
                        }

                        <button type='submit'>SIGN UP</button>

                        <p className={styles.signup_link}>Already have an account? <Link href={"/pages/login"} as={"/pages/login"}>Login</Link></p>
                    </form>
                </div>
                :
                <Loading />
            }
        </>
    )
}