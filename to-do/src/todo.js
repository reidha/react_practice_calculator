import React from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            name: ''
        };
    }

    onInput = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    addTodo = () => {
        const { todos, name } = this.state;
        if (name === '') return;
        this.setState({
            todos: [...todos, name]
        });
    }

    removeTodo = index => {
        const { todos, name } = this.state;
        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    }

    render() {
        const { todos } = this.state;

        return (
            <div>
                <input type="text" onInput={this.onInput}/>
                <button onClick={this.addTodo}>Save</button>
                <ul>
                    {todos.map((todo, index) => <li key={index}>
                        {todo}
                        <button onClick={() => this.removeTodo(index)}>Delete</button>
                    </li>)}
                </ul>
            </div>
        );
    }
}
