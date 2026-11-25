import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../data/cars";
import { useState } from "react";

export default function Booking() {

  const { id } = useParams();

  const car = cars.find((c) => c.id === Number(id));

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pickup, setPickup] = useState("");
  const [returnDate, setReturnDate] = useState("");

  if (!car) {
    return <main className="section">Car not found.</main>;
  }

  const days = Math.max(
    1,
    Math.ceil(
      (new Date(returnDate) - new Date(pickup)) / 86400000
    ) || 1
  );

  function handleBooking(e) {

    e.preventDefault();

    const booking = {
      bookingId: Date.now(),
      car: car.name,
      carId: car.id,
      name,
      email,
      pickup,
      returnDate,
      days,
      total: days * car.price,
      status: "Pending"
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("driveeaseBookings") || "[]"
    );

    localStorage.setItem(
      "driveeaseBookings",
      JSON.stringify([...existingBookings, booking])
    );

    alert("Booking request submitted!");

    navigate("/bookings");
  }

  return (
    <main className="section page-section booking-layout">

      <div>

        <span className="eyebrow">
          RESERVE YOUR RIDE
        </span>

        <h1>
          Book your <span className="accent">car.</span>
        </h1>

        <img
          className="booking-photo"
          src={car.image}
          alt={car.name}
        />

        <h2>{car.name}</h2>

        <p className="muted">
          {car.type} · {car.transmission} · {car.fuel}
        </p>

      </div>

      <form
        className="booking-form"
        onSubmit={handleBooking}
      >

        <h2>Booking details</h2>

        <label>
          Full name

          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>

        <label>
          Email address

          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Pickup date

          <input
            required
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
        </label>

        <label>
          Return date

          <input
            required
            type="date"
            min={pickup || new Date().toISOString().split("T")[0]}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>

        <div className="price-summary">

          <span>{car.name}</span>

          <b>
            ₹{car.price.toLocaleString("en-IN")} / day
          </b>

          <span>
            {days} day(s)
          </span>

          <strong>
            Estimated total: ₹
            {(days * car.price).toLocaleString("en-IN")}
          </strong>

        </div>

        <button className="btn full" type="submit">
          Confirm booking request
        </button>

        <small className="muted">
          Demo booking only. No payment is processed.
        </small>

      </form>

    </main>
  );
}