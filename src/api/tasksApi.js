// /src/api/tasksApi.js
export const fetchTasksAndUsers = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      return data;  // Return both tickets and users
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  