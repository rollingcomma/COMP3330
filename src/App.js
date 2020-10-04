import React, {useEffect, useState} from 'react';
import './App.css';
import { Todo, Form, FilterButton } from "./components/TodoComponents";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');
  
  const toggleTaskCompleted = id => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  const deleteTask = id => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const clearTaskList = () => {
    setTasks(null);
    localStorage.clear();
  }
  const taskList = tasks? 
    tasks
    .filter(task => FILTER_MAP[filter](task))
    .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
    ))
    : 
    null;

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name} 
      isPressed={name === filter}
      setFilter={setFilter}/>
  ));

  useEffect(()=>{
    const data = localStorage.getItem('taskList');
    if(data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(()=>{
    if(tasks) {
      localStorage.setItem('taskList', JSON.stringify(tasks));
    }
  });
  
  const headingText = taskList?`${ taskList.length} ${taskList.length === 1 ? "task" : "tasks"} remaining`:'No task, add some...';

  const addTask = (name) => {
    const task = { id: `todo-${tasks?tasks.length:0}`, name: name, completed: false };
    const newTasks = tasks?[...tasks, task]:[task];
    setTasks(newTasks);
  }

  
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <button type="button"
        className="btn" onClick={clearTaskList}>Clear Tasks</button>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        //role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList && taskList}
      </ul>
    </div>
  );
}

export default App;
