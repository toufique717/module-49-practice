import { NavLink } from "react-router-dom";

 

const Navbar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <br/>
            <NavLink to="/contacts">Contacts</NavLink>

            <br/>
            <NavLink to="/login">login</NavLink>
        </div>
    );
};

export default Navbar;