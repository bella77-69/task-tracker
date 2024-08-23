import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Task } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-grey shadow-md rounded-lg">
    <h1 className="text-2xl font-bold mb-4 text-center">Task Tracker</h1>
    <AddTask addTask={addTask} />
    <TaskList tasks={tasks} deleteTask={deleteTask} />
  </div>
  );
};

export default App;