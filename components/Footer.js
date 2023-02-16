
export default function Footer () {
  return (
    <> 
      <div className="bg-[#92131a] h-[150px] grid grid-cols-2 px-24 ">
        <div className="relative">
          <div className="absolute bottom-3 left-0">
            <img className="h-32" src="/reely-white.svg" />
          </div>
        </div>
        <div className="relative">
          <ul className="absolute bottom-6 right-20 text-sm text-white">
            <li href="/" className="">About</li>
            <li href="/" className="">Contact</li>
            <li href="/" className="">Terms and Conditions</li>
            <li href="/" className="">Privacy Policy</li>
            <li href="/" className="">FAQ</li>
          </ul>
        </div>
      </div>
    </>
  )
}