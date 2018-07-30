import React from 'react';
import urls from '../img/hanbao.webp';




class Banner extends React.Component{
	constructor(props){
		super(props)
	}

		
		render(){
			return(
				<div>
					<ul className='ban'>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
						<li>
							<img src={urls} />
							<span> 美食</span>
						</li>
					</ul>
						
						  
						   
						   
						   
						
						
					
				</div>
			)
		}
}



export default Banner;
