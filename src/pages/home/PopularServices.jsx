import { use } from "react";
import { Link } from "react-router-dom";
import PopJobCard from "./PopJobCard";

const PopularServices = ({ servicesPromise }) => {
  const services = use(servicesPromise);

  return (
    <div className="py-12 bg-white dark:bg-base-200">
      <h1 className="py-10 text-4xl text-center font-bold text-pink-950 dark:text-white">
        Our Popular Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl mx-auto">
        {services.slice(0, 6).map(service => (
          <PopJobCard key={service._id} service={service} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/all-services">
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md transition">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
