import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";
import LoadingAnimation from "../Components/LoadingAnimation";

const PrivateRoute = ({ children }) => {
  const { authLoading, currentUser } = useAuthContext();
  const location = useLocation();

  if (authLoading) return <LoadingAnimation />;
  if (currentUser) return children;
  return <Navigate state={{ from: location }} to={"/signIn"}></Navigate>;
};

export default PrivateRoute;
