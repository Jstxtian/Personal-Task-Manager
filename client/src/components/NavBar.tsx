import { Link } from "react-router-dom";
import logo from "../assets/Group 1.png";
import profile from "../assets/Group 6.png";

const LinkClass = "font-medium text-[22px] text-[#292929]";

const NavBar = () => {
  return (
    <div className="bg-[#FAF9FB] border-[0.5px] border-[#B8B6b6]">
      <nav className="max-w-360 flex items-center justify-between px-5 md:px-42.5 mx-auto h-23.25">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/new" className={LinkClass}>
            New Task
          </Link>

          <Link to="/tasks" className={LinkClass}>
            All Tasks
          </Link>
          <img src={profile} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
