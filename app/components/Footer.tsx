import Link from "next/link";
import './styles/footer.css';

export default function Footer() {
    return (
        <footer>
            <div>
                <Link href={"/"} as={"/"}>Home</Link>
                <Link href={"/pages/about"} as={"/pages/about"}>About</Link>
                <Link href={"/pages/collection"} as={"/pages/collection"}>Collection</Link>
                <Link href={"mailto: eliastokola88@gmail.com"} as={"mailto: eliastokola88@gmail.com"}>Contact</Link>
            </div>
        </footer>
    )
}