import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
    return (
        <>
        <h2 className='font-semibold my-8 '>Login With</h2>
        <div className="join flex flex-col  *:bg-base-100">
          <button className="btn justify-start join-item"><FaFacebook></FaFacebook>facebook</button>
          <button className="btn justify-start join-item"><FaFacebook></FaFacebook>facebook</button>
          <button className="btn justify-start join-item"><FaFacebook></FaFacebook>facebook</button>
        </div>
        </>
    );
};

export default FindUs;