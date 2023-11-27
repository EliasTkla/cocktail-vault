import styles from './styles/cocktailList.module.css';
import CocktailCard from './CocktailCard';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';
import ErrorMessage from '@/app/components/ErrorMessage';
import PaginationController from './buttons/PaginationController';
import { getFavourites } from '@/services/serverFunctions/Serverfunctions';
import { getCocktailData } from '@/services/APIFunctions/APIFunctions';

export default async function CocktailList({ page, query, per_load }: { page: string, query?: string, per_load?: string }) {
    const session = await getServerSession(options);
    const cocktails: Cocktail[] = await getCocktailData();
    const favourites: any = page == "favourites" ? await getFavourites(session) : '';
    const end = Number(per_load ? per_load : '30');
    let list: Cocktail[] = [];

    if (page == "favourites") {
        if (favourites == "empty") {
            return (
                <div className={styles.placeholder}>
                    <h2>You haven't saved any cocktails yet!</h2>
                </div>
            )
        } else if (favourites == "error") {
            return (
                <ErrorMessage />
            )
        } else {
            list = cocktails.filter(item => favourites.includes(item.id));
        }
    } else {
        list = cocktails;
    }

    if (query) {
        list = list.filter(item => item.difficulty.toLowerCase().includes(query.toLowerCase()) || item.title.toLowerCase().includes(query.toLowerCase()));
    }

    return (
        <>
            {list && (
                <>
                    <>
                        {page != "home" ? <div className={styles.results_count}>Cocktails - {list.length}</div> : ''}
                        <div id="slide_show" className={page == "home" ? styles.home_slide : (page == "favourites" ? styles.fave_results : styles.results)}>
                            {page == "home" ?
                                <>
                                    {cocktails.slice(50, 70).map((item: Cocktail) => {
                                        return (
                                            <div key={item.id} className={styles.card_spacing}>
                                                <CocktailCard {...item} />
                                            </div>
                                        )
                                    })}
                                </>
                                :
                                <>
                                    {list.slice(0, end).map((item: Cocktail) => {
                                        return (
                                            <div key={item.id}>
                                                <CocktailCard {...item} />
                                            </div>
                                        )
                                    })}
                                </>
                            }
                        </div>
                        {page != "home" && (
                            <PaginationController
                                hasNextPage={list.length > end}
                            />
                        )}
                    </>

                </>
            )}
        </>
    );
}
