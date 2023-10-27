'use client';
import Banner from '@/app/components/Banner';
import styles from './profile.module.css';
import Loading from '@/app/components/Loading';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function Profile() {
    const session = useSession();
    const [user, setUser] = useState({ username: "", email: "", password: "" })

    if (session.status == 'unauthenticated') {
        redirect("/pages/login");
    }

    function inputChange(e: any) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className={styles.profile_container}>
            <Banner backgroundFile={"profileBanner.jpg"} containerClass={"banner_container"} imageClass={"banner"} />

            <h1>Profile</h1>

            {session.status == 'authenticated' ?
                <form className={styles.profile_form} autoComplete='off' onSubmit={(e) => { }}>
                    <input id={styles.user_name} type='text' name='username' value={session.data.user?.name?.toString()} placeholder='Username' onChange={(e) => { inputChange(e) }} disabled />
                    <button>CHANGE</button>
                    <input id={styles.user_email} type='text' name='email' value={session.data.user?.email?.toString()} placeholder='Email' onChange={(e) => { inputChange(e) }} disabled />
                    <button>CHANGE</button>
                    <input id={styles.user_pwd} type='password' name='password' placeholder='..........' onChange={(e) => { inputChange(e) }} disabled />
                    <button>CHANGE</button>
                </form>
                :
                <Loading />
            }
        </div>
    )
}