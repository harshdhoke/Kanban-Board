// /src/components/TaskCard.jsx
import React from 'react';

function TaskCard({ task, users }) {
  const assignedUser = users.find(user => user.id === task.userId)?.name || 'Unknown';

  return (
    <li className="task-card">
      <h4>{task.title}</h4>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Assigned to: {assignedUser}</p>
    </li>
  );
}

export default TaskCard;
