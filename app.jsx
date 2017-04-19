import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.less'
import Content from './content.jsx'
import axios from 'axios'

export default class App extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
    	quizId:1,
    	stopTime:false,	// control timers
    	gameCounter: 3000, // time 
    	firstRender:true, // check to render startpage or gamearea
    	countDownStart:3,	// number to count down from
    	startCount:false,	// checks if startpage should start counting down
    	questionNumber:0, // what question are we on?
    	score:0,	// score
    	multiplyChecker:1, // checking if multiply should increase
    	multiply:1, // multiplier
    	branchNumber: 0, // what branch are we currently on?
    	branch:[],	// Holds the shuffled branches
    	qisTrue:true, // ***DEBUGGER*** if answers are true 
    	qisFalse:true, // ****DEBUGGER **** if answers are false
    	questions:[] // the fetched data from questions
    };
  }
  componentWillMount() {
  	this.fetchBranches();
  }
  branchChange(){
	  this.setState({
			stopTime:true,
			gameCounter:3000,
			stopTime:false
		});
		this.fetchQuestions(this.state.branchNumber +1);
  }
  shuffleArray(array){
		var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  this.setState({
	  	branch: array
	  });
  }
  fetchBranches(){
		axios.get('./dbStuff/fetchBranches.php?quizId='+this.state.quizId,{
    	dataType: 'json'})
   	.then(data =>{
   		this.shuffleArray(data.data);
     	//console.log(data);
	  });  	
  }
  fetchQuestions(plusBranch){
  	console.log('**plusBranch**');
  	console.log(plusBranch);

  	console.log('**branchNumber**');
  	console.log(this.state.branchNumber);

  	axios.get('./dbStuff/questions.php?quizId='+this.state.quizId+'&branch='+this.state.branch[plusBranch],{
    	dataType: 'json'})
   	.then(data =>{
   		this.setState({
   			questionNumber:0,
   			branchNumber:plusBranch,
   			questions: data
   		})
   		console.log('**answer**');
    	console.log(data.data[0].answer);
	  });	  
  }
  questionClickHandler(answerId){
  	this.setState({
  		stopTime:true,
  		gameCounter:3000,
  		stopTime:false
  	});
  	if(this.state.questions.data[this.state.questionNumber].answer == answerId){
  		console.log('THIS WAS THE RIGHT ANSWER!');
			if(this.state.multiplyChecker % 3 == 0 && this.state.multiplyChecker != 1){
				var multi = this.state.multiply +1;
			}
			else{
				var multi = this.state.multiply;
			}	   	
	   	this.setState({
	  		questionNumber:this.state.questionNumber +1,
	  		score:this.state.score += (this.state.gameCounter * this.state.multiply) / 10,
	  		gameCounter:3000,
	  		multiplyChecker:this.state.multiplyChecker +1,
	  		multiply: multi,
	  		stopTime:false
	  	});
  	}
  	else{
  		console.log('THIS WAS THE WRONG ANSWER!');
			this.branchChange();
  	}
  	console.log(this.state.questions.data[this.state.questionNumber].answer);
  	console.log(answerId);
  }
  countDownHandler(){
/*	  console.log('********');
	  console.log(this.state.questions);
	  console.log('********');*/
		var gameInterval = setInterval(function(){
	    if(this.state.stopTime == true){
				clearInterval(gameInterval);
			}
			else{
	      this.setState({
	  			gameCounter:this.state.gameCounter -8
		    });
		    if(this.state.gameCounter <= 0){
					console.log('too slow');
					this.branchChange();
		    }
		  }
    }.bind(this),10);      	
  }
  handleStartClick(){
   document.getElementById('subText').classList.remove('hide');
   document.getElementById('startButton').classList.add('hide');
   this.fetchQuestions(this.state.branchNumber); // fetches questions
    var startInterVal = setInterval(function(){ // starts the countdown for gamestart
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
					questionNumber={this.state.questionNumber}
					multiply={this.state.multiply}
					score={this.state.score}
					questionClick={this.questionClickHandler.bind(this)}
					startCount={this.state.countDownStart}
					gameCounter={this.state.gameCounter} 
					renderStatus={this.state.firstRender}
					handleStartClick={this.handleStartClick.bind(this)}
					questions={this.state.questions}
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));