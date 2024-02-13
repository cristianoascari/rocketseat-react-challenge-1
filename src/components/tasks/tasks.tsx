import { CgTrash } from "react-icons/cg";

import { TaskItem } from '../../shared/models/task.model';

import './tasks.scss';

interface TasksProps {
  tasks: TaskItem[];
  onToggleTask: (taskId:  number) => void;
  onRemoveTask: (taskId:  number) => void;

}

export default function Tasks({tasks, onToggleTask, onRemoveTask}: TasksProps) {
  return (
    <section className="tasks">
      {tasks.map(task => {
        return (
          <div key={task.id} className="task">
            <div className="task-item">
              <input
                checked={task.completed}
                id={`task-${task.id}`}
                onChange={() => onToggleTask(task.id)}
                type="checkbox"
              />

              <label htmlFor={`task-${task.id}`} className={task.completed  ?  'completed' : ''}>
                <span>{task.description}</span>
              </label>
            </div>

            <button onClick={() => onRemoveTask(task.id)}>
              <CgTrash />
            </button>
          </div>
        );
      })}
    </section>
  );
}