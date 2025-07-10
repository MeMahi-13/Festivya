import { useEffect, useState } from "react";
import ServicesCard from "../AllServices/ServiceCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState(""); 

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:3000/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Filter services based on search text
  const filteredServices = services.filter(service =>
    service.serviceName?.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return <div className="text-center py-10">Loading services...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-10">Error: {error}</div>;
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="py-10 text-4xl text-center font-bold text-black dark:text-white">
        Explore Our Services
      </h1>

      {/* 🔍 Search Input */}
      <div className="mb-10 text-center">
        <input
          type="text"
          placeholder="Search services by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md px-4 py-2 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* 🧾 Filtered Services */}
      <div className="grid grid-cols-1 gap-6 p-6 max-w-4xl mx-auto">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServicesCard key={service._id} service={service} />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No services found matching "{searchText}"
          </p>
        )}
      </div>
    </section>
  );
};

export default AllServices;
