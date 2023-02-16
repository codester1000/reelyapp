import Image from 'next/image';

export default function Navbar () {
  return (
      <>
        <nav className="flex justify-between items-center h-16 text-black relative font-mono navbar" style={{zIndex: 1}} role="navigation">
          <a href="/" className="pl-8 pt-2">        
            <Image src="/reely.svg" alt="Logo" width={200} height={50} />
          </a>
          <div className="pr-8 px-8 md:block hidden text-white ">
            <a href="/" className="p-3 px-8 text-[#92131a] hover:text-[#2a2a2a]">ABOUT</a>
            <a href="/" className="p-3 px-8 text-[#92131a] hover:text-[#2a2a2a]">WAITLIST</a>
            <a href="/" className="border px-3 py-1 rounded-full border-[#92131a] hover:border-[#2a2a2a] hover:text-[#2a2a2a] text-[#92131a] cursor-pointer transition-colors duration-150 uppercase ">SIGN IN TO REELY</a>
          </div>
        </nav>
      </>
  )
}