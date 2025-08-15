import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import useTitle from "../../components/useTitle";
import ServicesCard from "../AllServices/ServiceCard";

const AllServices = () => {
  useTitle("OurServices|Festivya");

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://fest-olive.vercel.app/services");
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
  let filteredServices = services.filter(service =>
    service.serviceName?.toLowerCase().includes(searchText.toLowerCase())
  );

  // Sort services numerically by price
  if (sortOrder) {
    filteredServices.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    });
  }

  if (loading) {
    return (
      <div className="text-center py-10">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-10">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="font-roboto py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="py-10 text-4xl text-center font-bold text-black dark:text-white">
        Explore Our Services
      </h1>

      {/* 🔍 Search + Sort */}
      <div className="mb-6 text-center flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="text"
          placeholder="Search services by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-md px-4 py-2 w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="">Sort by price</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      {/* 🧾 Services Grid */}
      <div className="grid grid-cols-1 gap-6 p-6 max-w-3xl mx-auto">
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
