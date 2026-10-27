import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <Link to="/tasks" className="flex items-center gap-2">
      <FaChevronLeft className="text-3xl md:text-[50px] text-[#292929]" />
      <h1 className="text-[#292929] font-medium text-3xl md:text-[50px]">
        {title}
      </h1>
    </Link>
  );
};

export default PageHeader;
