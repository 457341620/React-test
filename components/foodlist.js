import React from 'react'
import '../css/style.css'
import picurl from '../img/logo1.png' 
import picur2 from '../img/logo2.png' 


class Foodlist extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<section class="wqj_section">
					<img src={picurl}/>
					<article>
						<h4>米多面多(中原新城店)</h4>
						<p class="wqj_p">月售6148单</p>
						<p class="wqj_p">¥20起送 | 配送费 ¥3.18 &nbsp;&nbsp;&nbsp;&nbsp;2.19km | 29分钟</p>
						<p class="wqj_p">新用户下单立减17元</p>
						<p class="wqj_p">满25减13,满50减23</p>
					</article>
				</section>
				<section class="wqj_section">
					<img src={picur2}/>
					<article>
						<h4>华莱士(锦绣城店)</h4>
						<p class="wqj_p">月售6148单</p>
						<p class="wqj_p">¥20起送 | 配送费 ¥3.18 &nbsp;&nbsp;&nbsp;&nbsp;2.19km | 29分钟</p>
						<p class="wqj_p">新用户下单立减17元</p>
						<p class="wqj_p">满25减13,满50减23</p>
					</article>
				</section>
				
				<section class="wqj_section">
					<img src={picurl}/>
					<article>
						<h4>米多面多(中原新城店)</h4>
						<p class="wqj_p">月售6148单</p>
						<p class="wqj_p">¥20起送 | 配送费 ¥3.18 &nbsp;&nbsp;&nbsp;&nbsp;2.19km | 29分钟</p>
						<p class="wqj_p">新用户下单立减17元</p>
						<p class="wqj_p">满25减13,满50减23</p>
					</article>
				</section>
				
				
				
			</div>
		)
	}
}


export default Foodlist