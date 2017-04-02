import React from 'react'

export default class Points extends React.Component{
	scoreValue(){
		var score = (this.props.score / 10) * this.props.multiply;
		return score;
	}
	render(){
		return(
			<div className='pointsBar'>
				<div className='pointsText'>Points:</div>
				<div className='pointsNumbers'>{this.scoreValue()}</div>
			</div>
		);
	}
}