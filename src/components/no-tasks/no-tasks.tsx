import clipboardIcon from '/clipboard.svg';

import './no-tasks.scss';

export default function NoTasks() {
  return (
    <section className="no-tasks">
      <img src={clipboardIcon} />

      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  );
}