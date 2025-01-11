import { Navigate, useLocation } from "react-router-dom";
import LoadingAnimation from "../src/Components/LoadingAnimation/LoadingAnimation";
import useIsAdmin from "../src/Hooks/useIsAdmin/useIsAdmin";
import useAuthContext from "../src/Hooks/useAuthContext/useAuthContext";

const AdminRoute = ({ children }) => {
  // hooks and custom hooks
  const { isAdminPending, isAdmin } = useIsAdmin();
  const { authLoading, currentUser } = useAuthContext();
  const location = useLocation();

  if (authLoading || isAdminPending) {
    return <LoadingAnimation />;
  }

  if (currentUser && isAdmin) {
    return children;
  }

  return <Navigate to={"/"} state={{ from: location }}></Navigate>;
};

export default AdminRoute;
