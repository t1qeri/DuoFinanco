import { useState } from 'react';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', textAlign: 'center' }}>
      <h1>Hackathon Tasks</h1>
      {loggedIn ? (
        <>
          <TaskList />
          <button onClick={handleLogout}>Выйти</button>
        </>
      ) : (
        <LoginForm onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
