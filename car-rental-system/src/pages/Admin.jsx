import { useState } from "react";
import { cars } from "../data/cars";

export default function Admin() {

  const [bookings, setBookings] = useState(() =>
    JSON.parse(localStorage.getItem("driveeaseBookings") || "[]")
  );

  function updateStatus(id, status) {

    const updatedBookings = bookings.map((booking) =>
      booking.bookingId === id
        ? { ...booking, status }
        : booking
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "driveeaseBookings",
      JSON.stringify(updatedBookings)
    );
  }

  const pendingCount = bookings.filter(
    (b) => b.status === "Pending"
  ).length;

  return (
    <main className="section page-section">

      <span className="eyebrow">
        MANAGEMENT
      </span>

      <h1>
        Admin <span className="accent">dashboard.</span>
      </h1>

      <div className="admin-stats">

        <div>
          <small>Fleet size</small>
          <h2>{cars.length}</h2>
        </div>

        <div>
          <small>Total booking requests</small>
          <h2>{bookings.length}</h2>
        </div>

        <div>
          <small>Pending requests</small>
          <h2>{pendingCount}</h2>
        </div>

      </div>

      <h2>Booking requests</h2>

      {bookings.length === 0 ? (

        <div className="empty">
          No booking requests yet.
        </div>

      ) : (

        bookings.map((booking) => (

          <article
            className="booking-row"
            key={booking.bookingId}
          >

            <div>

              <h3>{booking.car}</h3>

              <p>
                {booking.name} · {booking.email}
              </p>

              <p>
                {booking.pickup} → {booking.returnDate}
              </p>

            </div>

            <div className="admin-actions">

              <b>
                ₹{booking.total.toLocaleString("en-IN")}
              </b>

              <select
                value={booking.status}
                onChange={(e) =>
                  updateStatus(booking.bookingId, e.target.value)
                }
              >
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Cancelled</option>
              </select>

            </div>

          </article>

        ))

      )}

      <p className="muted admin-note">
        Demo admin panel using Local Storage.
      </p>

    </main>
  );
}