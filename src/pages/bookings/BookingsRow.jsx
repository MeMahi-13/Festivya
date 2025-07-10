import { useNavigate } from "react-router-dom";

const BookingsRow = ({ booking, index }) => {
  const { serviceName, serviceImage, price, date, serviceStatus, serviceId} = booking;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <tr className="hover">
      <th className="text-base">{index + 1}</th>

      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img src={serviceImage} alt={serviceName} />
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl">{serviceName}</div>
            <div className="text-md text-green-500">{price}</div>
          </div>
        </div>
      </td>

      <td className="flex gap-15">
        <span
          className={`badge text-md px-5 py-4 ${
            serviceStatus === "pending"
              ? "badge-warning"
              : serviceStatus === "working"
              ? "badge-info"
              : "badge-success"
          }`}
        >
          {serviceStatus}
        </span>
        <br />
        <span className="text-xl text-black dark:text-white">{date}</span>
      </td>
      <td>
        <button
          onClick={handleViewDetails}
          className="btn btn-md bg-pink-200 hover:bg-pink-300 text-black dark:bg-pink-700 dark:text-white dark:hover:bg-pink-600 transition"
        >
          View Details
        </button>
      </td>
    </tr>
  );
};

export default BookingsRow;
