export default function Simple () {
  return (
    <>
    <h1 className="text-[3rem] text-center mt-16 tracking-tighter font-bold text-[#bf1922]">How does it work?</h1>

    <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group -mt-5 mb-6">
      <div class="p-10 flex flex-col items-center text-center group cursor-pointer">
        <img class="w-10 h-10 rounded-full" src="/one.svg" alt="circle" />
        <p class="mt-2 text-xl text-slate-500">Join our waitlist</p>
      </div>

      <div
        class="p-10 flex flex-col items-center text-center group">
        <img class="w-10 h-10 rounded-full" src="/two.svg" alt="circle" />
        <p class="mt-2 text-xl text-slate-500">Check your email! <br/>Claim your pre-release reward and reserve your spot for future releases</p>
      </div>

      <div class="p-10 flex flex-col items-center text-center group">
        <img class="w-10 h-10 rounded-full" src="/three.svg" alt="circle" />
        <p class="mt-2 text-xl text-slate-500">Unlock your reserved Reel when releases drop</p>
      </div>
      
    </div>
    </>
    
  )
}