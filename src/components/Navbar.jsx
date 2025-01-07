import { Link } from "react-router-dom";
import profileIcon from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="ml-40 border-2"></div>
            <div className=" space-x-4 text-[#706F6F]">
                <Link to="/news">Home</Link>
                <Link to="/news">About</Link>
                <Link to="/news">Career</Link>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    <img src={profileIcon} alt="" />
                </div>
                <button className="btn btn-neutral px-8 rounded-none py-2 ">Login</button>
            </div>
        </div>
    );
};

export default Navbar;