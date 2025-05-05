// Card.jsx
import React from "react";
import "./components.css"; // si quieres darle estilos luego

export const Card = ({ name }) => {
    return (
        <div className="card">
            <img src="https://toysstore.es/wp-content/uploads/2020/11/495-1.jpeg" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name} 🤍</h5>
            </div>
        </div>
    );
};