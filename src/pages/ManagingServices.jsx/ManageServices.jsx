import { Suspense } from "react";
import { servicesCreatedByPromise } from "../../api/servicesCreatedByPromise";
import useTitle from "../../components/useTitle";
import { useAuth } from "../../context/AuthContext";
import ServicesList from "./ServicesList";

const ManageServices = () => {
    useTitle("ManageServices | Festivya");
  const { user } = useAuth();
  

  return (
    <div>
      <Suspense fallback={<div>Loading services...</div>}>
        <ServicesList servicesCreatedByPromise={servicesCreatedByPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default ManageServices;
