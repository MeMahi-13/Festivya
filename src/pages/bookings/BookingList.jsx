import { use } from "react";
import BookingsRow from "./BookingsRow";

const BookingList = ({ bookingsPromise }) => {
  const bookings = use(bookingsPromise);

  return (
    <div>
      <h1 className="text-2xl font-bold m-10">
        Your Bookings so far: {bookings.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tbody>
            {bookings.map((booking, index) => (
              <BookingsRow key={booking._id}
               booking={booking}
               index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
