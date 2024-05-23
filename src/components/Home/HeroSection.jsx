import { Link } from "react-router-dom";
import heroImg from "../../assets/images/img_group_665.png";

function HeroSection() {
  return (
    <div className=" md:mx-10 lg:mx-[85px] xl:mx-[120px] py-8 sm:py-0 md:py-[72px] grid grid-cols-12 items-center bg-[#CCFAF5] md:rounded-[20px] lg:rounded-[35px]">
      <div className="md:pl-10 lg:pl-[56px] sm:py-20 md:py-0 col-span-12 md:col-span-7">
        <h2 className="text-6xl md:text-5xl lg:text-[75px] text-center md:text-left md:mr-4 font-bold leading-tight  animate__animated animate__backInDown animate__delay-10s">
          Maximize your business with <span className="text-[#e05d5d]">us</span>
        </h2>
        <p className="text-xl mb-8 md:mb-10 lg:mb-16 mx-4 md:mx-0 md:mr-8 lg:mr-0 mt-8 text-center md:text-left lg:w-8/12">
          Maximize your business with a variety of services and services from us
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            to="contact"
            className="text-base h-12 w-40 sm:h-16 sm:w-48 md:h-12 md:w-40 lg:h-16 lg:w-48 flex justify-center items-center bg-[#38B5C6] hover:text-white shadow-xl  border-2 border-[#38B5C6] font-bold rounded mr-4"
          >
            Contact Us
          </Link>
          <Link
            to="contact"
            className="text-base h-12 w-40 sm:h-16 sm:w-48 md:h-12 md:w-40 lg:h-16 lg:w-48 flex justify-center items-center hover:bg-[#38B5C6] hover:border-[#38B5C6] hover:text-white border-2 border-black font-bold rounded animate__animated animate__flash"
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="md:h-96 lg:h-[473px] hidden sm:block md:block order-first md:order-last start col-span-12 md:col-span-5">
        <img
          src={heroImg}
          className="md:h-96 lg:h-[473px] animate__animated  animate__backInRight"
          alt="Hero section image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
