import React from 'react'
import Timer from './comps/timer.jsx'
import Multiplyer from './comps/multiply.jsx'
import Points from './comps/points.jsx'
import QArea from './comps/qArea.jsx'
import AArea from './comps/aArea.jsx'
import Startpage from './comps/startpage.jsx'

export default class App extends React.Component{
	render(){
		if(this.props.renderStatus){
			return (
				<div id='appContent'>
					<Startpage 
						handleStartClick={this.props.handleStartClick.bind(this)}
					/>
				</div>
			);
		}
		else{
			return(
				<div id='appContent'>
					<Timer />
					<Points />
					<Multiplyer />
					<QArea />
					<AArea />
				</div>
			);
		}
	}
}