import React, { Component } from 'react';

class EditWindow extends Component {
	constructor(props) {
		super(props);

		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
			<div className="edit-window">
				<textarea value={this.state.value} onChange={this.handleChange} />
				<p>{this.state.value}</p>
			</div>
		);
	}
}

export default EditWindow;