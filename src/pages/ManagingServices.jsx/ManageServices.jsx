import { Suspense } from "react";
import { servicesCreatedByPromise } from "../../api/servicesCreatedByPromise";
import { useAuth } from "../../context/AuthContext";
import ServicesList from "./ServicesList";

const ManageServices = () => {
  const { user } = useAuth();
  

  return (
    <div>
      <Suspense>
        <ServicesList servicesCreatedByPromise={servicesCreatedByPromise(user.email)}></ServicesList>
      </Suspense>
    </div>
  );
};

export default ManageServices;
