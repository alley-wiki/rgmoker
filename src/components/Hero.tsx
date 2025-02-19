import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="intro" className="pt-20 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Тарихи-мәдени</span>
            <span className="block text-indigo-600">аймақтар әлемі</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Тарихи-мәдени аймақтар - бұл адамзаттың ғасырлар бойы қалыптасқан мәдени мұрасының куәгері. 
            Олар біздің өткенімізді, бүгінімізді және болашағымызды байланыстырады.
          </p>
        </div>
        <div className="mt-10">
          <img
            className="rounded-lg shadow-xl mx-auto"
            src="https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6"
            alt="Қазақстанның тарихи ескерткіші"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;