import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.less'
import Content from './content.jsx'

export default class App extends React.Component{
	constructor(props) {
    super(props);
    this.state = { 
    	firstRender:true,
    	countDownStart:2,
    	startCount:false
    };
  }
  handleStartInterval(){

  }
  handleAnswerClick(){

  }
  handleStartClick(){
   document.getElementById('subText').classList.remove('hide');
   document.getElementById('startButton').classList.add('hide');
   document.getElementById('startGameCountDown').innerHTML = 3;
    var startInterVal = setInterval(function(){
    	document.getElementById('startGameCountDown').innerHTML = this.state.countDownStart;
      this.setState({
  			countDownStart:this.state.countDownStart -1
	    });
	    if(this.state.countDownStart < 0){
	      this.setState({
	  			firstRender:false
		    });	    	
	    clearInterval(startInterVal);
	    }
    }.bind(this),1000);
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