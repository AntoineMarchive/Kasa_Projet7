import { Header } from '../Header';
import { Footer } from '../Footer';
import { Children } from 'react';

export function Layout () {

    return(
        <>
        <Header />
            {Children}
        <Footer />
        </>
    )
}