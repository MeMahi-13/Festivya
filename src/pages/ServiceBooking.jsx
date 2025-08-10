import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useAuth } from "../context/AuthContext";


export default function ServiceBooking() {
  const service = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { _id, serviceName, price, providerName, providerEmail } = service;
  const [takingDate, setTakingDate] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  if (!user) return <p className="text-center py-8">Loading...</p>;

  const handleBookingForm = async e => {
    e.preventDefault();
    if (!takingDate) {
      setError("Please choose a date.");
      return;
    }
    const booking = {
      serviceId: _id,
      serviceName: serviceName,
      providerEmail,
      providerName,
      userEmail: user.email,
      userName: user.displayName,
      takingDate,
      instructions,
      price,
      serviceStatus: "pending"
    };
    try {
      const res = await fetch("https://fest-olive.vercel.app/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking)
      });
      if (res.ok) {
        Swal.fire("Success!", "Booking submitted successfully", "success");
        navigate("/");
      }

      else setError((await res.json()).error || "Booking failed");
    } catch {
      setError("Network error – try again later.");
    }
  };

  return (
    <div className=" font-roboto min-h-screen px-8 py-8 bg-pink-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex justify-end">

      </div>

      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md space-y-4">
        <h2 className="text-2xl w-full font-bold">Book Service: {serviceName}</h2>

        <form onSubmit={handleBookingForm} className="space-y-4">
          <fieldset disabled className="space-y-2">
            {[_id, providerName, price, user.email].map((val, idx) => (
              <div key={idx}>
                <input
                  className="input w-full bg-pink-200 dark:bg-green-700 border-pink-300 dark:border-gray-600"
                  value={val}
                />
              </div>
            ))}
          </fieldset>

         

          <div>
            <label className="block mb-1">Service Date *</label>
            <input
              type="date"
              className="input w-full bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              value={takingDate}
              onChange={e => setTakingDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1">Special Instructions</label>
            <textarea
              className="input w-full bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              rows="3"
              value={instructions}
              onChange={e => setInstructions(e.target.value)}
              placeholder="Address, area, requests..."
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded transition"
          >
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
}
