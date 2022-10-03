import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Todolist from './components/TodoList/Todolist';

const App = () => {
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <Sidebar/>
        <Todolist/>
      </div>
    </div>
  );
}

export default App;
