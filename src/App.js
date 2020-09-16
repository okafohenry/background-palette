import React, {useState} from 'react';
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
	 const header = {
	 	color: `${color}`
	 } 

	  return (
	    <div className="app" style={app}>
	    	<div className="display" >
		    	<h2 style={header} 
		    		className="header">BackGround Palette</h2>
		    	<input type="text" 
		    		className="color-input"
		    		placeholder="change background color"
		    		onChange={handleChange} />
	    	</div>      
	    </div>
	  );
}


export default App;
