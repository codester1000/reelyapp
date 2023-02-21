export default function Simple () {
  return (
    <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group">
      <div class="p-10 flex flex-col items-center text-center group cursor-pointer">
        <img class="w-10 h-10 rounded-full" src="/one.svg" alt="circle" />
        <p class="mt-2 text-xl text-slate-500">Sign up by simply entering your email</p>
      </div>

      <div
        class="p-10 flex flex-col items-center text-center group">
        <img class="w-10 h-10 rounded-full" src="/two.svg" alt="circle" />
        <p class="mt-2 text-xl text-slate-500">Claim your pre-release reward - go through the steps in the email get your pre-release card</p>
      </div>

      <div class="p-10 flex flex-col items-center text-center group">
        <img class="w-10 h-10 rounded-full" src="/three.svg" alt="circle" />
        <p class="mt-2 text-xl text-slate-500">When transactions enabled unlock your reserved Reel*</p>
      </div>
      
    </div>
    
  )
}