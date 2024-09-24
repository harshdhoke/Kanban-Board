// /src/App.js
import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import { fetchTasksAndUsers } from './api/tasksApi';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const { tickets, users } = await fetchTasksAndUsers();
        setTasks(tickets);  // Set tasks from the fetched data
        setUsers(users);    // Set users from the fetched data
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    loadTasks();
  }, []);

  return (
    <div className="App">
      <KanbanBoard tasks={tasks} users={users} />
    </div>
  );
}

export default App;
