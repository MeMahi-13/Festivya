import { Suspense } from 'react';
import { bookingsPromise } from '../../api/bookingsApi';
import useTitle from '../../components/useTitle';
import { useAuth } from '../../context/AuthContext';
import BookingList from './BookingList';
import BookingStats from './BookingStats';


const BookedServices = () => {
    useTitle("Bookings | Festivya");
  const { user, loading } = useAuth();

if (loading) {
  return <p>Checking authentication…</p>;
}
if (!user) {
  return <p>Please log in to view bookings.</p>;
}

  return (
    <div className="min-h-screen bg-white dark:bg-base-200 dark:text-white text-black p-6">
      <BookingStats />
      
      <Suspense fallback={<p className="text-center">Loading your bookings...</p>}>

        <BookingList bookingsPromise={bookingsPromise(user.email)}></BookingList>
      </Suspense>
    </div>
  );
};

export default BookedServices;
