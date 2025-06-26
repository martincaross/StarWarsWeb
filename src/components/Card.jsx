import React from "react";
import "./components.css";

export const Card = ({ name }) => {
    return (
        <div className="card bg-dark text-white h-50">
            <img
                src="https://toysstore.es/wp-content/uploads/2020/11/495-1.jpeg"
                alt={name}
                className="card-img-top"
                style={{ objectFit: "cover", height: "180px" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title mb-3">{name}</h5>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <button className="btn btn-outline-warning btn-sm">Learn more</button>
                    <button className="btn btn-outline-danger btn-sm">♡</button>
                </div>
            </div>
        </div>
    );
};
