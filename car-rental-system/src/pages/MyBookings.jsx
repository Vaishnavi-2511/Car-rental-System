import { useState } from "react";

export default function MyBookings() {

  const [bookings, setBookings] = useState(() =>
    JSON.parse(localStorage.getItem("driveeaseBookings") || "[]")
  );

  function removeBooking(id) {

    const updatedBookings = bookings.filter(
      (b) => b.bookingId !== id
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "driveeaseBookings",
      JSON.stringify(updatedBookings)
    );
  }

  return (
    <main className="section page-section">

      <span className="eyebrow">
        YOUR TRIPS
      </span>

      <h1>
        My <span className="accent">bookings.</span>
      </h1>

      {bookings.length === 0 ? (

        <div className="empty">
          No bookings yet. Book a car to see your trips here.
        </div>

      ) : (

        <div className="booking-list">

          {bookings.map((booking) => (

            <article
              className="booking-row"
              key={booking.bookingId}
            >

              <div>

                <h3>{booking.car}</h3>

                <p>
                  {booking.pickup} → {booking.returnDate}
                </p>

                <small>
                  {booking.name} · {booking.email}
                </small>

              </div>

              <div>

                <b>
                  ₹{booking.total.toLocaleString("en-IN")}
                </b>

                <p className="status">
                  {booking.status}
                </p>

                <button
                  className="text-link"
                  onClick={() => removeBooking(booking.bookingId)}
                >
                  Remove
                </button>

              </div>

            </article>

          ))}

        </div>

      )}

    </main>
  );
}