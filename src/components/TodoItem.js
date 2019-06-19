
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    /* If write a function this way, it will not have access to the props, need to bind(this) after this.markComplete */
    // markComplete(e){
    //     console.log(this.props);
    // }
    
    /* A better way is to use the arrow function.
    However without state manager, to change a state we cannot do setState but need to climb up the
    tree up through props.
    So we need to have the markComplete as a prop to lift it up to the App(where the complete state is defined), and define 
    it in the App class.
    */
    // markComplete = (e) => {
    //     console.log(this.props);
    // }

    //besides, we need to know which item is being marked 'complete', so we need to bind the ID.

    render() {
        const { id, title } = this.props.todo; //Destructuring
        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={ btnStyle }>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
