import Task from "../task/Task";
import styles from "./Tasks.module.scss";

// eslint-disable-next-line react/prop-types
const Tasks = ({ tasks, onChange, deleteTask }) => {
  console.log(tasks);

  return (
    <ul className={styles.tasksContainer}>
      {tasks.length === 0 ? (
        <h3 className={styles.message}>
          No Tasks Yet? 🤔 Let’s Change That! ✔
        </h3>
      ) : (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onChange={onChange}
              deleteTask={deleteTask}
            />
          );
        })
      )}
    </ul>
  );
};

export default Tasks;
