

export default function Sell1 () {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="/p1.png" alt="" className="object-contain h-[500px] rounded-3xl" />
      </div>
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Fans deserve
          <span className="text-[#bf1922]"> more </span>from the movie industry
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">Fans spend over <span className="text-[#bf1922]">$100 billion every year</span> on movies and memorabilia but in return receive a <span className="text-[#bf1922]">boring, expensive experience </span>with no ownership rights and <span className="text-[#bf1922]"> no rewards</span> for loyalty or referrals!
        </p>
      </div>
    </div>
  </section>
  )

}