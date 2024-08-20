import { Header } from '../Header';
import { Footer } from '../Footer';
import { Children } from 'react';

export function Layout ({ children }) {

    return(
        <>
        <Header />
            {children}
        <Footer />
        </>
    );
}