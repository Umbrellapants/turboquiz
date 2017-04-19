import React from 'react'

export default class Points extends React.Component{
	render(){
		return(
			<div className='pointsBar'>
				<div className='pointsText'>Points:</div>
				<div className='pointsNumbers'>{this.props.score}</div>
			</div>
		);
	}
}