import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllMenus = (selectedCategory, selectedOrigin) => {
  const axiosPublic = useAxiosPublic();
  const {
    isPending: allMenusPending,
    data: allMenus,
    refetch: allMenusRefetch,
  } = useQuery({
    queryKey: ["all-menus", selectedCategory, selectedOrigin],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/allMenu?category=${selectedCategory}&foodOrigin=${selectedOrigin}`
      );
      return res.data;
    },
  });

  return { allMenusPending, allMenus, allMenusRefetch };
};

export default useAllMenus;
