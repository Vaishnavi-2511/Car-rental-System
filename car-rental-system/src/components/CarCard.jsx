import { Link } from "react-router-dom";
import { Users, Fuel, Settings2, ArrowUpRight } from "lucide-react";

export default function CarCard({ car }) {

  return (
    <article className="car-card">

      <div className="car-photo">

        <img src={car.image} alt={car.name} />

        <span className="tag">
          {car.tag}
        </span>

      </div>

      <div className="car-content">

        <div>
          <p className="muted small">
            {car.type}
          </p>

          <h3>{car.name}</h3>
        </div>

        <div className="car-specs">

          <span>
            <Users size={15} />
            {car.seats} seats
          </span>

          <span>
            <Fuel size={15} />
            {car.fuel}
          </span>

          <span>
            <Settings2 size={15} />
            {car.transmission}
          </span>

        </div>

        <div className="card-bottom">

          <div>
            <strong>
              ₹{car.price.toLocaleString("en-IN")}
            </strong>

            <span className="muted">
              / day
            </span>
          </div>

          <Link
            to={`/booking/${car.id}`}
            className="round-link"
          >
            <ArrowUpRight size={20} />
          </Link>

        </div>

      </div>

    </article>
  );
}