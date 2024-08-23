import React from "react";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask }) => {
  return (
    <div className="bg-gray-100 p-4 mb-2 rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <p className="text-gray-600">{task.date}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
