import React from 'react'

export default class AArea extends React.Component{
	render(){
		return(
			<div className='aArea'>
				<div 
					className='aButton' 
					onClick={this.props.questionClick.bind(this, this.props.questions.data[this.props.questionNumber].quests.a1)}>{this.props.questions.data[this.props.questionNumber].quests.a1}</div>
				<div 
					className='aButton' 
					onClick={this.props.questionClick.bind(this, this.props.questions.data[this.props.questionNumber].quests.a2)}>{this.props.questions.data[this.props.questionNumber].quests.a2}</div>
				<div 
					className='aButton' 
					onClick={this.props.questionClick.bind(this, this.props.questions.data[this.props.questionNumber].quests.a3)}>{this.props.questions.data[this.props.questionNumber].quests.a3}</div>
				<div 
					className='aButton' 
					onClick={this.props.questionClick.bind(this, this.props.questions.data[this.props.questionNumber].quests.a4)}>{this.props.questions.data[this.props.questionNumber].quests.a4}</div>
			</div>
		);
	}
}