import React from 'react';
import { Globe2 } from 'lucide-react';

const Globalization: React.FC = () => {
  return (
    <section id="globalization" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Globe2 className="w-12 h-12 mx-auto text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Глобализация әсері
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Жаһандану дәуіріндегі мәдени өзгерістер
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-lg p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Мүмкіндіктер</h3>
                <ul className="mt-4 space-y-4 text-gray-600">
                  <li>• Мәдениеттер арасындағы диалог</li>
                  <li>• Білім мен тәжірибе алмасу</li>
                  <li>• Жаңа технологиялар арқылы мәдени мұраны сақтау</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Қауіп-қатерлер</h3>
                <ul className="mt-4 space-y-4 text-gray-600">
                  <li>• Ұлттық ерекшеліктердің жоғалуы</li>
                  <li>• Дәстүрлі құндылықтардың әлсіреуі</li>
                  <li>• Мәдени біркелкілік</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Globalization;