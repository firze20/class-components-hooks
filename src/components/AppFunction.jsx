import React, { useState } from "react";
import NewTask from "./NewTask";
import TasksList from "./TaskLists";

export default function AppFunction() {
  // hook your code up here ;)
  const [taskState, setTaskState] = useState({
    task: {},
    tasks: [],
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setTaskState((prevState) => ({
      ...prevState,
      task: {
        ...prevState.task,
        [name]: value,
        id: Date.now(),
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!taskState.task.title) return;
    setTaskState((prevState) => ({
      tasks: [prevState.task, ...prevState.tasks],
      task: {}
    }))
  };

  const handleDelete = (taskIdToRemove) => {
    setTaskState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== taskIdToRemove)
    })); 
  };

  return (
    <main>
      <h1>Tasks</h1>
      <NewTask
        newTask={taskState.task}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={taskState.tasks} handleDelete={handleDelete} />
    </main>
  );
}
