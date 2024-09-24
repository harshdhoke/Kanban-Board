// /src/components/GroupingSelector.jsx
import React from 'react';

function GroupingSelector({ grouping, setGrouping }) {
  return (
    <div>
      <label>Grouping: </label>
      <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupingSelector;
