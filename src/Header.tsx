import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <>
            <header>
                <h1>Yuman Khoufache • CS Student</h1>
                <div className= "nav-buttons">
                    <button className={location.pathname === "/" ? "active" : ""}>Home</button>
                    <button>About me</button>
                    <button>Contact me</button>
                </div>

                <h2>WIP: Description</h2>
            </header>
        </>
    );
}

export default Header;