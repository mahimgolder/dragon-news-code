import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-gray-200 p-2">
            <p className="bg-[#D72050] px-2 py-1 text-base-100">Latest</p>
            <Marquee pauseOnHover={true} speed={50}> 
            <Link to={"/news"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laboriosam?
            </Link>
            <Link to={"/news"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laboriosam?
            </Link>
            <Link to={"/news"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, laboriosam?
            </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;