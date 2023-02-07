export default function Home(){
    return(
        <>
      <section class="text-gray-600 body-font bg-gradient-to-r from-blue-700 via-purple-500 to-red-400">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center cursor-pointer">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          HII, I'm JUVERIA, A FRONTEND DEVELOPER
      </h1>
      <p class="mb-8 text-white">This Is My Portfolio Website</p>
      <div class="flex justify-center">
        <a href="/contact" class="inline-flex text-white shadow-lg shadow-gray-800 bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</a>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://media.istockphoto.com/id/515749452/photo/portfolio.jpg?s=612x612&w=0&k=20&c=clEx211k1R0tVdbMTlWy140856BwThWl65LhiV4O3jQ="/>
    </div>
  </div>
</section>
      </>
    )
}