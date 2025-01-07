import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="logo">
                <img className="border-2 border-black w-[471px] h-[60px] mt-4" src={logo} alt="" />
            </div>
            <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
            <p>{moment().format('dddd MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;