import React, {ReactNode} from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import Header from './Header';

type props = {
    children: ReactNode
}

function Layout({children}: props) {
    return (
        <>
            <Head>
                <title>Chamika Adikari</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            <div className='bg-gray-50'>
                <Header />
                <main className="container mx-auto px-8">{children}</main>
            </div> 
        </>
    )
}

export default Layout;
