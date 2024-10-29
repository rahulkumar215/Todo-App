import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./componenets/header/Header";
import useLocalStorage from "use-local-storage";
import InputTask from "./componenets/inputtask/InputTask";
import Tasks from "./componenets/tasks/Tasks";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("isDark", false);
  const [tasks, setTasks] = useState([]);
  const [tasksCopy, setTasksCopy] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const pendingTasks = tasks.reduce((prev, cur) => {
    if (!cur.checked) {
      prev++;
    }
    return prev;
  }, 0);

  useEffect(
    function () {
      document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
    },
    [isDarkTheme]
  );

  useEffect(
    function () {
      setTasksCopy(tasks);
    },
    [tasks]
  );

  function handleAddTask(obj) {
    setTasks((prev) => [obj, ...prev]);
  }

  function handleComplete(id) {
    console.log(id);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function deleteTask(id) {
    const leftTasks = tasks.filter((task) => task.id !== id);
    setTasks(leftTasks);
  }

  function clearCompleted() {
    const pendingTasks = tasks.filter((task) => task.checked !== true);
    setTasks(pendingTasks);
  }

  return (
    <div>
      <div className="background__image">&nbsp;</div>
      <main className="container">
        <Header
          theme={isDarkTheme}
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        />
        <InputTask addTask={handleAddTask} />
        <Tasks
          tasks={tasksCopy}
          onChange={handleComplete}
          deleteTask={deleteTask}
        />
        <div className="tot-items">
          <p>{pendingTasks} items left</p>
        </div>
        <div className="btn-group">
          <button
            className={filterType === "All" ? "btn btn-acitve" : "btn"}
            onClick={() => {
              setFilterType("All");
              setTasksCopy(tasks);
            }}
          >
            All
          </button>
          <button
            className={filterType === "Active" ? "btn btn-acitve" : "btn"}
            onClick={() => {
              setFilterType("Active");
              setTasksCopy(tasks.filter((task) => task.checked === false));
            }}
          >
            Active
          </button>
          <button
            className={filterType === "Completed" ? "btn btn-acitve" : "btn"}
            onClick={() => {
              setFilterType("Completed");
              setTasksCopy(tasks.filter((task) => task.checked === true));
            }}
          >
            Completed
          </button>
        </div>
        <button className="clear-btn" onClick={clearCompleted}>
          Clear Completed
        </button>
      </main>
    </div>
  );
}

export default App;
