import { useState } from "react";
import CheckBox from "../checkbox/CheckBox";
import styles from "./InputTask.module.scss";
import uniqid from "uniqid";

// eslint-disable-next-line react/prop-types
const InputTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (task.toString().trim().length === 0) return;

    const id = uniqid();
    addTask({
      id,
      title: task,
      checked: false,
    });
    setTask("");
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <CheckBox
        className1="checkbox"
        className2="checkmark-bg"
        disabled={true}
      />
      <input
        type="text"
        placeholder="Create a new todo..."
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
    </form>
  );
};

export default InputTask;
