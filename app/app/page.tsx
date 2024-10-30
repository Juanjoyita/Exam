import React from 'react';

export default function Home() {
 return (
   <section className="bg-gradient-to-r from-cyan-500 to-blue-700 min-h-screen flex justify-center items-center px-4">
     <article className="bg-black bg-opacity-100 p-8 rounded-lg text-white flex flex-col md:flex-row items-center w-full max-w-2xl">
       <figure className="w-full md:w-auto md:mr-6 mb-4 md:mb-0">
         <img
           src="/imagen.jpg"
           alt="Jess Wilson"
           className="w-full h-auto max-h-80 md:h-38 md:w-34 rounded-full md:rounded-lg shadow-md transition-transform transform hover:scale-100 -mt-16 md:-ml-16"
         />
       </figure>
       <section className="mt-4 md:mt-0 md:ml-6 text-left md:text-left">
         <h2 className="text-xl font-bold">Jess Wilson</h2>
         <p className="text-gray-400">UX Engineer</p>
         <p className="mt-3 text-gray-500">
           Empowering users through captivating interfaces, turning ideas into
           pixel-perfect realities.
         </p>
         <footer className="flex mt-4 space-x-4 justify-start md:justify-start">
           <button className="px-4 py-2 border border-white rounded-lg">
             Profile
           </button>
           <button className="px-4 py-2 bg-white text-gray-900 rounded-lg">
             Follow
           </button>
         </footer>
       </section>
     </article>
   </section>
 );
}