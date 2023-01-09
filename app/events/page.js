
import Link from 'next/link';
import React from 'react'
import {events_categories} from "../../utils/data.json"



function EventsPage() {
    const events = events_categories;
  return (
    <div className='events'>
       { events.map((e) => <Link href={e.id} key={e.id}>
        <div className="events__item">
            <img className='events__item_img' src={e.image} alt={e.id} />
            <h2>{e.title}</h2>
            <p>{e.description}</p>
        </div>
       </Link>)}
    </div>
  )
}

export default EventsPage