import Nav from "./components/Nav";
import Image from "next/image";
import Link from "next/link";
const Home = ()=>{
   return(
    <div>
      <div className="sticky top-0 z-50">
      <Nav />
      </div>


<aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
  <div className="relative z-10 max-w-screen-xl px-4 pb-64 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
      <h2 className="text-4xl font-bold sm:text-5xl">
        Co Working Simplified
        <span className="hidden sm:block text-4xl">
         Download Our App
        </span>
      </h2>

      <a className="inline-flex text-white items-center px-6 py-3 font-medium bg-rose-500 rounded-lg hover:opacity-75" href="">


      <svg fill="white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z"/></svg>
       &nbsp;  Download now
      </a>
    </div>
  </div>

  <div className="absolute inset-0 w-full sm:my-1 my-48 sm:pt-1 pt-12 h-full mix-blend-multiply">
    <Image width={580} height={400} src="/Remote2.png"  />
  </div>
</aside>

<div className="justify-center text-center">
<Image  width={400} height={400} src="/coding.gif"  />
</div>

<h1 className="text-center text-5xl py-10 font-medium">Who Is It For</h1>


<h1 className="text-center text-5xl py-10 font-medium">Find A Work Space</h1>




<footer class="text-center">
  <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="flex justify-center space-x-6">
        <a
          class="text-blue-500 hover:text-opacity-75"
          href="https://twitter.com/sahilnetic"
          target="_blank"
          rel="noopener noreferrer"
        >
        <svg fill="#00acee" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>

        <a
          class="text-blue-500 hover:text-opacity-75"
          href="https://instagram.com/unipod.space"
          target="_blank"
          rel="noopener noreferrer"
        >
       <svg fill="#B3246A" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
       </a>


      </div>

      <nav
        class="relative flex flex-wrap justify-center gap-8 p-8 text-sm font-bold  rounded-xl"
      >
        <Link href="/about">
        <a
          class="hover:opacity-75"
        >
          About
        </a>
        </Link>


        <Link href="/refundpolicy">
        <a
          class="hover:opacity-75"
        >
          Refund Policy
        </a>
        </Link>

        <Link href="/locations">
        <a
          class="hover:opacity-75"
        >
          Locations
        </a>
        </Link>

        <Link href="/contact">
        <a
          class="hover:opacity-75"
        >
          Contact Us
        </a>
        </Link>
      </nav>

      <p class="max-w-lg mx-auto text-xs text-gray-500">
  
        <a
          class="block font-black mt-1 text-indigo-600 underline decoration-wavy decoration-indigo-600 hover:opacity-75"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
         &copy; Unipod 2022
        </a>
      </p>
    </div>
  </div>
</footer>



    </div>
   )
}

export default Home;