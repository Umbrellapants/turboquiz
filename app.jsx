import React from 'react'
import ReactDOM from 'react-dom'
import style from './style.less'
import Timer from './comps/timer.jsx'
import Multiplyer from './comps/multiply.jsx'
import Points from './comps/points.jsx'

export default class App extends React.Component{
	render(){
		return(
			<div id='appContent'>
				<Timer />
				<Points />
				<Multiplyer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));