import React from 'react'
import  Foodlist from './foodlist'
import  Sous from './sous'
import  Banner from './banner'


class App extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return(
			<div>
                <Banner/>
				<h1>hello webpack</h1>
                <Sous/>
				<Foodlist/>
			</div>
		)
	}
}


		

export default App;