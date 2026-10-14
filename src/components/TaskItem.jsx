
function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />

        <span>{task.title}</span>
      </label>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDeleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
