const API_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchRoles = async () => {
  const response = await fetch(`${API_BASE_URL}/api/roles`);
  if (!response.ok) throw new Error('Failed to fetch roles');
  const data = await response.json();
  return data.data;
};
