import React from 'react';
import { Palette } from 'lucide-react';

const CulturalHeritage: React.FC = () => {
  return (
    <section id="heritage" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Palette className="w-12 h-12 mx-auto text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Мәдени жетістіктер мен мұра
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Ұрпақтан ұрпаққа жалғасқан мәдени құндылықтар
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900">Материалдық мұра</h3>
              <p className="mt-4 text-gray-600">
                Сәулет өнері, қолөнер бұйымдары, тарихи ескерткіштер және басқа да
                материалдық мәдениет үлгілері біздің тарихымыздың куәгері болып табылады.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900">Рухани мұра</h3>
              <p className="mt-4 text-gray-600">
                Халық ауыз әдебиеті, салт-дәстүрлер, әдет-ғұрыптар және өнер түрлері
                ұлттық бірегейлігімізді сақтауға көмектеседі.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHeritage;