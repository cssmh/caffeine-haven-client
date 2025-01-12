import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import ButtonMain from "../../Components/ButtonMain";

const img1 = "https://i.ibb.co/ynZfgtx/st-coffee1-jpg.webp";
const img2 = "https://i.ibb.co/xM81mdR/st-coffee5-jpg.webp";

const About = () => {
  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="w-full flex flex-col md:flex-row justify-center gap-9 items-stretch">
        <div className="w-full md:w-1/2 py-5 flex flex-col self-stretch justify-center items-start">
          <SectionTitle
            smallText={"About us"}
            bigText={"We invite you to our Caffeine"}
          />
          <p className="font-body text-lightWhite mb-2">
            Sip into perfection at our coffee haven, where aromatic blends meet
            exquisite flavors in a cozy ambiance. Explore the art of brewing and
            indulge in delightful treats, making every visit a delightful
            journey for your palate and soul.
          </p>
          <Link to={"/about"}>
            <ButtonMain buttonText="Read more" />
          </Link>
        </div>
        <div className="w-full self-stretch md:w-1/2">
          <img src={img1} alt="" className="w-full bg-cover" />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center gap-9 items-stretch mt-12">
        <div className="w-full self-stretch md:w-1/2 order-2 md:order-1">
          <img src={img2} alt="" className="w-full bg-cover" />
        </div>
        <div className="w-full md:w-1/2 py-5 flex flex-col gap-5 self-stretch justify-center items-start order-1 md:order-2">
          <SectionTitle
            smallText={"Coffee menu"}
            bigText={"Quality Kava Beans"}
          />
          <p className="font-body text-lightWhite">
            Sip into perfection at our coffee haven, where aromatic blends meet
            exquisite flavors in a cozy ambiance. Explore the art of brewing and
            indulge in delightful treats, making every visit a delightful
            journey for your palate and soul.
          </p>
          <Link to={"/allMenus"}>
            <ButtonMain buttonText="View menu" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
