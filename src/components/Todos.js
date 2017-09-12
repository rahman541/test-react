import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

	render() {
		let todosItems;
		if (this.props.todos) {
			todosItems = this.props.todos.map(todo => {
				return (
					<TodoItem key={todo.title} todo={todo} />
				);
			});
		}
		return (
			<div className="Todos">
				<h3>Todo List</h3>
				{todosItems}
			</div>
		);
	}
}

Todos.propTypes = {
	todos: React.PropTypes.array,
}

export default Todos;
