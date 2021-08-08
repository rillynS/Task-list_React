import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todoItem, index) => {
        return (
          <TodoItem
            completed={todoItem.completed}
            id={todoItem.id}
            title={todoItem.title}
            key={index}
            num={index + 1}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
