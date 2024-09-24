// /src/components/KanbanBoard.jsx
import React, { useState } from 'react';
import TaskCard from './TaskCard';
import GroupingSelector from './GroupingSelector';
import SortSelector from './SortSelector';
import './KanbanBoard.css';  // Add a specific CSS file for KanbanBoard layout if needed

function KanbanBoard({ tasks, users }) {
  const [grouping, setGrouping] = useState('status');
  const [sortOrder, setSortOrder] = useState('priority');

  const groupTasks = (tasks = []) => {
    return tasks.reduce((acc, task) => {
      const key = grouping === 'status' ? task.status :
                  grouping === 'user' ? task.userId : task.priority;
      if (!acc[key]) acc[key] = [];
      acc[key].push(task);
      return acc;
    }, {});
  };

  const sortTasks = (tasks) => {
    if (sortOrder === 'priority') {
      return tasks.sort((a, b) => b.priority - a.priority);
    } else {
      return tasks.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  const groupedTasks = groupTasks(tasks);
  const sortedGroupedTasks = Object.keys(groupedTasks).reduce((acc, key) => {
    acc[key] = sortTasks(groupedTasks[key]);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      <div className="selectors">
        <GroupingSelector grouping={grouping} setGrouping={setGrouping} />
        <SortSelector sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      <div className="kanban-columns">
        {Object.keys(sortedGroupedTasks).map(group => (
            <div key={group} className="kanban-column">
            <h3>{group}</h3>
            <ul>
                {sortedGroupedTasks[group].map(task => (
                <TaskCard key={task.id} task={task} users={users} />
                ))}
            </ul>
            </div>
        ))}
        </div>

    </div>
  );
}

export default KanbanBoard;
