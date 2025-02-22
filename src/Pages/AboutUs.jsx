import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useUpAnimation from "../Hooks/useUpAnimation";
import useRightAnimation from "../Hooks/useRightAnimation";
import useLeftAnimation from "../Hooks/useLeftAnimation";
import useScrollToTop from "../Hooks/useScrollToTop";
import SectionTitle from "../Components/SectionTitle";
import ButtonMain from "../Components/ButtonMain";
import InstagramPost from "../Components/InstagramPost";

// image url
const bgImg = "https://i.ibb.co/PrKSzcT/coffee-bg.jpg";
const img1 =
  "https://i.ibb.co/f4Y0n9W/brooke-cagle-9f-HMo1-5-Io8-unsplash-2.jpg";
const iImg2 = "https://i.ibb.co/nMjL60G/mike-marquez-384421-unsplash.jpg";

const AboutUs = () => {
  // hooks
  const upAnimation = useUpAnimation();
  const rightAnimation = useRightAnimation();
  const leftAnimation = useLeftAnimation();

  // hooks
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div className="mx-auto overflow-x-hidden">
      {/* page heading section */}
      <div
        className="h-[400px] md:h-[450px] lg:h-[500px] flex flex-col justify-center items-center gap-4"
        style={{
          background: `linear-gradient(to top, #000000a6, #000000a6), url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <motion.h1
          variants={upAnimation(1.2, 0)}
          initial="hidden"
          whileInView={"visible"}
          className="text-5xl uppercase md:text-7xl font-heading text-center mt-[100px]"
        >
          About Us
        </motion.h1>
      </div>

      {/* about section */}
      <div className="mt-14 container mx-auto flex flex-col md:flex-row justify-start items-center gap-10 px-5 lg:px-10 py-7">
        <motion.div
          variants={rightAnimation(1.3, 0.3)}
          initial="hidden"
          whileInView={"visible"}
          className="w-full md:w-1/2"
        >
          <img src={img1} alt="" className="rounded-t-[250px]" />
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-7">
          <SectionTitle
            smallText={"Welcome to Caffeine!"}
            bigText={"Our Story"}
          />
          <p className="font-body text-lightWhite">
            Welcome to Caffeine, where passion for flavor meets a cozy ambiance.
            Our culinary journey is a celebration of diverse tastes, blending
            global inspirations with local ingredients.
            <br />
            <br />
            At Caffeine, we craft more than just meals; we create experiences.
            Indulge in a symphony of flavors, from aromatic coffee brews to
            delectable bites. Our menu is a testament to our commitment to
            quality and innovation, offering a fusion of traditional and modern
            dishes.
            <br />
            <br />
            Join us in savoring the art of dining. Explore our menu and let your
            taste buds embark on a delightful adventure. Click below to discover
            the gastronomic delights that await you.
          </p>
          <Link to={"/allMenus"}>
            <ButtonMain buttonText={"View Menus"} />
          </Link>
        </div>
      </div>

      {/* instagram section */}
      <InstagramPost />

      {/* philosophy section */}
      <div className="mt-14 container mx-auto flex flex-col md:flex-row justify-start items-center gap-10 px-5 lg:px-10 py-7">
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-7">
          <SectionTitle
            smallText={"Great experience with us"}
            bigText={"Our Philosophy"}
          />
          <p className="font-body text-lightWhite">
            Step into the warm embrace of Caffeine, where every corner is
            infused with a welcoming ambiance.
            <br />
            <br />
            At Caffeine, we prioritize sustainability, striving to minimize our
            ecological footprint. Our commitment to a green environment extends
            from sourcing local, eco-friendly ingredients to employing
            energy-efficient practices. Feel the harmony of a space that not
            only delights your palate but also nurtures a connection with
            nature.
            <br />
            <br />
            Join us in creating memories within an environment that reflects our
            dedication to both your enjoyment and the planet.
          </p>
          <Link to={"/findATable"}>
            <ButtonMain buttonText={"Reservation"} />
          </Link>
        </div>

        <motion.div
          variants={leftAnimation(1.3, 0.5)}
          initial="hidden"
          whileInView={"visible"}
          className="w-full md:w-1/2"
        >
          <img src={iImg2} alt="" className="rounded-t-[250px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
