import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const HandleEdit = ({ service, isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    serviceName: "",
    price: "",
    area: "",
  });

  useEffect(() => {
    if (service) {
      setFormData({
        serviceName: service.serviceName || "",
        price: service.price || "",
        area: service.area || "",
      });
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update this service?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
    });

    if (confirmed.isConfirmed) {
      const res = await fetch(
        `http://localhost:3000/services/${service._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await res.json();

      if (result.modifiedCount > 0) {
        Swal.fire("Success", "Service updated!", "success");
        onUpdate({ ...formData, _id: service._id });
        onClose();
      } else {
        Swal.fire("No change", "No fields were updated.", "info");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-pink-300 dark:bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-black p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Service</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="bg-pink-100 dark:bg-black text-black dark:text-white input input-bordered w-full border-2 border-black"
            type="text"
            name="serviceName"
            value={formData.serviceName}
            onChange={handleChange}
            placeholder="Service Name"
            required
          />
          <input
            className="input bg-pink-100 dark:bg-black text-black dark:text-white border-2 border-black input-bordered w-full"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
          <input
            className="bg-pink-100 dark:bg-black text-black dark:text-white border-2 border-black input input-bordered w-full"
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Area"
          />

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HandleEdit;
