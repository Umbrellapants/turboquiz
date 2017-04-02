import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.less'
import Content from './content.jsx'

export default class App extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
    	stopTime:false,
    	gameCounter: 3000, 
    	firstRender:true,
    	countDownStart:3,
    	startCount:false,
    	score:0,
    	multiplyChecker:1,
    	multiply:1,
    	qisTrue:true,
    	qisFalse:true,
    };
  }
  branchChange(){
  	this.setState({
  		stopTime:true
  	})
  }
  questionChange(){

  }
  questionClickHandler(answerId){
  	this.setState({
  		stopTime:true,
  		score:this.state.score += this.state.gameCounter,
  		gameCounter:3000,
  		stopTime:false
  	});
  	if(this.state.qisTrue){
	   	this.setState({
	  		score:this.state.score += this.state.gameCounter,
	  		gameCounter:3000,
	  		multiplyChecker:this.state.multiplyChecker +1,
	  		stopTime:false
	  	});
	  	if(this.state.multiplyChecker % 3 == 0 && this.state.multiplyChecker != 1){
	  		this.setState({
	  			multiply: this.state.multiply +1
	  		})
	  	}
  	}
  	else{
  	 	this.setState({
	  		gameCounter:3000,
	  		stopTime:false
	  	});	
  	}
  }
  countDownHandler(){
		var gameInterval = setInterval(function(){
	    if(this.state.stopTime == true){
				clearInterval(gameInterval);
			}
			else{
	      this.setState({
	  			gameCounter:this.state.gameCounter -8
		    });
		    if(this.state.gameCounter < 0){
					console.log('too slow');
					this.branchChange();
		    }
		  }
    }.bind(this),10);      	
  }
  handleStartClick(){
   document.getElementById('subText').classList.remove('hide');
   document.getElementById('startButton').classList.add('hide');
    var startInterVal = setInterval(function(){
      this.setState({
  			countDownStart:this.state.countDownStart -1
	    });
	    if(this.state.countDownStart < 0){
	      this.setState({
	  			firstRender:false
		    });	    	
	    clearInterval(startInterVal);
	    this.countDownHandler();
	    }
    }.bind(this),1000);
  }
	render(){
		return(
			<div id='turboQuiz'>
				<Content
					multiply={this.state.multiply}
					score={this.state.score}
					questionClick={this.questionClickHandler.bind(this)}
					startCount={this.state.countDownStart}
					gameCounter={this.state.gameCounter} 
					renderStatus={this.state.firstRender}
					handleStartClick={this.handleStartClick.bind(this)}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));