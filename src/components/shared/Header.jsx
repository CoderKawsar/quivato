import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/Quivato_fullpic.png";

function Header() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-2 justify-between items-center md:mx-32 md:py-4 mb-12">
      <div className="flex justify-center md:justify-start">
        <img
          src={siteLogo}
          className="h-[100px] w-[100px] animate__animated  animate__flipInX"
          alt="Quivato"
        />
      </div>
      <div className="mx-8 md:mx-0 mt-4 md:mt-0 flex justify-between gap-x-16 text-white text-lg font-bold md:ml-auto">
        <Link to="/" className="hover:text-[#FF3300]">
          Home
        </Link>
        <Link to="/services" className="hover:text-[#FF3300]">
          Services
        </Link>
        <Link to="/contact" className="hover:text-[#FF3300]">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
