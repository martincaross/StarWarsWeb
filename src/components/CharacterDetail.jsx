import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetail = () => {
    const { theId } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${theId}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data.result.properties))
            .catch((error) => console.error("Error:", error));
    }, [theId]);

    if (!character) return <h2 className="text-light">Cargando...</h2>;

    return (
        <div className="container text-light mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${theId}.jpg`}
                        alt={character.name}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-8">
                    <h1>{character.name}</h1>
                    <p>{character.description || "Descripción no disponible."}</p>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Género:</h5>
                            <p>{character.gender}</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Altura:</h5>
                            <p>{character.height}</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Peso:</h5>
                            <p>{character.mass}</p>
                        </div>
                        <div className="col-md-6">
                            <h5>Color de piel:</h5>
                            <p>{character.skin_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
