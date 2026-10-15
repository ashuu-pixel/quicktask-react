
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import "./App.css";

const STORAGE_KEY = "quicktask-tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="app-container">
      <header className="app-header">
        <p className="eyebrow">YOUR DAILY PRODUCTIVITY SPACE</p>
        <h1>QuickTask<span>.</span></h1>
        <p className="subtitle">Small steps. Big progress.</p>
      </header>

      <section className="task-card">
        <TaskForm onAddTask={addTask} />

        <div className="task-summary">
          <span>{tasks.length} total tasks</span>
          <span>{completedCount} completed</span>
        </div>

        
<FilterBar
  filter={filter}
  setFilter={setFilter}
  counts={{
    all: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  }}
/>


        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </section>

      <footer className="app-footer">
        Built with React and a little focus.
      </footer>
    </main>
  );
}

export default App;
