import { Link } from "react-router";

const PopJobCard = ({ service }) => {
  const { serviceName, description, serviceImage, providerName, providerImage, price, area,_id } = service;
   const shortDesc = description
    ? description.length > 100
      ? description.slice(0, 100) + "…"
      : description
    : "";
  return (
    <div className="p-7 max-w-xl bg-pink-100 dark:bg-pink-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={serviceImage}
        alt={serviceName}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-2">{serviceName}</h2>
        <p className="text-gray-700 dark:text-white text-sm mb-4 line-clamp-3">
          {shortDesc}
        </p>
        <div className="flex items-center mb-4">
          <img
            src={providerImage}
            alt={providerName}
            className="h-10 w-10 rounded-full object-cover mr-3"
          />
          <div>
            <p className="text-gray-900 dark:text-white font-medium">{providerName}</p>
            <p className="text-gray-500 dark:text-white text-xs">{area}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-pink-600 dark:text-white">{price}</span>
         <Link to={`/services/${_id}`}>
          <button className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold rounded">
            View Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default PopJobCard;
