import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const [activeSection, setActiveSection] = useState("characters");
  const [data, setData] = useState({ characters: [], planets: [], vehicles: [] });

  useEffect(() => {
    const fetchData = async (category) => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/${category}`);
        const result = await response.json();
        setData((prevData) => ({ ...prevData, [category]: result.results }));
      } catch (error) {
        console.error(`Error al cargar ${category}:`, error);
      }
    };

    fetchData("people");
    fetchData("planets");
    fetchData("vehicles");
  }, []);

  const renderCards = (items, type) => {
    return items.map((item) => (
      <div key={item.uid} className="col-md-4 mb-4">
        <div className="card mt-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`}
            className="card-img-top"
            alt={item.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            {/* Botón Learn More para redirigir a la página de detalles */}
            <Link to={`/single/${type}/${item.uid}`} className="btn btn-warning mt-2">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Barra Lateral */}
        <nav className="col-md-2 d-none d-md-block sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-light ${activeSection === "characters" ? "active" : ""}`}
                  onClick={() => setActiveSection("characters")}
                >
                  PERSONAJES
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-light ${activeSection === "planets" ? "active" : ""}`}
                  onClick={() => setActiveSection("planets")}
                >
                  PLANETAS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link btn btn-link text-light ${activeSection === "vehicles" ? "active" : ""}`}
                  onClick={() => setActiveSection("vehicles")}
                >
                  VEHÍCULOS
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="col-md-10 ms-sm-auto px-md-4">
          <div className="row">
            {activeSection === "characters" && renderCards(data.characters, "characters")}
            {activeSection === "planets" && renderCards(data.planets, "planets")}
            {activeSection === "vehicles" && renderCards(data.vehicles, "vehicles")}
          </div>
        </main>
      </div>
    </div>
  );
};
