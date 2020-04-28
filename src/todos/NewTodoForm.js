import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';

// connect()(NewTodoForm) will return connected version of NewTodoForm

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input type="text"
                className="new-todo-input"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button className="new-todo-button"
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);

                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
            >Create Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});
// state: state that represents entire redux state. mapStateToProp: take the state and 
// return the piece of state that my component needs access to.
const mapDispatchToProps = dispact => ({
    onCreatePressed: text => dispact(createTodo(text))
});
// ditpath: a function that allows our components to trigger actions that our Redux store will response to. Modify the store in 
// accordance to component being interacted
// with this component, this action should be performed
// connect can accept an argument called mapDispatchToProps, 
// which lets you create functions that dispatch when called, and pass those functions as props to your component.

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);