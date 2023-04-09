import Head from 'next/head'
import React from 'react'
import Aboutus from '../components/aboutus'
import Aboutus2 from '../components/aboutus2'
import AdminPanel from '../components/AdminPanel'


const admin = () => {

    
  return (
    <div>
         <Head>
        <title>IMR Care-Admin</title>
        <meta name="description" content="IMR CARE Mobile Phone Repair, All Brands Phone Repair and Premium Service  at your fingertips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      <Aboutus2 />
      <AdminPanel/>
    </div>
  )
}

export default admin