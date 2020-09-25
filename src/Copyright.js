import React from 'react'

const Copyright = (props) => {
	const copyright = {
		color: `${props.color}`
	}
	return(
		<div className="copyright">
			<a href="https://github.com/okafohenry"
				target="_blank"
				rel="noopener noreferrer"
			 	style={copyright}>
					<i className="fa fa-github"></i>
			</a>
		</div>
	)
}

export default Copyright;