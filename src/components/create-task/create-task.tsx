import { FormEvent, useState } from "react";

import { CgAdd } from "react-icons/cg";

import { TaskItem } from "../../shared/models/task.model";

import './create-task.scss';

interface CreateTaskProps {
  onCreateTask: (task: TaskItem) => void;
}

export default function CreateTask({ onCreateTask}: CreateTaskProps) {
  const [taskDescription, setTaskDescription] = useState('');

  function createTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskDescription) {
      onCreateTask({
        id: new Date().getTime(),
        description: taskDescription,
        completed: false,
      });

      setTaskDescription('');
      document.getElementById('taskDescriptionField')?.focus();
    }
  }

  function updateTaskDescription(event: FormEvent<HTMLInputElement>) {
    setTaskDescription(event.currentTarget.value);
  }

  return (
    <div className="create-task">
      <form onSubmit={createTask}>
        <input
          id="taskDescriptionField"
          name="taskDescriptionField"
          onChange={updateTaskDescription}
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={taskDescription}
        />

        <button type="submit" disabled={!taskDescription}>
          Criar
          <CgAdd />
        </button>
      </form>
    </div>
  );
}