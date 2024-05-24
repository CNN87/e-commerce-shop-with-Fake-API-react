import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css"; // Importiere die CSS-Datei für die Animation

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [blink, setBlink] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const updateCartCount = () => {
      const carts = JSON.parse(localStorage.getItem('cart')) || [];
      const totalCount = carts.reduce((total, item) => total + item.quantity, 0);
      setCartCount(totalCount);
      // Start blink effect
      setBlink(true);
      // Stop blink effect after 1.5 seconds
      setTimeout(() => {
        setBlink(false);
      }, 1500);
    };

    // Initial load
    updateCartCount();

    // Listen for custom event
    window.addEventListener('cartUpdated', updateCartCount);

    // Clean up event listener
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  // Scroll nach oben beim laden einer anderen Location (z.b.product, aboutus, contact)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full bg-purple-900 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">E-Commerce Abschlussprojekt</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {
            navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 hover:text-white text-slate-400" key={navigation.name}> {navigation.name} </Link>
              )
            })
          }
        </nav>
        <Link to={'/cart'} className={`inline-flex items-center text-white border-0 py-2 px-4 focus:outline-none rounded text-base mt-4 md:mt-0 ${blink ? 'bg-red-500 hover:bg-red-600 text-red-100' : 'bg-indigo-500 hover:bg-indigo-700'}`}>
          Zum Warenkorb <span className="ml-1">{cartCount > 0 && `(${cartCount})`}</span>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
