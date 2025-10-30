import { useEffect, useState } from 'react';
import API from '../api';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const loadTasks = async () => {
    const res = await API.get('tasks/');
    setTasks(res.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title) return;
    await API.post('tasks/', { title, done: false });
    setTitle('');
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      <h2>Мои задачи</h2>
      <form onSubmit={addTask}>
        <input
          placeholder="Новая задача..."
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => API.patch(`tasks/${t.id}/`, { done: !t.done }).then(loadTasks)}
            />
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
