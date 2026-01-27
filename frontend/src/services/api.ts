const getToken = () => localStorage.getItem('auth_token');

export async function apiRequest(endpoint: string, method: string = 'GET', body?: any) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('auth_token');
    }
    throw new Error(`Erro na requisição: ${response.statusText}`);
  }

  return response.json();
}