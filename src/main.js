import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EditWindow from './components/EditWindow';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<EditWindow />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('container'));