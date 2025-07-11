import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../Components/useTitle";
import { useAuth } from "../context/AuthContext";

const AddService = () => {
    useTitle("AddService | Festivya");
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");



  const handleAddService = async (e) => {
    e.preventDefault();

    if (!user?.email) {
      setError("You must be logged in to add a service.");
      return;
    }

    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    data.providerEmail = user.email;
    data.providerName = user.displayName || "";
    data.providerImage = user.photoURL || "";

    try {
      const res = await fetch(
        `http://localhost:3000/services`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result.insertedId) {
        Swal.fire({
          title: "Service Added!",
          text: "Your event service has been successfully added.",
          icon: "success",
          confirmButtonText: "OK"
        }).then(() => navigate("/manageServices"));
      } else {
        setError(result.error || "Service creation failed");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("Network error — please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 dark:bg-gray-900 p-5 transition duration-300">
      <div className="max-w-5xl mx-auto my-10 p-8 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">
          Offering an Event Service? Let Others Know!
        </h1>
        <h3 className="text-center mb-8 text-lg text-gray-600 dark:text-gray-300">
          Fill in the details below to add your event service!
        </h3>

        <form
          onSubmit={handleAddService}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Service Title */}
          <fieldset className="border border-gray-300 dark:border-gray-600 rounded p-3">
            <legend className="text-sm px-2">Service Title</legend>
            <input
              type="text"
              name="serviceName"
              placeholder="Enter your service title"
              className="input input-bordered w-full bg-blue-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </fieldset>

          {/* Description */}
          <fieldset className="border border-gray-300 dark:border-gray-600 rounded p-3">
            <legend className="text-sm px-2">Description</legend>
            <textarea
              name="description"
              placeholder="Describe your service in detail"
              className="textarea textarea-bordered w-full bg-blue-50 dark:bg-gray-700 dark:text-white"
              required
            ></textarea>
          </fieldset>

          {/* Pricing */}
          <fieldset className="border border-gray-300 dark:border-gray-600 rounded p-3">
            <legend className="text-sm px-2">Pricing (USD)</legend>
            <input
              type="number"
              name="price"
              placeholder="Set your service price"
              className="input input-bordered w-full bg-blue-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </fieldset>

          {/* Area */}
          <fieldset className="border border-gray-300 dark:border-gray-600 rounded p-3">
            <legend className="text-sm px-2">Service Area</legend>
            <input
              type="text"
              name="area"
              placeholder="Location or coverage area"
              className="input input-bordered w-full bg-blue-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </fieldset>

          {/* Provider Name */}
          <fieldset className="border border-gray-300 dark:border-gray-600 rounded p-3">
            <legend className="text-sm px-2">Your Full Name</legend>
            <input
              type="text"
              name="providerName"
              placeholder="Provider Name"
              defaultValue={user.displayName || ""}
              className="input input-bordered w-full bg-blue-50 dark:bg-gray-700 dark:text-white"
              required
              readOnly
            />
          </fieldset>

          {/* Provider Email */}
          <fieldset className="border border-gray-300 dark:border-gray-600 rounded p-3">
            <legend className="text-sm px-2">Your Email</legend>
            <input
              type="email"
              name="providerEmail"
              placeholder="email"
              defaultValue={user.email}
              className="input input-bordered w-full bg-blue-50 dark:bg-gray-700 dark:text-white"
              required
              readOnly
            />
          </fieldset>

          {/* Image URL */}
          <fieldset className="border border-gray-300 dark:border-gray-600 rounded p-3 md:col-span-2">
            <legend className="text-sm px-2">Service Image URL</legend>
            <input
              type="url"
              name="serviceImage"
              placeholder="Paste image URL here"
              className="input input-bordered w-full bg-blue-50 dark:bg-gray-700 dark:text-white"
              required
            />
          </fieldset>

          {/* Submit */}
          <button
            type="submit"
            className="btn w-full md:col-span-2 bg-pink-700 hover:bg-pink-800 text-white transition"
          >
            Add Service
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-500 font-semibold">{error}</p>
        )}
      </div>
    </div>
  );
};

export default AddService;
