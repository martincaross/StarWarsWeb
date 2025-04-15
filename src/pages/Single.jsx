import React from "react";
import { useLocation } from "react-router-dom";
import { Detail } from "../components/Detail";

export const Single = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const category = pathSegments[2]; // "characters", "planets", "vehicles"

    return (
        <>
            {category === "people" && <Detail />}
            {category === "planets" && <Detail />}
            {category === "vehicles" && <Detail />}
        </>
    );
};
