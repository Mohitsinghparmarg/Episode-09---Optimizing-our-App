import { LOGO_URL } from "../utills/constants";
import { useState,useEffect} from "react";
import { Link} from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";

 const Header = () => {


   const [btnNameReact,setBtnNameReact] = useState("Login");

      const onlineStatus = useOnlineStatus();
  
    useEffect(() => {
       console.log("useEffect is called");
    },[btnNameReact]);


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
               Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button className="login"
              onClick={() =>{
                btnNameReact === "Login"? 
                setBtnNameReact("Logout"):
                setBtnNameReact("Login");
                  
              }}
              >
              {btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;

