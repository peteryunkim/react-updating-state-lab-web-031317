import React from 'react'

class DigitalClicker extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			timesClicked: 0
		}
	}

	click(){
		this.setState({
			timesClicked: this.state.timesClicked += 1
		})
	}

	render(){
		return (
			<div>
				<button onClick={this.click.bind(this)}>{this.state.timesClicked}</button>
			</div>
		)
	}
}

export default DigitalClicker
