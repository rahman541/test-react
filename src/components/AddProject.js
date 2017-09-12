import React, { Component } from 'react';

class AddProject extends Component {
	static defaultProps = {
		categories: ['Web design', 'Web Development', 'Mobile Development']
	}

	handleSubmit() {
		console.log('Submitted..');
	}

	render() {
		let categoryOptions = this.props.categories.map(category => {
			return <option key={category} value="category">{category}</option>
		});
		return (
			<div>
				<h3>Add Project</h3>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Title</label>< br/>
						<input type="text" ref="title" />< br/>
					</div>
					<div>
						<label>Category</label>< br/>
						<select ref="category">
							{categoryOptions}
						</select>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default AddProject;
