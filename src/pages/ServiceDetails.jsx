// ServiceDetails.jsx
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const {
    _id,
    serviceName,
    price,
    serviceImage,
    description,
    providerName,
    providerImage,
    area
  } = useLoaderData();

  return (
    <div className="font-roboto bg-white dark:bg-base-200">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src={serviceImage}
            alt={name}
            className="w-full h-64 object-cover"
            loading="lazy"
          />

          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {serviceName}
            </h1>

            <p className="text-xl text-pink-600 dark:text-pink-300 font-semibold mb-6">
              {price}
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex items-center mb-6">
              <img
                src={providerImage}
                alt={providerName}
                className="h-12 w-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {providerName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {area}
                </p>
              </div>
            </div>

            <Link to={`/bookings/${_id}`}>
              <button className="w-full md:w-auto px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded shadow-md transition">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
