import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      {/* Navbar principal */}
      <nav className="navbar py-3">
        <div className="container d-flex justify-content-center">
        <Link to="/" className="navbar-title text-decoration-none ">
          STAR WARS
        </Link>
        </div>
      </nav>

      {/* Segunda barra con los links adicionales */}
      <div className="navbar-bottom">
        <div className="container d-flex justify-content-center gap-3 flex-wrap">
          {[
            "NEWS + FEATURES",
            "VIDEO",
            "FILMS",
            "SERIES",
            "GAMES + INTERACTIVE",
            "DATABANK",
            "DISNEY+"
          ].map((item, index) => (
            <a key={index} href="#" className="navbar-link">
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
