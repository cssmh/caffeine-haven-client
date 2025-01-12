import About from "./About";
import HomePageMenus from "./HomePageMenus";
import HomeStories from "./HomeStories";
import Slider from "./Slider";
import WhyUs from "./WhyUs";
import WorkingHours from "./WorkingHours";
// import useScrollToTop from "../../Hooks/useScrollToTop";

const Home = () => {
  // const scrollToTop = useScrollToTop();

  // useEffect(() => {
  //   scrollToTop();
  // }, [scrollToTop]);

  return (
    <>
      <Slider />
      <About />
      <WhyUs />
      <HomePageMenus />
      <HomeStories />
      <WorkingHours />
    </>
  );
};

export default Home;
