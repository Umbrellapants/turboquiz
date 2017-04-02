import React from 'react'

export default class AArea extends React.Component{
	render(){
		return(
			<div className='aArea'>
				<div className='aButton' onClick={this.props.questionClick.bind(this, 'a1')}>a1</div>
				<div className='aButton' onClick={this.props.questionClick.bind(this, 'a2')}>a2</div>
				<div className='aButton' onClick={this.props.questionClick.bind(this, 'a3')}>a3</div>
				<div className='aButton' onClick={this.props.questionClick.bind(this, 'a4')}>a4</div>
			</div>
		);
	}
}