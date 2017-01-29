import React, { Component } from 'react';

class PreviewWindow extends Component {
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
			<div className="preview-window">
				<textarea readOnly value={this.props.value} onChange={this.handleChange} />
			</div>
		);
	}
}

export default PreviewWindow;