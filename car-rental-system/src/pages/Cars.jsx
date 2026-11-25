import { useState } from "react";
import { cars } from "../data/cars";
import CarCard from "../components/CarCard";

export default function Cars() {

  const [filter, setFilter] = useState("All");

  const filteredCars = cars.filter((car) => {

    if (filter === "All") return true;

    return (
      car.type.toLowerCase().includes(filter.toLowerCase()) ||
      car.fuel.toLowerCase() === filter.toLowerCase()
    );

  });

  return (
    <main className="section page-section">

      <span className="eyebrow">
        OUR FLEET
      </span>

      <h1>
        Find your <span className="accent">perfect ride.</span>
      </h1>

      <p className="muted">
        Explore our collection, from everyday comfort to premium experiences.
      </p>

      <div className="filters">

        {["All", "SUV", "Sedan", "Electric"].map((f) => (

          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`filter ${filter === f ? "active" : ""}`}
          >
            {f}
          </button>

        ))}

      </div>

      <div className="car-grid">

        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}

      </div>

      {filteredCars.length === 0 && (
        <p>No cars match this filter.</p>
      )}

    </main>
  );
}