'use client';
import styles from './login.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import Loading from '@/app/components/Loading';

export default function Login() {
    const { status } = useSession();
    const router = useRouter();
    const emailRegex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);
    const passwordRegex = new RegExp(/^[a-zA-Z0-9]{8,}$/);
    const [user, setUser] = useState({ email: "", password: "" })
    const [verificationError, setVerificationError] = useState("");

    useEffect(() => {
        if (status === 'authenticated') {
            router.push("/");
        }
    }, [status]);

    function verifyUser() {
        signIn('credentials', {
            email: user.email,
            password: user.password,
            redirect: false
        }).then((response) => {
            if (response?.error) {
                if (response?.error == 'fetch failed') {
                    setVerificationError("Something went wrong, please try again!");
                } else {
                    setVerificationError("Incorrect email or password!");
                }
            } else {
                router.refresh();
                router.push("/");
            }
        })
    }

    function verifyInput(e: any) {
        e.preventDefault();

        if (emailRegex.test(user.email) && passwordRegex.test(user.password)) {
            setVerificationError("");

            verifyUser();
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
            {status == 'unauthenticated' ?
                <div className={styles.form_container}>
                    <form className={styles.login_form} autoComplete='off' onSubmit={(e) => { verifyInput(e) }}>
                        <h1>Login</h1>
                        {verificationError &&
                            <p className={styles.verification_error}>{verificationError}</p>
                        }

                        <input id={styles.user_email} type='text' name='email' value={user.email} placeholder='Email' onChange={(e) => { inputChange(e) }} autoComplete='off' />

                        <input id={styles.user_pwd} type='password' name='password' placeholder='Password' onChange={(e) => { inputChange(e) }} autoComplete='off' />

                        <button type='submit' >LOGIN</button>

                        <p className={styles.signup_link}>Don't have an account? <Link href={"/pages/signup"} as={"/pages/signup"}>Sign Up</Link></p>
                    </form>
                </div>
                :
                <Loading />
            }
        </>
    )
}

