import Nav from "./components/Nav";
import Link from "next/link";
const locations = ()=>{
    return(
      <div>
      <div className="sticky top-0 z-50">
      <Nav />
      </div>
      <nav className="py-3 px-3">
  <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
    <li>
      <Link href="/">
      <a class="block transition-colors hover:text-gray-700"> Home </a>
      </Link>
    </li>

    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </li>

    <li>
      <Link href="/locations">
      <a class="block transition-colors hover:text-gray-700"> Locations </a>
      </Link>

    </li>

    <li>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </li>

  </ol>
</nav>

<h1 className="text-center py-5 text-5xl">India</h1>

{/* work space india */}
<div class=" flex flex-col gap-4 items-center justify-center bg-white">
  <a href="#" class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
    <div class="grid grid-cols-5 p-5">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> 7+ Work Space </p>
        <p class="text-gray-600 font-bold"> Kolkata </p>
      </div>
    </div>
  </a>


  <a href="#" class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
    <div class="grid grid-cols-5 p-5">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> 18+ Work Space </p>
        <p class="text-gray-600 font-bold"> Hyderabad </p>
      </div>
    </div>
  </a>

  <a href="#" class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
    <div class="grid grid-cols-5 p-5">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-sky-500 font-bold text-xs"> 23+ Work Space </p>
        <p class="text-gray-600 font-bold"> Bengaluru </p>
      </div>
    </div>
  </a>
</div>
{/* work space india */}


{/* Work Space UK */}

<h1 className="text-center py-5 my-16 text-5xl">United Kingdom</h1>

<div class=" flex flex-col gap-4 items-center justify-center bg-white">
  <a href="#" class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
    <div class="grid grid-cols-5 p-5">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-gray-600 font-bold py-4"> Coming Soon </p>
      </div>
    </div>
  </a>


</div>

{/* Work Space Uk */}


{/* Work Space USA */}

<h1 className="text-center py-5 my-16 text-5xl">USA</h1>

<div class=" flex flex-col gap-4 items-center justify-center bg-white">
<a href="#" class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
    <div class="grid grid-cols-5 p-5">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-gray-600 font-bold py-4"> Coming Soon </p>
      </div>
    </div>
  </a>
</div>

{/* Work Space USA */}

{/* Work Space Germany */}

<h1 className="text-center py-5 my-16 text-5xl">Germany</h1>

<div class=" flex flex-col gap-4 items-center justify-center bg-white">
<a href="#" class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
    <div class="grid grid-cols-5 p-5">
      <div>
        <img src="https://picsum.photos/seed/2/200/200" class="max-w-16 max-h-16 rounded-full" />
      </div>
      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-gray-600 font-bold py-4"> Coming Soon </p>
      </div>
    </div>
  </a>
</div>
<div className="py-5"></div>
{/* Work Space Germany */}

        </div>
    )
}

export default locations;