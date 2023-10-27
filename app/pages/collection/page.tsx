import styles from './collection.module.css'
import SearchInput from '@/app/components/inputs/SearchInput';
import Banner from '@/app/components/Banner';
import CocktailList from '@/app/components/CocktailList';
import DropdownMenu from '@/app/components/inputs/DropdownMenu';
import ToTopButton from '@/app/components/buttons/ToTopButton';

export default function Page({ searchParams }: { searchParams: { search?: string, per_load?: string } }) {
    const search = searchParams.search ? searchParams.search : '';
    const per_load = searchParams.per_load ? searchParams.per_load : '';

    return (
        <div className={styles.collection_container}>
            <Banner backgroundFile={"collectionBanner.jpg"} containerClass={"banner_container"} imageClass={"banner"} />

            <div className={styles.search_container}>
                <SearchInput />
                {/* <DropdownMenu /> */}
            </div>

            <CocktailList query={search} page={"collection"} per_load={per_load} />

            <ToTopButton />
        </div>
    )
}