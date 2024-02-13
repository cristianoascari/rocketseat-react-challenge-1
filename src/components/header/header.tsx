import todoLogo from '/todo.svg';
import  './header.scss';

export default function Header() {
  return (
    <header>
      <img src={todoLogo} className='logo' />
    </header>
  );
}