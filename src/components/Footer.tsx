import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Қорытынды</h3>
            <p className="mt-4 text-gray-300">
              Тарихи-мәдени мұраны сақтау - әрбір адамның міндеті. Біздің мәдени
              құндылықтарымыз келешек ұрпаққа аманат ретінде қалуы керек.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;