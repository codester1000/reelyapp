import React, { useState } from 'react'
export default function Waitlist () {
  const [isActive, setActive] = useState(false);

  function handleButtonClick() {
    setActive(!isActive);
  }


  return (
    <div className="container mb-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="grow-0 shrink-0 flex-basis w-full lg:w-6/12 ">
            <div className="flex justify-center items-center mb-3">
              <img className={isActive ? 'spinner' : ''} src="/circle.svg" height="50px" width="50px"/>
            </div>
            <h2 className="text-3xl mb-6">Get early access by joining our waitlist!</h2>
            <p>Once you're in, climb the ladder by inviting your friends or sharing on social media</p>
            <p className="mb-6">The further you climb, the sooner you'll get access and reveal your scene</p>

            <div className="md:flex flex-row">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-[#bf1922] text-white text-sm leading-snug uppercase rounded shadow-md hover:bg-[#92131a] hover:shadow-lg focus:bg-[#92131a] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#92131a] active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={handleButtonClick}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}