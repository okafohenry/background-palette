import React from 'react';

const Header = (props) => {
	const header = {
	 	color: `${props.color}`
	 } 
	return(
		<span className="header-wrapper">
			<h2 className="header" style={header}>Background Palette</h2>
			<span className="dodge"></span>
		</span>
	)
}

export default Header;