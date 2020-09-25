import React, {useState} from 'react';
import Header from './Header';
import BackgroundImage from './BackgroundImage';
import Copyright from './Copyright';

import './App.css';


const App = () => { 
	
	const [color, setColor] = useState("#fff");

	const handleChange = event => {
		let color = event.target.value;
		setColor(color);
	}

	 const app = { 
	 	position:`fixed`,
	    top:`0px`,
	    bottom:`0px`,
	    left:`0px`,
	    right:`0px`,
	 	background:`${color}`
	 } 	
	 

	  return (
	    <div className="app" style={app}>
	    	<div className="display" >
	    		<Header color={color} />
		    	<input type="text" 
		    		className="color-input"
		    		placeholder="change background color"
		    		onChange={handleChange} />
		    	<Copyright color={color} />
		    	<BackgroundImage />
	    	</div>      
	    </div>
	  );
}


export default App;
