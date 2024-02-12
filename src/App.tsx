import CreateTask from './components/create-task/create-task';
import Header from './components/header/header';

import './assets/styles/global.scss';
import  './App.scss';

function App() {
  return (
    <>
      <Header />

      <main>
        <CreateTask />
      </main>
    </>
  )
}

export default App
