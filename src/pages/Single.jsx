import React from "react";
import { useLocation } from "react-router-dom";
import { CharacterDetail } from "../components/CharacterDetail";
import { PlanetDetail } from "../components/PlanetDetail";
import { VehicleDetail } from "../components/VehicleDetail";

export const Single = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const category = pathSegments[2]; // "characters", "planets", "vehicles"

    return (
        <>
            {category === "people" && <CharacterDetail />}
            {category === "planets" && <PlanetDetail />}
            {category === "vehicles" && <VehicleDetail />}
        </>
    );
};
