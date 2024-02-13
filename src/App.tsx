import { useState } from 'react';

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

  function handleCreateTask(task: TaskItem) {
    setTasks([...tasks, task]);
  }

  /*function handleToggleTask(id: number) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }*/

  return (
    <>
      <Header />

      <main>
        <CreateTask
          onCreateTask={handleCreateTask}
        />

        <Resume />

        {!tasks.length && <NoTasks />}

        {tasks.length > 0 && <Tasks />}
      </main>
    </>
  )
}

export default App
