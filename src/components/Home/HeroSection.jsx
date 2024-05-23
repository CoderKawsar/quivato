import { Link } from "react-router-dom";
import heroImg from "../../assets/images/img_group_665.png";

function HeroSection() {
  return (
    <div className="md:mx-[85px] py-[72px] grid grid-cols-12 bg-[#CCFAF5] md:rounded-[35px]">
      <div className="md:pl-[56px] col-span-12 md:col-span-7">
        <h2 className="text-6xl text-center md:text-left md:text-[75px] font-bold leading-tight md:mt-12 mb-8 animate__animated animate__backInDown animate__delay-10s">
          Maximize your business with <span className="text-[#e05d5d]">us</span>
        </h2>
        <p className="text-xl mb-8 md:mb-16 mx-4 text-center md:text-left md:w-8/12">
          Maximize your business with a variety of services and services from us
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            to="contact"
            className="text-base px-8 py-3 md:px-16 md:py-5 bg-[#38B5C6] hover:text-white shadow-xl  border-2 border-[#38B5C6] font-bold rounded mr-4"
          >
            Contact Us
          </Link>
          <Link
            to="contact"
            className="text-base px-8 py-3 md:px-16 md:py-5 hover:bg-[#38B5C6] hover:border-[#38B5C6] hover:text-white border-2 border-black font-bold rounded animate__animated animate__flash"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="h-[473px] hidden md:block col-span-12 md:col-span-5">
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
