import { FaShoppingCart } from "react-icons/fa";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                ARIAS STORE
            </div>

            <FaShoppingCart size={25} />
        </header>
    );
}

export default Header;