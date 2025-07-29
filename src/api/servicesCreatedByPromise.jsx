export const servicesCreatedByPromise = email => {
  return fetch(`https://fest-olive.vercel.app/services?email=${email}`).then(res => res.json());
};
