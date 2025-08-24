
import "./Navbar.css";
import { useDate } from '../../context/date-context';
import { useAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';

const Navbar = ({route}) => {
    
    const {destination, dateDispatch, checkInDate, checkOutDate, guests} = useDate();
    const {name, accessToken, authDispatch} = useAuth();
    
    const handleSearchClick=()=>{
        dateDispatch({
            type: "OPEN_SEARCH_MODAL",
        })
    }

    const handleAuthClick=()=>{
        if (accessToken) {
            authDispatch({
                type: "SHOW_DROP_DOWN_OPTIONS"
            })
        } else {
            authDispatch({
                type: "SHOW_AUTH_MODAL",
            });
        }
    }
  
    return (
    <>
        <header className="heading d-flex align-center">            
            <h1 className="heading-1">
                <Link className="link" to="/">TravelOP</Link>
            </h1>
            {
                route !== "wishlist" && <div
                className="form-container d-flex align-center cursor-pointer shadow"
                onClick={handleSearchClick}
            >
                <span className="form-option">{route === "home" ? "Any Where" : (destination || "Any Where")}</span>
                <span className="border-right-1px"></span>
                <span className="form-option">
                {checkInDate && checkOutDate && route !== "home"
                    ? `${checkInDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    })} - ${checkOutDate.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    })}`
                    : "Any Week"}
                </span>
                <span className="border-right-1px"></span>
                <span className="form-option">
                {route !== "home" && guests > 0 ? `${guests} guests` : "Add Guests"}
                </span>
                <span className="search material-icons-outlined">search</span>
            </div>
            }
            {/* <div className="form-container d-flex align-center cursor-pointer shadow" onClick={handleSearchClick}>
                <span className='form-option'>{destination || "Any Where"}</span>
                <span className='border-right-1px'></span>
                <span className='form-option'>
                    {
                        checkInDate && checkOutDate ?
                            `${checkInDate.toLocaleDateString("en-US", {day: "numeric", month: "short"})}
                             - ${checkOutDate.toLocaleDateString("en-US", {day: "numeric", month: "short"})}`
                        :
                            "Any Week"
                    }
                </span>
                <span className='border-right-1px'></span>
                <span className='form-option'>{ guests>0 ? `${guests} guests` : "Add Guests"}</span>
                <span className='material-icons-outlined search'>search</span>
            </div> */}
            <nav className="d-flex align-center gap-large" onClick={handleAuthClick}>
                {/* 👇 Add this section to display username */}
                {accessToken && name && (
                    <span className="user-name">Hi, <strong>{name}</strong></span>
                )}
                <div className="nav d-flex align-center cursor-pointer">
                    <span className='material-icons-outlined profile-option menu'>menu</span>
                    <span className='material-icons-outlined profile-option person'>person_2</span>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar;
