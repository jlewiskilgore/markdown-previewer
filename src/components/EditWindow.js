import React, { Component } from 'react';
import marked from 'marked'

class EditWindow extends Component {
	constructor(props) {
		super(props);
		var startingValue = "# This is a title\n\n### This is a subtitle\n\nYou can make text **bold** or _italicized_ to give more emphasis.\n\n\nLists can be 'Ordered':\n\n1. test 1\n2. test 2\n3. test 3\n\n...or 'Unordered':\n\n* another test 1\n* another test 2\n* another test 3\n\n[You can see the source code for this Markdown Previewer at my Github](https://github.com/jlewiskilgore/markdown-previewer)";

		this.state = { value: startingValue, markedValue: marked(startingValue) };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		this.setState({markedValue: marked(event.target.value)});
	}

	render() {
		return (
			<div className="markdown-previewer">
				<textarea id="edit-window" value={this.state.value} onChange={this.handleChange} />
				<div id="preview-window" dangerouslySetInnerHTML={{__html: this.state.markedValue }} />
			</div>
		);
	}
}

export default EditWindow;