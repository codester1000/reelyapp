export default function Own () {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 mb-24">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#bf1922] mb-6">Own. Collect. Share.
          </h1>
          <p className="my-2 text-lg"><span className="text-[#bf1922] font-semibold	">Own</span> a copy of your favourite scenes from your favourite movies.
          </p>
          <p className="my-2 text-lg"><span className="text-[#bf1922] font-semibold	">Collect</span> multiple scenes from your favourite movie or your favourite scenes from multiple movies.
          </p>
          <p className="my-2 text-lg"><span className="text-[#bf1922] font-semibold	">Share</span> your copy of your scenes with friends and the world
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 pr-24">
          <img src="/nft.png" alt="" className="object-contain h-[400px] rounded-3xl" />
        </div>
      </div>
    </section>

  )

}