import CheckBox from "../checkbox/CheckBox";
import styles from "./Task.module.scss";
import CrossIcon from "../icons/CrossIcon";

// eslint-disable-next-line react/prop-types
const Task = ({ task, onChange, deleteTask }) => {
  console.log(task);

  return (
    <li
      className={
        task.checked ? `${styles.task} ${styles.checked}` : styles.task
      }
    >
      <CheckBox
        className1={task.checked ? "transparent-bg" : ""}
        className2={styles.taskCheckbox}
        onChange={() => onChange(task.id)}
        checked={task.checked}
      />
      {task.title}
      <button className={styles.deleteBtn} onClick={() => deleteTask(task.id)}>
        <CrossIcon />
      </button>
    </li>
  );
};

export default Task;
