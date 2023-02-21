import Navbar from '../components/Navbar'
import Land from '@/components/Land'
import Value from '@/components/Value'
import Head from 'next/head'
import Section from '@/components/Section'
import Cool from '@/components/Cool'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist'
import Sell1 from '@/components/OCS/Sell1'
import Own from '@/components/OCS/Own'
import Engage from '@/components/OCS/Engage'
import Watch from '@/components/OCS/Watch'
import Earn from '@/components/OCS/Earn'
import Simple from '@/components/Simple'

export default function Home() {
  return (
    <>
        <div class="static">
          <div class="rw-r-container h-screen bg-white">
            <Land />
          </div>
          <div class="rw-r-container bg-white ">
            <Value />
          </div>
          {/* <Section /> */}
          {/* <Sell1 /> */}
          <Own />
          {/* <Engage />
          <Watch />
          <Earn /> */}
          <Waitlist />
          <Simple />
          <div className='mb-16 ml-24'>
          <p className='text-slate-400 text-sm'>* Pricing to be determined but our aim is to make it broadly comparable to other movie purchase options on the internet
            <br />** Please be aware we may be ultimately unsuccessful getting the rights in which case we may not be able to deliver a Reel for the chosen movie
            </p>
          </div>
          

          <Footer />
        </div>
    </>

  )
}