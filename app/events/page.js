import React from 'react';
import { Navbar, Footer } from '../../components';
import Head from '../head';
import {events_categories} from '../../utils/data.json'
import Link from 'next/link';

export default function Events() {
    return (
        <>
            <Head title='about page'description=" main page is here"/>
            <Navbar />
            <div className="main">
                <div className="container">
                    <div className="events">
                    {events_categories.map(e => <Link href={`/events/${e.id}`} key={e.id}> {e.title} </Link>)}   
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
