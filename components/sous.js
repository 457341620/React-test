
import React from 'react'
import urls from '../img/veer-103986923.jpg'

class Sous extends React.Component{
	
	constructor(props){
		super(props)
	}
	
	tap(){
		console.log("qqq")
	}
	
	render(){
		
		return(	
			
			<div>	
				<h1 className="tit">hello suo</h1>
				<hr/>
				<button onClick={this.tap}>点击</button>
				<img src={urls}/>
			</div>	
		)
	}
	
	
	
}
export default Sous;