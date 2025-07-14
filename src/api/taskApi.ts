const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

export const fetchTasks = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createTask = async (title: string) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  return response.json();
};

export const deleteTask = async (id: number) => {
    return await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
};

export const updateTask = async (id: number, title: string) => {
    return await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
    });
};