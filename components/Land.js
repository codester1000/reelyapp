import Navbar from './Navbar'
import Head from 'next/head'
import Screen from './Value'


const Land = () => {
  return (
    <>
      <Navbar />
      {/* <div className="absolute top-0 left-0 w-full h-screen z-0 bg-black">
        <div style={{opacity: 1, paddingBottom: '54.219%'}} className="z-0 absolute w-full h-full">
          <iframe height="100%" width="auto"src="https://streamable.com/e/d7w18q?autoplay=1&nocontrols=1" allow="autoplay" className="z-0 h-90% w-screen left-0 top-0 absolute"></iframe>
        </div> 
      </div> */}
      <div className="absolute top-0 left-0 w-full h-full z-1 flex items-center justify-center mx-16">
        <div className="container mx-auto px-16 right-0">
          <h1 className="text-7xl mb-8 text-[#bf1922] font-semibold tracking-widest">REELY</h1>
          <h2 className="text-3xl  text-[#bf1922]">Empower Your Movie Journey</h2>
          <div className='pt-8'>
            <button class=" hover:text-[#bf1922] hover:border-[#bf1922] text-[#92131a] border border-[#92131a] py-2 px-4 rounded-full">
              Join the Waitlist
            </button>
            <button class=" hover:text-[#bf1922] hover:border-[#bf1922] text-[#92131a] border border-[#92131a] mx-4 py-2 px-4 rounded-full">
              Watch the Demo
            </button>
          </div>
        </div>
        <div className="w-1/3 relative h-[600px] right-1/4 flex flex-col items-center justify-center">
          <iframe src="https://streamable.com/e/kq5fyv?autoplay=1&nocontrols=1" width="100%" height="100%" frameborder="0" allowfullscreen allow="autoplay"></iframe>        
        </div>
      </div>

    </>
  )
}

export default Land
