import { use, useState } from "react";
import { handleDelete } from "./HandleDelete";
import HandleEdit from "./HandleEdit";

const ServicesList = ({ servicesCreatedByPromise }) => {
  const initialServices = use(servicesCreatedByPromise);
  const [services, setServices] = useState(initialServices);
  const [editingService, setEditingService] = useState(null); // modal toggle

  const handleUpdate = (updatedService) => {
    const updatedList = services.map(service =>
      service._id === updatedService._id ? updatedService : service
    );
    setServices(updatedList);
  };

  return (
    <div className="pt-20 bg-white dark:bg-base-200 dark:text-white p-10 text-black">
      <h2 className="text-3xl py-5 font-bold text-black dark:text-white">
        Services Posted By You
      </h2>

      {/* Display message if no services */}
      {services.length === 0 ? (
        <div className="text-center text-gray-500">No services posted yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead className="bg-pink-200 text-black dark:bg-gray-700 dark:text-white">
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Area</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service._id}>
                  <th>{index + 1}</th>
                  <td>{service.serviceName}</td>
                  <td>{service.area || "N/A"}</td>
                  <td>${service.price || "N/A"}</td>
                  <td className="space-x-2">
                    <button
                      onClick={() => setEditingService(service)}
                      className="btn btn-sm btn-warning"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(service._id, () =>
                        setServices(prev => prev.filter(s => s._id !== service._id))
                      )}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editingService && (
        <HandleEdit
          service={editingService}
          isOpen={true}
          onClose={() => setEditingService(null)}
          onUpdate={(updatedData) => {
            handleUpdate(updatedData);
            setEditingService(null);
          }}
        />
      )}
    </div>
  );
};

export default ServicesList;
