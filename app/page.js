import Link from 'next/link';
import React from 'react';
import { Navbar, Footer } from '../components'

import Head from './head';

export default function Home() {
    return (
        <>
        <Head title='main page'description=" main page is here"/>
            <Navbar/>
            <main>
              <div className="container">
                <h1>HOLOVNA STORINKA</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure minus et repellat dolorem, architecto ipsa alias vitae at qui dolore incidunt expedita voluptate laboriosam nostrum vero aspernatur enim consequatur?</p>
                <Link href='/events'>Останні події у Світі</Link>
              </div>
            </main>
            <Footer/>
        </>
    );
}
