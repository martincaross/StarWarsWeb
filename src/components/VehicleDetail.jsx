import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const VehicleDetail = () => {
    const { theId } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/vehicles/${theId}`)
            .then((response) => response.json())
            .then((data) => setVehicle(data.result.properties))
            .catch((error) => console.error("Error:", error));
    }, [theId]);

    if (!vehicle) return <h2 className="text-light">Cargando...</h2>;

    return (
        <div className="container text-light mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${theId}.jpg`}
                        alt={vehicle.name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-8">
                    <h1>{vehicle.name}</h1>
                    <p>{vehicle.description || "Descripción no disponible."}</p>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Modelo:</h5>
                            <p>{vehicle.model}</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Fabricante:</h5>
                            <p>{vehicle.manufacturer}</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Velocidad máxima:</h5>
                            <p>{vehicle.max_atmosphering_speed}</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Capacidad de carga:</h5>
                            <p>{vehicle.cargo_capacity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
