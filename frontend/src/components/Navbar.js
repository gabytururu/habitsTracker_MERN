import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbarInnerContainer">
                <div className="logo-container">
                    <Link to="/">LOGO</Link>
                </div>
                <div className="links-container">
                    <Link to="/">Home</Link>
                    <Link to="/create">Create Habits</Link>
                    <Link to="/reports">See reports</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;