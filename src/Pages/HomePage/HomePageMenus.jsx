import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import CenteredSectionTitle from "../../Components/CenteredSectionTitle";
import SingleMenuList from "../../Components/SingleMenuList";
import ButtonMain from "../../Components/ButtonMain";

const HomePageMenus = () => {
  const axiosPublic = useAxiosPublic();

  const { isPending: homeMenusPending, data: homeMenus } = useQuery({
    queryKey: ["home-menus"],
    queryFn: async () => {
      const res = await axiosPublic.get("/latestMenuForHomepageApi");
      return res.data;
    },
  });

  // conditional loading
  if (homeMenusPending) {
    return (
      <p className="font-heading text-lightWhite text-center">Loading....</p>
    );
  }

  return (
    <div className="mt-5 container mx-auto flex flex-col justify-center items-center gap-10 px-5">
      <CenteredSectionTitle
        smallText={"Enjoy Our Menu"}
        bigText={"Our Latest Collection"}
      />

      <div className="w-full my-5 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
        {homeMenus?.map((singleMenu, index) => (
          <SingleMenuList key={index} singleMenu={singleMenu}></SingleMenuList>
        ))}
      </div>

      <Link to={"/allMenus"}>
        <ButtonMain buttonText={"View Menus"} />
      </Link>
    </div>
  );
};

export default HomePageMenus;
