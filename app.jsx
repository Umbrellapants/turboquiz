import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.less'
import Content from './content.jsx'

export default class App extends React.Component{
	constructor(props) {
    super(props);
    this.state = { 
    	firstRender:true
    };
  }
  handleStartClick(){
  	this.setState({
  		firstRender:false
  	})
  }
	render(){
		return(
			<div id='turboQuiz'>
				<Content 
					renderStatus={this.state.firstRender}
					handleStartClick={this.handleStartClick.bind(this)}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));