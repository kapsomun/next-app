import React from 'react'
import {allEvents} from '../../../../utils/data.json'

function Event({params}, props) {
    const id = params.id
   const event = allEvents.find(e => e.id == id)
  return (

    <div>
    {event.title}
    </div>
  )
}

export default Event