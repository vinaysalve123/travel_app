import { useNavigate } from "react-router-dom";
import HotelCard from "../../components/HotelCard/HotelCard";
import Navbar from "../../components/Navbar/Navbar";
import { useAlert } from "../../context/alert-context";
import { useAuth } from "../../context/auth-context";
import { useWishlist } from "../../context/wishlist-context";
import "./Wishlist.css"
import Alert from "../../components/Alert/Alert";
import ProfileDropDown from "../../components/ProfileDropDown/ProfileDropDown";
import AuthModal from "../../components/AuthModal/AuthModal";

const Wishlist = ()=>{

    const { wishlist } = useWishlist();
    const { isAuthModalOpen, isDropDownModalOpen } = useAuth();
    const { alert } = useAlert();
    const navigate = useNavigate();

    const handleClickHereClick = () => {
        navigate("/")
    }

    return (
        <>
            <Navbar route="wishlist" />
            <h2 className="heading-2 d-flex justify-center">Your Wishlist</h2>
            {
                wishlist.length > 0 ? <section className="wishlist-page d-flex align-center wrap gap-larger">
                {wishlist &&
                    wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
                </section> : <p className="wishlist-empty d-flex justify-center">Wishlist Empty. &nbsp;<span className="click-here" onClick={handleClickHereClick}>Click here </span> &nbsp; to add to wishlist</p>
            }
            {isDropDownModalOpen && <ProfileDropDown />}
            {isAuthModalOpen && <AuthModal />}
            {alert.open && <Alert />}
        </>
    );
}

export default Wishlist;