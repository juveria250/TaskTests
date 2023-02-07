export default function Gallery(){
    return(
        <>
        <section class="text-gray-600 bg-gradient-to-r from-red-400 via-purple-500 to-blue-700 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-18">
      <h1 class="text-2xl font-medium title-font mb-8 text-gray-900">GALLERY SAMPLE</h1>
    </div>

    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
        <iframe rounded="lg" width="280" height="225" src="https://www.youtube.com/embed/HAASl4PdgRI">
        </iframe> 
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
        <iframe rounded="lg" width="280" height="225" src="https://www.youtube.com/embed/hSlLWVbLr-M">
        </iframe> 
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}