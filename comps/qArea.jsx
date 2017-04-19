import React from 'react'

export default class QArea extends React.Component{
	render(){
		return(
			<div className='questionArea'>
				<div className='qContent'>
					<div className='qText'>
						{this.props.questions.data[this.props.questionNumber].questText} 
					</div>
					<div className='qImg'>
						<img src={this.props.questions.data[this.props.questionNumber].questImg} />					
					</div>
				</div>
			</div>
		);
	}
}