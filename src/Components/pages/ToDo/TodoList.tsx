import React, { useState } from "react";
import styles from "./todolist.module.scss";

interface Task {
  id: number;
  content: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskContent, setTaskContent] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskContent, setEditTaskContent] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskContent(e.target.value);
  };

  const handleAddTask = () => {
    if (taskContent.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        content: taskContent,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskContent("");
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId: number) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      setEditTaskId(taskId);
      setEditTaskContent(task.content);
    }
  };

  const handleSaveEditTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editTaskId) {
        return { ...task, content: editTaskContent };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTaskId(null);
    setEditTaskContent("");
  };

  const handleCancelEditTask = () => {
    setEditTaskId(null);
    setEditTaskContent("");
  };

  const handleDeleteTask = (taskId: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "pending") {
      return !task.completed;
    } else if (activeTab === "completed") {
      return task.completed;
    } else {
      return true; // Show all tasks when activeTab is "all"
    }
  });

  return (
    <div className={styles.todoList}>
      <h2>Todo List</h2>
      <div className={styles.addTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskContent}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className={styles.tabs}>
        <button
          className={activeTab === "all" ? styles.active : ""}
          onClick={() => handleTabChange("all")}
        >
          All
        </button>
        <button
          className={activeTab === "pending" ? styles.active : ""}
          onClick={() => handleTabChange("pending")}
        >
          Pending
        </button>
        <button
          className={activeTab === "completed" ? styles.active : ""}
          onClick={() => handleTabChange("completed")}
        >
          Completed
        </button>
      </div>
      <div style={{ marginTop: "30px" }}>
        {filteredTasks.length > 0 ? (
          <ul className={styles.taskList}>
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className={task.completed ? styles.completed : ""}
              >
                {editTaskId === task.id ? (
                  <>
                    <input
                      type="text"
                      value={editTaskContent}
                      onChange={(e) => setEditTaskContent(e.target.value)}
                      className={styles.editInput}
                    />
                    <button
                      onClick={handleSaveEditTask}
                      className={styles.saveButton}
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEditTask}
                      className={styles.cancelButton}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleTaskCompletion(task.id)}
                    />
                    <span>{task.content}</span>
                    <button
                      onClick={() => handleEditTask(task.id)}
                      className={styles.editButton}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
