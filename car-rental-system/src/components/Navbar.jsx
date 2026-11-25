import { Link, NavLink } from "react-router-dom";
import { CarFront } from "lucide-react";

export default function Navbar() {
  return (
    <header className="nav">

      <Link to="/" className="brand">
        <span className="brand-icon">
          <CarFront size={22} />
        </span>
        Drive<span>Ease</span>
      </Link>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cars">Explore Cars</NavLink>
        <NavLink to="/bookings">My Bookings</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="login-link">
          Log in
        </Link>

        <Link to="/cars" className="btn btn-small">
          Book a car
        </Link>
      </div>

    </header>
  );
}
