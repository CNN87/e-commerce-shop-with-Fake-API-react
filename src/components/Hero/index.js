import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Jetzt Zugreifen
            <br className="hidden lg:inline-block" />
             30 % Rabatt-Aktion 
          </h1>
          <p className="mb-8 leading-relaxed">
          Willkommen bei Online-Shop-Simse
          <br/><br/>
          Schön, dass Sie da sind! Entdecken Sie unsere handverlesene Auswahl an hochwertigen Produkten, die Ihren Alltag bereichern.
    
          Warum Online-Shop-Simse?

          Top-Qualität: Nur das Beste für Sie.
          Kundenzufriedenheit: Wir sind für Sie da.
          Schneller Versand: Ihre Bestellung, rasch bei Ihnen.
          Einfaches Einkaufen: Benutzerfreundlich und sicher.
          Viel Spaß beim Stöbern!
          </p>
          <div className="flex justify-center">
            <Link to={'/products'} className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Zu den Produkten
            </Link>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Zum Kontakt
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/img/heromall.jpg"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
