export default function Earn () {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="/money.jpeg" alt="" className="object-contain h-[350px] rounded-3xl" />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#bf1922]">Earn
          </h1>
          <p className="mt-6 text-lg ">Get rewarded for the value you create. Earn rewards each time someone you refer buys or rents a movie, because your movie experience should reward loyalty and referrals (like everything else in your life…)
          </p>
        </div>
      </div>
    </section>
  )

}