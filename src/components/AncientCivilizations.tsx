import React from 'react';
import { BookOpen } from 'lucide-react';

const AncientCivilizations: React.FC = () => {
  const civilizations = [
    {
      title: 'Ежелгі Египет',
      description: 'Пирамидалар мен иероглифтер өркениеті',
      image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368'
    },
    {
      title: 'Месопотамия',
      description: 'Алғашқы жазу жүйесі мен қалалар',
      image: 'https://images.unsplash.com/photo-1567607673554-2048def2c6b5'
    },
    {
      title: 'Ежелгі Грекия',
      description: 'Философия мен демократияның бесігі',
      image: 'https://images.unsplash.com/photo-1555993539-1732b0258235'
    }
  ];

  return (
    <section id="ancient" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BookOpen className="w-12 h-12 mx-auto text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ежелгі өркениеттер
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Әлемдік мәдениеттің қалыптасуына үлкен үлес қосқан ежелгі өркениеттер
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {civilizations.map((civ, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={civ.image}
                alt={civ.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{civ.title}</h3>
                <p className="mt-2 text-gray-600">{civ.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AncientCivilizations;