export default function Watch () {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl"><span className="text-[#bf1922]">Watch.</span> Anywhere. Anytime.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">With Reely, your copy of the movie goes with you. Watch anywhere, anytime you have an internet connection. No need to have a subscription just to watch the movie you have already bought!
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="/watch.png" alt="" className="object-contain h-[300px] rounded-3xl" />
        </div>
      </div>
    </section>

  )

}