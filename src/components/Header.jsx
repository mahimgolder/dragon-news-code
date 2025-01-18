import moment from "moment";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex flex-col items-center gap-2 w-11/12 mx-auto">
            <div className="logo">
                <Link to={"/"}><img className=" w-[471px] h-[60px] mt-4" src={logo} alt="" /></Link>
            </div>
            <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
            <p>
            <span>{moment().format('dddd')}</span>
            <span className="text-gray-400">{moment().format('MMMM Do YYYY')}</span>
            </p>
        </div>
    );
};

export default Header;