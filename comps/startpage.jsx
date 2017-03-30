import React from 'react'

export default class AArea extends React.Component{
	render(){
		return(
			<div className='startpage'>
				<div 
					className='startButton'
					onClick={this.props.handleStartClick.bind(this)}>
					START!
				</div>
			</div>
		);
	}
}