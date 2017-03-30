import React from 'react'

export default class AArea extends React.Component{
	render(){
		return(
			<div className='startpage'>
				<div id='introText'>TURBOQUIZ!</div>
				<div 
					id='startButton'
					onClick={this.props.handleStartClick.bind(this)}>
					START!
				</div>
				<div id='startGameCountDown'></div>
				<div id='subText' className='hide'>GAME STARTING! GET READY!!!</div>
			</div>
		);
	}
}