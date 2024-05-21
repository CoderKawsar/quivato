import { Link } from "react-router-dom";
import heroImg from "../../assets/images/img_group_665.png";

function HeroSection() {
  return (
    <div className="mx-[85px] py-[72px] flex bg-[#CCFAF5] rounded-[35px]">
      <div className="pl-[56px] w-7/12">
        <h2 className="text-[75px] font-bold leading-tight mt-12 mb-8 animate__animated animate__backInDown animate__delay-10s">
          Maximize your business with <span className="text-[#e05d5d]">us</span>
        </h2>
        <p className="text-xl mb-16 w-8/12">
          Maximize your business with a variety of services and services from us
        </p>
        <div>
          <Link
            to="contact"
            className="text-base px-16 py-5 bg-[#38B5C6] shadow-xl  border-2 border-[#38B5C6] font-bold rounded mr-4"
          >
            Contact Us
          </Link>
          <Link
            to="contact"
            className="text-base px-16 py-5 border-2 border-black font-bold rounded animate__animated animate__flash"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="h-[473px] w-5/12">
        <img
          src={heroImg}
          className="h-[473px] animate__animated  animate__backInRight"
          alt="Hero section image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
