export const bookingsPromise = (email) => {
    return fetch(`https://fest-olive.vercel.app/bookings?userEmail=${email}`).then(res=>res.json());
  };