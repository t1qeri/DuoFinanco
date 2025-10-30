import { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/token/', { username, password });
      localStorage.setItem('token', res.data.access);
      onLogin();
    } catch {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="login">
      <h2>Вход</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Войти</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}
