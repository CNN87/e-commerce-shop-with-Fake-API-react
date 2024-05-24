// src/components/Sidebar.js
import React from "react";
// import "./sidebar.css";
import "./sidebar.css";

const Sidebar = ({ handleChange, handleSearch }) => {
  return (
    <section className="sidebar mt-10 w-56">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Suche Produkte..." 
          className="search-input" 
          onChange={handleSearch}
        />
      </div>
      <div className="filter-container">
        <h2 className="sidebar-title">Preis</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="price" />
          <span className="checkmark"></span>Alle
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="0-50" name="price" />
          <span className="checkmark"></span>0 - 50 €
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="51-100" name="price" />
          <span className="checkmark"></span>51 - 100 €
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="101-200" name="price" />
          <span className="checkmark"></span>101 - 200 €
        </label>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="201+" name="price" />
          <span className="checkmark"></span>Über 200 €
        </label>
      </div>
    </section>
  );
};

export default Sidebar;
