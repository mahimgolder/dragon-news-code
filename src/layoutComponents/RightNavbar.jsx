import FindUs from '../components/FindUs';
import SocialLogin from '../components/SocialLogin';

const RightNavbar = () => {
    return (
        <div>
            <div>
                <SocialLogin></SocialLogin>
            </div>
            <div>
                <FindUs></FindUs>
            </div>
        </div>
    );
};

export default RightNavbar;