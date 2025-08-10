import { useContext, useEffect, useState } from 'react';
import useTitle from '../components/useTitle';
import { AuthContext } from '../context/AuthContext';

function ServiceToDo() {
    useTitle('Todo|Festivya');
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    if (!user?.email) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://fest-olive.vercel.app/bookings?providerEmail=${user.email}`);
      if (!res.ok) throw new Error('Failed to fetch services');
      const data = await res.json();
      setServices(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [user]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`https://fest-olive.vercel.app/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceStatus: newStatus }),
      });
      const data = await res.json();
      if (data.modifiedCount > 0) {
        fetchServices(); 
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  if (loading) return <p className="text-center text-blue-500 mt-10">Loading services...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className='font-roboto bg-pink-100 dark:bg-base-200'>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6 dark:text-white text-black">Services To Do</h1>

        {services.length === 0 ? (
          <p className="text-center text-gray-600">No bookings </p>
        ) : (
          <ul className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {services.map((b) => (
              <li key={b._id} className="bg-white shadow rounded-lg border border-gray-200 overflow-hidden">
                <img
                  src={b.serviceImage || "https://via.placeholder.com/400x200?text=No+Image"}
                  alt={b.serviceName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-medium text-gray-800">{b.serviceName}</h2>
                  <p className="text-gray-600">Booked by: <strong>{b.userName}</strong></p>
                  <p className="text-gray-600">Date: {new Date(b.takingDate).toLocaleDateString()}</p>
                  <div className="mt-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Status
                    </label>
                    <select
                      value={b.serviceStatus}
                      onChange={(e) => handleStatusChange(b._id, e.target.value)}
                      className="block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-900"
                    >
                      <option value="pending">Pending</option>
                      <option value="working">Working</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ServiceToDo;
