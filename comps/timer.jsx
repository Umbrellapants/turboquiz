import React from 'react'

export default class Timer extends React.Component{
	render(){
		return(
			<div className='timer'>
				<div className='timerText'>Time Left:</div>
				<div className='timerNumber'>3</div>
			</div>
		)
	}
}