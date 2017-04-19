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
						startCount={this.props.startCount}
						handleStartClick={this.props.handleStartClick.bind(this)}
					/>
				</div>
			);
		}
		else{
			return(
				<div id='appContent'>
					<Timer gameCounter={this.props.gameCounter}/>
					<Points score={this.props.score} multiply={this.props.multiply}/>
					<Multiplyer multiply={this.props.multiply} />
					<QArea 
						questions={this.props.questions} 
						questionNumber={this.props.questionNumber}
					/>
					<AArea 
						questionClick={this.props.questionClick.bind(this)}
						questions={this.props.questions} 
						questionNumber={this.props.questionNumber}						
					/>
				</div>
			);
		}
	}
}