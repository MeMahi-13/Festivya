import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PackageOffers = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const packages = [
    {
      name: "Basic",
      price: "$9/mo",
      badge: "",
      features: [
        { text: "1 Service Booking", available: true },
        { text: "Email Support", available: true },
        { text: "2 Revisions", available: true },
        { text: "Basic Analytics", available: false },
        { text: "Priority Scheduling", available: false },
      ],
    },
    {
      name: "Standard",
      price: "$19/mo",
      badge: "Most Popular",
      features: [
        { text: "3 Service Bookings", available: true },
        { text: "Priority Support", available: true },
        { text: "5 Revisions", available: true },
        { text: "Basic Analytics", available: true },
        { text: "Priority Scheduling", available: false },
      ],
    },
    {
      name: "Premium",
      price: "$29/mo",
      badge: "",
      features: [
        { text: "Unlimited Bookings", available: true },
        { text: "24/7 Support", available: true },
        { text: "Unlimited Revisions", available: true },
        { text: "Advanced Analytics", available: true },
        { text: "Priority Scheduling", available: true },
      ],
    },
  ];

  // Handle subscribe click
  const handleSubscribe = () => {
    if (user) {
      navigate("/all-services"); 
    } else {
      navigate("/auth/login"); 
    }
  };

  return (
    <section className="py-12 bg-pink-100 text-black dark:bg-base-200 dark:text-white">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl text-pink-950 dark:text-white font-bold">Our Package Offers</h2>
        <p className="text-black dark:text-white mt-2">
          Choose the best plan for your service needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {packages.map((pkg, idx) => (
          <div key={idx} className="card w-96 bg-white dark:bg-base-100 shadow-sm">
            <div className="card-body">
              {pkg.badge && (
                <span className="badge badge-xs badge-warning">{pkg.badge}</span>
              )}
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{pkg.name}</h2>
                <span className="text-xl">{pkg.price}</span>
              </div>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {pkg.features.map((feature, i) => (
                  <li key={i} className={feature.available ? "" : "opacity-50"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`size-4 me-2 inline-block ${
                        feature.available
                          ? "text-success"
                          : "text-base-content/50"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={feature.available ? "" : "line-through"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackageOffers;
