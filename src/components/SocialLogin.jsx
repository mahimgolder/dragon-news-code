import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="border-2">
            <h2 className='font-semibold mb-3 '>Login With</h2>
            <div className="flex flex-col gap-3 *:border-gray-900 m-3">
                <button className="btn"><FaGoogle></FaGoogle>Login with google</button><button className="btn"><FaGithub></FaGithub>Login with github</button>
            </div>
        </div>
    );
};

export default SocialLogin;