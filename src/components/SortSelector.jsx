// /src/components/SortSelector.jsx
import React from 'react';

function SortSelector({ sortOrder, setSortOrder }) {
  return (
    <div>
      <label>Ordering: </label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortSelector;
