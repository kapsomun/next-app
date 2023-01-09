import Link from 'next/link'
import React from 'react'
import {Navbar} from '../components/'
import Head from './head'

function Home() {
  return (
    <>
    <Head title='Головна' description="Ми на головній" />
    <Navbar/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores provident atque! Accusantium totam perferendis, provident animi deleniti rerum temporibus.</p>
    <Link href='/events'>Events</Link>
    </>
  )
}

export default Home