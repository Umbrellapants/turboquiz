import React from 'react'

export default class Multiply extends React.Component{
	render(){
		return(
			<div className='multiply'>
				<div className='multiplyHeader'>Multiplier:</div>
				<div className='multiplyValue'>{this.props.multiply}</div>
			</div>
		);
	}
}