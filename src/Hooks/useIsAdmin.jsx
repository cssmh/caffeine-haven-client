import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuthContext from "./useAuthContext";

const useIsAdmin = () => {
  // hooks and custom hooks
  const axiosPublic = useAxiosPublic();
  const { authLoading, currentUser } = useAuthContext();

  // data fetching
  const { isPending: isAdminPending, data: isAdmin } = useQuery({
    queryKey: ["isAdmin", currentUser?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/verifyAdminApi/${currentUser?.email}`
      );
      return res.data.admin;
    },
  });

  return { isAdminPending, isAdmin };
};

export default useIsAdmin;
