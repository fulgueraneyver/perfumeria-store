import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import './header.css'

function Header() {
    return (
        <header className="header">

            <div className="logo-container">
                <img src={logo} alt="logo" style={{ width: 50, height: "auto" }}/>
            </div>

            <div className="cart-icon">
                <FaShoppingCart size={25} />
            </div>

        </header>
    );
}

export default Header;