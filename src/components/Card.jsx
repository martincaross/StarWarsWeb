import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"; 
export const Card = ({ name , uid, category}) => {
    const { store, dispatch } = useGlobalReducer();

    const isFavorite = store.favorites.some(
        fav => fav.uid === uid && fav.category === category
    );

    const handleLike = () => {
        dispatch({
            type: 'toggle_favorite',
            payload: { uid, name, category }
        });
    };

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
                    <Link
                        to={`/detail/${category}/${uid}`}
                        className="btn btn-outline-warning btn-sm"
                    >
                        Learn more
                    </Link>
                    <button
                        className={`btn btn-sm ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
                        onClick={handleLike}
                    >
                        {isFavorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>
        </div>
    );
};
