import { FormEvent, useState } from 'react';

import CreateTask from './components/create-task/create-task';
import Header from './components/header/header';
import NoTasks from './components/no-tasks/no-tasks';
import Resume from './components/resume/resume';
import Tasks from './components/tasks/tasks';

import { TaskItem } from './shared/models/task.model';

import './assets/styles/global.scss';
import './App.scss';

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  function handleCreateTask(task: TaskItem) {
    setTasks([...tasks, task]);

    updateCompletedTasks();
  }

  function updateCompletedTasks() {
    const completed = tasks.filter(task => task.completed).length;
    setCompletedTasks(completed);
  }

  function handleToggleTask(id: number) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(newTasks);

    updateCompletedTasks();
  }

  function handleRemoveTask(event: FormEvent, id: number) {
    event.stopPropagation();

    const newTasks = tasks.filter(task => task.id !== id);
      
    setTasks(newTasks);

    const newCompletedTasksCount: number = completedTasks - 1;
    setCompletedTasks(newCompletedTasksCount > 0 ? newCompletedTasksCount : 0);
  }

  return (
    <>
      <Header />

      <main>
        <CreateTask
          onCreateTask={handleCreateTask}
        />

        <Resume
          completedTasks={completedTasks}
          tasks={tasks}
        />

        {!tasks.length && <NoTasks />}

        {tasks.length > 0 && (
          <Tasks
            tasks={tasks}
            onRemoveTask={handleRemoveTask}
            onToggleTask={handleToggleTask}
          />
        )}
      </main>
    </>
  )
}

export default App
