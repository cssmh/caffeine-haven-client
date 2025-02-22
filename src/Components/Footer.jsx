import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import useDownAnimation from "../Hooks/useDownAnimation";
import useUpAnimation from "../Hooks/useUpAnimation";

// website logo
const logo = "https://i.ibb.co/sR7yV2c/website-Logo.png";

const Footer = () => {
  // hooks
  const downAnimation = useDownAnimation();
  const upAnimation = useUpAnimation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-third font-body">
      <motion.div
        variants={downAnimation(1, 0.4)}
        initial="hidden"
        whileInView={"visible"}
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt="website logo"
            className="w-[175px] h-[70px] hover:scale-110 duration-500"
          />
        </Link>
      </motion.div>
      {/* nav links */}
      <nav className="grid grid-flow-col gap-4">
        <Link
          to={"/about"}
          className="text-white hover:text-second duration-300"
        >
          About
        </Link>
        <Link
          to={"/contact"}
          className="text-white hover:text-second duration-300"
        >
          Contact
        </Link>
        <Link
          to={"/storyHub"}
          className="text-white hover:text-second duration-300"
        >
          Story Hub
        </Link>
      </nav>

      {/* social links */}
      <motion.nav
        variants={upAnimation(1, 0.7)}
        initial="hidden"
        whileInView={"visible"}
      >
        <div className="grid grid-flow-col gap-4 text-2xl">
          <FaFacebook className="text-white hover:text-second duration-500 cursor-pointer" />
          <FaInstagram className="text-white hover:text-second duration-500 cursor-pointer" />
          <FaTwitter className="text-white hover:text-second duration-500 cursor-pointer" />
          <FaPinterest className="text-white hover:text-second duration-500 cursor-pointer" />
          <FaYoutube className="text-white hover:text-second duration-500 cursor-pointer" />
        </div>
      </motion.nav>
      <aside>
        <p className="text-lightWhite">
          Copyright © {currentYear} - All right reserved by Caffeine Haven.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
