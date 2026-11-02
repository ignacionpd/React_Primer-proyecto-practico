import { Footer } from "./Footer";
import { Header } from "./Header";
import './Layout.css'

export function Layout({children}) {
    
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}