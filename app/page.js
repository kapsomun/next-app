import Link from 'next/link'
import React from 'react'
import {Navbar} from '../components/'
import About from '../sections/About/About'
import Head from './head'

function Home() {
  return (
    <>
    <Head title='Головна' description="Ми на головній" />
    <Navbar/>
    <About/>
    </>
  )
}

export default Home