import Navbar from '../components/Navbar'
import Land from '@/components/Land'
import Value from '@/components/Value'
import Head from 'next/head'
import Section from '@/components/Section'
import Cool from '@/components/Cool'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist'
import Sell1 from '@/components/Sell1'
import Own from '@/components/Own'
import Engage from '@/components/Engage'
import Watch from '@/components/Watch'
import Earn from '@/components/Earn'

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
          <Section />
          <Sell1 />
          <Own />
          <Engage />
          <Watch />
          <Earn />
          <Waitlist />
          <Footer />
        </div>
    </>

  )
}