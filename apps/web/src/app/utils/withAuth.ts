// frontend/utils/withAuth.ts
export const withAuth = async (fetchFunc: () => Promise<Response>): Promise<any> => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    throw new Error('Unauthorized: No token provided');
  }

  const response = await fetchFunc();

  if (response.status === 401) {
    throw new Error('Unauthorized: Invalid token');
  }

  return response.json();
};
