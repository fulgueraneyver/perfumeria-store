import logo from "../assets/logo.jpeg";
import './heroBanner.css'

function HeroBanner() {
    return (
        <div className="hero-banner">
            <img src={logo} alt="logo" className="hero-logo"/>
        </div>
    );
}

export default HeroBanner;