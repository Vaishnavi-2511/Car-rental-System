import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignup(e) {

    e.preventDefault();

    localStorage.setItem(
      "driveeaseUser",
      JSON.stringify({ name, email })
    );

    alert("Account created successfully!");

    navigate("/");
  }

  return (
    <main className="auth-wrap">

      <form
        className="auth-card"
        onSubmit={handleSignup}
      >

        <span className="eyebrow">
          JOIN DRIVE EASE
        </span>

        <h1>Create account.</h1>

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
          Email

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Password

          <input
            type="password"
            minLength="6"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
          />
        </label>

        <button className="btn full">
          Sign up
        </button>

        <p className="muted">
          Already registered?{" "}
          <Link to="/login" className="text-link">
            Log in
          </Link>
        </p>

        <small>
          Demo-only signup. Data is stored in your browser.
        </small>

      </form>

    </main>
  );
}