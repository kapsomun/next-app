import Link from 'next/link';
import React from 'react';
import CitysItem from '../../components/CitysItem/CitysItem';
import { events_categories } from '../../utils/data.json';
import './cities.scss';
import Navbar from '../../components/Navbar/Navbar';
function EventsPage() {
    const events = events_categories;
    return (
      <>
        <Navbar/>
        <div className="container">
            <div className="cities">
                {events.map(e =>
                    <Link href={`/events/${e.id}`} key={e.id}>
                        <CitysItem {...e} />
                    </Link>
                )}
            </div>
        </div>
      </>
    );
}

export default EventsPage;
