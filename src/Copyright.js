import React from 'react'

const Copyright = (props) => {
	const copyright = {
		color: `${props.color}`
	}
	return(
		<div className="copyright">
			<a href="https://github.com/okafohenry" style={copyright}>@Okafohenrie</a>
		</div>
	)
}

export default Copyright;