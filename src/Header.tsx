import { useLocation, Link } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <>
            <header>
                <h1>Yuman Khoufache • CS Student</h1>
                <div className= "nav-buttons">
                    <Link to= '/'>
                        <button className={location.pathname === "/" ? "active" : ""}>Home</button>
                    </Link>
                    <Link to= '/AboutMe'>
                        <button className={location.pathname === "/AboutMe" ? "active" : ""}>About me</button>
                    </Link>
                    <Link to= '/ContactMe'>
                        <button className={location.pathname === "/ContactMe" ? "active" : ""}>Contact me</button>
                    </Link>
                </div>
                <h2>WIP: Description</h2>
            </header>
        </>
    );
}

export default Header;