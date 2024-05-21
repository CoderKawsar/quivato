import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/Quivato_fullpic.png";

function Header() {
  return (
    <header className="flex justify-between items-center mx-32 py-4">
      <div className="h-[100px] w-[100px]">
        <img src={siteLogo} alt="Quivato" />
      </div>
      <div className="flex gap-x-12 text-white text-lg font-bold">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}

export default Header;
