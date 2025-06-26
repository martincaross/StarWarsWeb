import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import { Card } from "../components/Card";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => setCharacters(data.results))
      .catch(err => console.error("Error fetching people:", err));

    fetch("https://www.swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => setPlanets(data.results))
      .catch(err => console.error("Error fetching planets:", err));

    fetch("https://www.swapi.tech/api/vehicles")
      .then(res => res.json())
      .then(data => setVehicles(data.results))
      .catch(err => console.error("Error fetching vehicles:", err));
  }, []);

  // Mezcla los datos según la categoría activa
  const getFilteredData = () => {
    switch (activeCategory) {
      case "characters":
        return characters.map(item => ({ ...item, category: "people" }));
      case "planets":
        return planets.map(item => ({ ...item, category: "planets" }));
      case "vehicles":
        return vehicles.map(item => ({ ...item, category: "vehicles" }));
      default:
        return [
          ...characters.map(item => ({ ...item, category: "people" })),
          ...planets.map(item => ({ ...item, category: "planets" })),
          ...vehicles.map(item => ({ ...item, category: "vehicles" })),
        ];
    }
  };

  return (
    <>
      <div className="home-top">
        <button className="button-cat" onClick={() => setActiveCategory("all")}>All</button>
        <button className="button-cat" onClick={() => setActiveCategory("characters")}>Characters</button>
        <button className="button-cat" onClick={() => setActiveCategory("planets")}>Planets</button>
        <button className="button-cat" onClick={() => setActiveCategory("vehicles")}>Vehicles</button>
        <button className="button-fav">Favorites</button>
      </div>

      <div className="outer-container mt-5 mb-5">
        <div className="container">
          <div className="row g-4 justify-content-start">
            {getFilteredData().map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 mb-5">
                <Card name={item.name} uid={item.uid} category={item.category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
