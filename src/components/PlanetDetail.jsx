import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PlanetDetail.css";  // Asegúrate de importar el CSS

export const PlanetDetail = () => {
    const { theId } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${theId}`)
            .then((response) => response.json())
            .then((data) => setPlanet(data.result.properties))
            .catch((error) => console.error("Error:", error));
    }, [theId]);

    if (!planet) return <h2 className="text-light">Cargando...</h2>;

    return (
        <div className="container planet-detail-container">
            <div className="planet-detail-content">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/star-wars-skeleton-crew-108-highlights-03_7b613e43.jpeg?region=252%2C0%2C1416%2C796"
                    alt={planet.name}
                    className="planet-image"
                />
                <div className="planet-info">
                    <h1>{planet.name}</h1>
                    <p>{planet.description || "Descripción no disponible."}</p>
                </div>
            </div>
            <hr />
            <div className="planet-details">
                <div className="planet-detail-item">
                    <h5>Clima:</h5>
                    <p>{planet.climate}</p>
                </div>
                <div className="planet-detail-item">
                    <h5>Diámetro:</h5>
                    <p>{planet.diameter}</p>
                </div>
                <div className="planet-detail-item">
                    <h5>Población:</h5>
                    <p>{planet.population}</p>
                </div>
                <div className="planet-detail-item">
                    <h5>Gravedad:</h5>
                    <p>{planet.gravity}</p>
                </div>
            </div>
        </div>
    );
};
