import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <>
      <Hero />

      <section className="section">

        <div className="section-head">

          <div>
            <span className="eyebrow">
              HANDPICKED FOR YOU
            </span>

            <h2>
              Popular <span className="accent">rides</span>
            </h2>

            <p className="muted">
              Comfort, style and performance for every plan.
            </p>
          </div>

          <Link to="/cars" className="text-link">
            View all cars ↗
          </Link>

        </div>

        <div className="car-grid">

          {cars.slice(0, 3).map((car) => (
            <CarCard car={car} key={car.id} />
          ))}

        </div>

      </section>

      <section className="benefits">

        <div>
          <span className="eyebrow">
            THE DRIVE EASE DIFFERENCE
          </span>

          <h2>
            More than a ride.
            <br />
            It's your freedom.
          </h2>
        </div>

        <div className="benefit-grid">

          <article>
            <b>01 / Simple booking</b>
            <p>
              Book your preferred car in just a few steps.
            </p>
          </article>

          <article>
            <b>02 / Transparent pricing</b>
            <p>
              Know the daily rate upfront before booking.
            </p>
          </article>

          <article>
            <b>03 / Your choice</b>
            <p>
              Choose your ride for city drives or weekend trips.
            </p>
          </article>

        </div>

      </section>
    </>
  );
}