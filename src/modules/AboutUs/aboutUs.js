import React from "react";

const AboutUsPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="../../img/shoppmal.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Sinan Sims-Eck
                </h2>
                <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Junior Fullstack Learner aus Berlin lorem ipsum katikum whatever 
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Über E-Commerce Abschluss<br/> Willkommen bei E-Commerce Abschluss, Ihrem
                Ziel für hochwertige Produkte und herausragenden Kundenservice.
                Seit unserer Gründung haben wir uns dem Ziel verschrieben,
                unseren Kunden ein unvergleichliches Einkaufserlebnis zu bieten.
                Unsere Geschichte Gegründet im Jahr [Gründungsjahr], begann
                unsere Reise mit der Vision, Menschen qualitativ hochwertige
                Produkte anzubieten, die ihren Alltag bereichern. Was als
                bescheidener Online-Shop begann, ist heute zu einem
                vertrauenswürdigen Namen in der Branche geworden. Unsere Mission
                Unsere Mission bei [Ihr Firmenname] ist es, Ihren Einkauf so
                einfach und angenehm wie möglich zu gestalten. Wir glauben an
                Qualität, Zuverlässigkeit und exzellenten Kundenservice. Jedes
                Produkt in unserem Sortiment wird sorgfältig ausgewählt, um
                sicherzustellen, dass es unseren strengen Standards entspricht.
                Unser Team Hinter [Ihr Firmenname] steht ein engagiertes Team
                von Fachleuten, das sich leidenschaftlich für die Zufriedenheit
                unserer Kunden einsetzt. Von der Produktbeschaffung bis hin zum
                Kundensupport arbeiten wir Hand in Hand, um sicherzustellen,
                dass Ihre Bedürfnisse stets erfüllt werden. Unsere Werte Bei
                allem, was wir tun, lassen wir uns von unseren Werten leiten:
                Integrität, Qualität, Kundenzufriedenheit und Innovation. Diese
                Werte bilden das Fundament unseres Unternehmens und spiegeln
                sich in jedem Aspekt unserer Arbeit wider. Vielen Dank, dass Sie
                sich für [Ihr Firmenname] entschieden haben. Wir freuen uns
                darauf, Sie auf Ihrer Einkaufsreise zu begleiten und Ihnen die
                bestmögliche Erfahrung zu bieten.
              </p>
              <a className="text-purple-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsPage;
