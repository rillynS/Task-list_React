import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../Context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    border: "2px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",

  },
  input: {
    marginRight: "1rem",
  },
};

function TodoItem({ id, title, onChange, completed, num }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={completed}
          style={styles.input}
          onChange={() => onChange(id)}
        />
        <strong>{num} </strong>
        {title}
      </span>

      <button className="btn-close" onClick={() => removeTodo(id)}>
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
