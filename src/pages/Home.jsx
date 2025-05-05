import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pages.css";
import {Card} from "../components/Card";

export const Home = () => {
  const personajes = [
    { name: "Luke"},
    { name: "Leia"},
    { name: "Han Solo"}
  ];

  const vehiculos = [
    { name: "moto"},
    { name: "coche"},
    { name: "avion"}
  ];

  const planetas = [
    { name: "tierra"},
    { name: "luna"},
    { name: "marte"}
  ];

    return (
      <>
      <div className="home-top">
          <button className="button-cat">All</button>
          <button className="button-fav">Favorites</button>
      </div>
     
      <div className="home-container">
        {personajes.map((personaje, index) => (
        <Card 
          key={index}
          name={personaje.name}
        />
      ))}

        {vehiculos.map((personaje, index) => (
        <Card 
          key={index}
          name={personaje.name}
        />
      ))}

        {planetas.map((personaje, index) => (
        <Card 
          key={index}
          name={personaje.name}
        />
      ))} 
      </div>
      </>
    )

};

// export const Home = () => {
//   const [characters, setCharacters] = useState([]);
//   const [vehicles, setVehicles] = useState([]);
//   const [planets, setPlanets] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [visibleCount, setVisibleCount] = useState(8);
//   const [favorites, setFavorites] = useState(() => {
//     const saved = localStorage.getItem("favorites");
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [showFavorites, setShowFavorites] = useState(false);

//   useEffect(() => {
//     const fetchData = async (endpoint, setter) => {
//       try {
//         const response = await fetch(`https://www.swapi.tech/api/${endpoint}`);
//         const result = await response.json();
//         setter(result.results);
//       } catch (error) {
//         console.error(`Error al cargar ${endpoint}:`, error);
//       }
//     };

//     fetchData("people", setCharacters);
//     fetchData("vehicles", setVehicles);
//     fetchData("planets", setPlanets);
//   }, []);

//   const getDataToRender = () => {
//     if (selectedCategory === "All") {
//       return [
//         ...(characters?.map(item => ({ ...item, category: "characters" })) || []),
//         ...(vehicles?.map(item => ({ ...item, category: "vehicles" })) || []),
//         ...(planets?.map(item => ({ ...item, category: "planets" })) || []),
//       ];
//     } else {
//       const categoryMap = {
//         Characters: characters,
//         Vehicles: vehicles,
//         Planets: planets,
//       };
//       return categoryMap[selectedCategory]?.map(item => ({
//         ...item,
//         category: selectedCategory.toLowerCase()
//       })) || [];
//     }
//   };

//   const toggleFavorite = (uid, category) => {
//     const key = `${uid}-${category}`;
//     const newFavorites = favorites.includes(key)
//       ? favorites.filter(f => f !== key)
//       : [...favorites, key];

//     setFavorites(newFavorites);
//     localStorage.setItem("favorites", JSON.stringify(newFavorites));
//   };

//   const allData = [
//     ...(characters?.map(item => ({ ...item, category: "characters" })) || []),
//     ...(vehicles?.map(item => ({ ...item, category: "vehicles" })) || []),
//     ...(planets?.map(item => ({ ...item, category: "planets" })) || []),
//   ];

//   const fullData = getDataToRender();
//   const visibleData = fullData.slice(0, visibleCount);

//   const favoriteItems = favorites
//     .map(fav => {
//       const [uid, category] = fav.split("-");
//       const item = allData.find(data => data.uid === uid && data.category === category);
//       return item ? { ...item, category } : null;
//     })
//     .filter(item => item !== null);

//   const getApiCategory = (category) => {
//     switch (category) {
//       case "characters": return "people";
//       case "vehicles": return "vehicles";
//       case "planets": return "planets";
//       default: return category;
//     }
//   };

//   const renderCard = (item) => {
//     const key = `${item.uid}-${item.category}`;
//     const isFavorite = favorites.includes(key);

//     return (
//       <div key={key} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4 d-flex justify-content-center">
//         <Link
//           to={`/single/${getApiCategory(item.category)}/${item.uid}`}
//           className="card fixed-card text-decoration-none"
//         >
//           <div className="image-wrapper">
//             <img
//               src="https://lumiere-a.akamaihd.net/v1/images/star-wars-skeleton-crew-108-highlights-03_7b613e43.jpeg"
//               className="fixed-img"
//               alt={item.name}
//             />
//           </div>
//           <div className="card-body p-2 text-center">
//             <div className="card-title-container d-flex justify-content-between align-items-center">
//               <h6 className="card-title">{item.name}</h6>
//               <span
//                 className="favorite-icon"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   toggleFavorite(item.uid, item.category);
//                 }}
//                 style={{ color: isFavorite ? "red" : "white" }}
//               >
//                 {isFavorite ? "❤️" : "🤍"}
//               </span>
//             </div>
//           </div>
//         </Link>
//       </div>
//     );
//   };

//   return (
//     <div className="layout">
//       <div className="main-content px-3">
//         {/* Top bar */}
//         <div className="d-flex justify-content-between align-items-center mb-3 px-3">
//           <div style={{ width: "33%" }}></div>
//           <div className="dropdown text-center" style={{ width: "33%" }}>
//             <button
//               className="btn btn-warning"
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               {selectedCategory}
//             </button>
//             <ul className="dropdown-menu">
//               {["All", "Characters", "Vehicles", "Planets"].map(cat => (
//                 <li key={cat}>
//                   <button
//                     className="dropdown-item"
//                     onClick={() => {
//                       setSelectedCategory(cat);
//                       setVisibleCount(10);
//                       setShowFavorites(false);
//                     }}
//                   >
//                     {cat}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="text-end" style={{ width: "33%" }}>
//             <button className="btn btn-warning" onClick={() => setShowFavorites(!showFavorites)}>
//               Favorites
//             </button>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="row justify-content-start">
//           {showFavorites
//             ? favoriteItems.map(renderCard)
//             : visibleData.map(renderCard)}
//         </div>

//         {/* Show More */}
//         {!showFavorites && visibleData.length < fullData.length && (
//           <div className="d-flex justify-content-center mt-3">
//             <button
//               className="btn btn-outline-warning"
//               onClick={() => setVisibleCount(visibleCount + 10)}
//             >
//               Show More
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
