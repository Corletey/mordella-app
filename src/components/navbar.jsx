import { Link } from "react-router-dom";
import K from "../constants";

const Navbar = () => (
  <div className="flex justify-between px-56 py-10 fixed w-full left-0 top-0">
    <span className="font-extrabold text-3xl">HerMuse</span>

    <div className="flex gap-x-16">
      {K.NAVLINKS.map((item, index) => {
        return (
          <Link key={index} to={item.path}>
            {item.name}
          </Link>
        );
      })}
    </div>
  </div>
);

export default Navbar;
"text-white hover:text-gray-300 px-2"