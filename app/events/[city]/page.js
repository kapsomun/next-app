
import Link from 'next/link';
import React from 'react'
import {allEvents} from "../../../utils/data.json"



function EventsInCityPage({params}) {
    const data = allEvents;
    const id = params.city;
    const events = data.filter(e => e.city == id)
    
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

export default EventsInCityPage