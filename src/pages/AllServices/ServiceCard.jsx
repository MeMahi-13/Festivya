import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const {
    _id,
    serviceName,
    description,
    serviceImage,
    providerName,
    providerImage,
    price,
    area,
  } = service;

  const shortDesc = description
    ? description.length > 100
      ? description.slice(0, 100) + "…"
      : description
    : "";

  return (
    <div className="p-7 max-w-4xl bg-pink-100 dark:bg-pink-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={serviceImage} alt={serviceName} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-bold text-black dark:text-white mb-2">{serviceName}</h2>
        <p className="line-clamp-3 text-gray-700 dark:text-white text-sm mb-4">
          {shortDesc}
        </p>
        <div className="flex items-center mb-4">
          <img src={providerImage} alt={providerName} className="h-10 w-10 rounded-full mr-3" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">{providerName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{area}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-pink-600 dark:text-white">{price}</span>
          <Link to={`/services/${_id}`}>
            <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold rounded">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
