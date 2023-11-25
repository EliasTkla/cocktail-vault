import styles from './favourites.module.css';
import Banner from '../../components/Banner';
import CocktailList from '../../components/CocktailList';
import SearchInput from '@/app/components/inputs/SearchInput';
import { redirect } from 'next/navigation';
import Loading from '@/app/components/Loading';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import ToTopButton from '@/app/components/buttons/ToTopButton';

export default async function Favourites({ searchParams }: { searchParams: { search: string } }) {
    const session = await getServerSession(options);

    if (!session?.user?.email) {
        redirect('/pages/login');
    }

    return (
        <>
            {session?.user?.email ?
                <div className={styles.favourites_container}>
                    <Banner backgroundFile={"favouritesBanner.jpg"} containerClass={"banner_container"} imageClass={"banner"} />

                    <h1>My Favourites</h1>

                    <div className={styles.result_container}>
                        <div className={styles.search_container}>
                            <SearchInput />
                        </div>

                        <div>
                            <CocktailList query={searchParams.search ? searchParams.search : ""} page='favourites' />

                            <ToTopButton />
                        </div>

                    </div>\
                </div >
                :
                <Loading />
            }
        </>
    )
}
