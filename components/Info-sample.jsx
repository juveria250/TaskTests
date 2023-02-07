export default function Info(){
    return(
        <>
        <section class="text-gray-400 bg-gradient-to-r from-red-400 via-purple-500 to-blue-700 body-font relative cursor-pointer">
        <div class="container px-5 py-24 cursor-pointer">
        <form>
        <div class="lg:w-1/2 md:w-1/2 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-white">Name</label>
                  <input type="text" id="name" name="name" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>

            </div>
            <div class="p-2 w-full">
          <div class="relative">
          <label for="email" class="leading-7 text-sm text-white">Upload Photo</label>
            <input class="block w-full bg-gray-800 bg-opacity-40 rounded border
             border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 
             text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
            id="small_size" type="file" />
          </div>
          </div>
          <div class="p-2 w-full">
          <div class="relative">
          <label for="email" class="leading-7 text-sm text-white">Choose File(Drage & Drop)</label>
          <label for="dropzone-file" class="block w-full bg-gray-800 bg-opacity-40 rounded border
             border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 
             text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
          </div>
          </div>
          
          </div>  
        <div class="p-2 w-full">
           <button class="flex mx-auto text-white shadow-lg shadow-gray-900 bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
        </div>

        
      </form>
      </div>
      </section>
        </>
    )
}