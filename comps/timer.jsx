import React from 'react'

export default class Timer extends React.Component{
	timeValue(){
		var timerValue = this.props.gameCounter;
		var x = timerValue.toString();
		if(x.length > 3){
			var format = x.slice(0, 1) + "." + x.slice(1,3);			
		}
		else{
			var format = "0." + x.slice(0,2);
		}
		return format;
	}
	render(){
		return(
			<div className='timer'>
				<div className='timerText'>Time Left:</div>
				<div className='timerNumber'>{this.timeValue()}</div>
			</div>
		)
	}
}