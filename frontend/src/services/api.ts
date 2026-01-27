const getToken = () => localStorage.getItem('auth_token');

type User = {
  email: string;
  password: string;
};

export async function apiRequest(
  endpoint: string,
  method: string = 'GET',
  body?: User,
): Promise<{ access_token: string }> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}${endpoint}`,
    {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    },
  );

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('auth_token');
    }
    throw new Error(`Erro na requisição: ${response.statusText}`);
  }

  return response.json();
}
