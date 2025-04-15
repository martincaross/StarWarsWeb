import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css"; // Usa el CSS existente

export const Detail = () => {
    const { category, theId } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${category}/${theId}`)
            .then(res => res.json())
            .then(result => {
                const fullData = {
                    ...result.result.properties,
                    description: result.result.description,
                };
                setData(fullData);
            })
            .catch(err => console.error("Error:", err));
    }, [category, theId]);

    if (!data) return <h2 className="text-light">Cargando...</h2>;

    const normalizeCategory = (cat) => {
        switch (cat) {
            case "people": return "characters";
            case "vehicles": return "vehicles";
            case "planets": return "planets";
            default: return cat;
        }
    };

    const renderDetails = () => {
        switch (normalizeCategory(category)) {
            case "characters":
                return (
                    <>
                        <DetailItem title="Género" value={data.gender} />
                        <DetailItem title="Color de pelo" value={data.hair_color} />
                        <DetailItem title="Año de nacimiento" value={data.birth_year} />
                        <DetailItem title="Masa" value={data.mass} />
                        <DetailItem title="Color de piel" value={data.skin_color} />
                        <DetailItem title="Altura" value={data.height} />
                        <DetailItem title="Color de ojos" value={data.eye_color} />
                    </>
                );
            case "vehicles":
                return (
                    <>
                        <DetailItem title="Modelo" value={data.model} />
                        <DetailItem title="Fabricante" value={data.manufacturer} />
                        <DetailItem title="Pasajeros" value={data.passengers} />
                        <DetailItem title="Velocidad máxima" value={data.max_atmosphering_speed} />
                        <DetailItem title="Consumables" value={data.consumables} />
                        <DetailItem title="Crew" value={data.crew} />
                        <DetailItem title="Length" value={data.length} />
                        <DetailItem title="Cost in Credits" value={data.cost_in_credits} />
                        <DetailItem title="Manufacturer" value={data.manufacturer} />
                        <DetailItem title="Vehicle Class" value={data.vehicle_class} />
                    </>
                );
            case "planets":
                return (
                    <>
                        <DetailItem title="Clima" value={data.climate} />
                        <DetailItem title="Población" value={data.population} />
                        <DetailItem title="Gravedad" value={data.gravity} />
                        <DetailItem title="Terreno" value={data.terrain} />
                        <DetailItem title="Surface Water" value={data.surface_water} />
                        <DetailItem title="Diameter" value={data.diameter} />
                        <DetailItem title="Rotation Period" value={data.rotation_period} />
                        <DetailItem title="Orbital Period" value={data.orbital_period} />
                        <DetailItem title="Population" value={data.population} />
                    </>
                );
            default:
                return <p>No hay detalles disponibles para esta categoría.</p>;
        }
    };

    return (
        <div className="container character-detail-container">
            <div className="character-detail-content">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/star-wars-skeleton-crew-108-highlights-03_7b613e43.jpeg"
                    alt={data.name}
                    className="character-image"
                />
                <div className="character-info">
                    <h1>{data.name}</h1>
                    <p>{data.description || "Descripción no disponible."}</p>
                </div>
            </div>
            <hr />
            <div className="character-details">
                {renderDetails()}
            </div>
            <hr />
        </div>
    );
};

const DetailItem = ({ title, value }) => (
    <div className="character-detail-item">
        <h5>{title}:</h5>
        <p>{value}</p>
    </div>
);
