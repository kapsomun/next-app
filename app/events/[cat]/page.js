import Link from 'next/link'
import React from 'react'

import {allEvents} from '../../../utils/data.json'

async function EventPage({params}) {
    const id = params.cat
    const events = allEvents.filter(e => e.city == id)
  return (

    <div>
    <h2>Events in {id}</h2>
     {events.map(e => <Link href={`events/${id}/${e.id}`}  key={e.id}>{e.title}</Link>) }
    </div>
  )
}

export default EventPage