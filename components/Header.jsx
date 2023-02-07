
export default function Header(){
    return(
        <>
       <header>
    <nav class="bg-gray-800 border-gray-900 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
           
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
     fill="white" class="w-8 h-8">
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
</svg>


      <span class="ml-3 text-xl text-white">MyPortfolio</span>
      
    </a>
            {/* <a href="https://flowbite.com" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a> */}
            <div class="flex items-center lg:order-2">
               
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm 
                text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2"
                  aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>

            </div>
            
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="/home" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent 
                        lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/about" class="mr-5 text-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out">About Me</a>
                    </li>
                    <li>
                        <a href="/experience" class="mr-5 text-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out">Experience</a>
                    </li>
                    <li>
                        <a href="/gallery" class="mr-5 text-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out">Gallery</a>
                    </li>
                    <li>
                        <a href="/info-sample" class="mr-5 text-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out">Info</a>
                    </li>
                    <li>
                        <a href="/contact" class="mr-5 text-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out">Contact me</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</header>

       
       
       
       
       
       
        {/* <header class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed bg-gray-700 drop-shadow-2xl">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
     fill="white" class="w-8 h-8">
  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
</svg>


      <span class="ml-3 text-xl text-white">MyPortfolio</span>
      
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/home" class="mr-5 text-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out">Home</a>
      <a href="/about" class="mr-5 text-white cursor-pointer hover:scale-110 transition
       duration-300 ease-in-out">About Me</a>
      <a href="/experience" class="mr-5 text-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out">Experience</a>
      <a href="/contact" class="mr-5 text-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out">Contact Me</a>
    </nav>
  </div>
</header> */}
        </>
    )
}