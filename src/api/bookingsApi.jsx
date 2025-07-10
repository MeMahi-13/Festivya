export const bookingsPromise = (email) => {
    return fetch(`http://localhost:3000/bookings?userEmail=${email}`).then(res=>res.json());
  };