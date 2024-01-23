import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className='header fixed top-0 z-50 w-[100%]'>
			<img src={logo} alt='' />
			<div>
				<Link to='/'>Shop</Link>
				<Link to='/orders'>Orders</Link>
				{/* <Link to='/inventory'>Inventory</Link>
				<Link to='/login'>Login</Link> */}
			</div>
		</nav>
	);
};

export default Header;
