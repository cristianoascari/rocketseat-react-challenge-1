import { TaskItem } from '../../shared/models/task.model';

import './resume.scss';

interface ResumeProps {
  completedTasks: number;
  tasks: TaskItem[];
}

export default function Resume({completedTasks, tasks}: ResumeProps) {
  return (
    <section className="resume">
      <div className='resume__items'>
        <div className='resume__items-created'>
          Tarefas criadas

          <span className='total-counter'>{tasks.length}</span>       
        </div>

        <div className='resume__items-done'>
          Concluídas

          <span className='total-counter'>
            {completedTasks} {tasks.length ? ` de ${tasks.length}` : ''}
          </span>
        </div>
      </div>
    </section>
  );
}