import { Navigate, useLocation } from "react-router-dom";
import useIsAdmin from "../Hooks/useIsAdmin";
import useAuthContext from "../Hooks/useAuthContext";
import LoadingAnimation from "../Components/LoadingAnimation";

const AdminRoute = ({ children }) => {
  const { isAdminPending, isAdmin } = useIsAdmin();
  const { authLoading, currentUser } = useAuthContext();
  const location = useLocation();

  if (authLoading || isAdminPending) return <LoadingAnimation />;
  if (currentUser && isAdmin) return children;
  return <Navigate to={"/"} state={{ from: location }}></Navigate>;
};

export default AdminRoute;
