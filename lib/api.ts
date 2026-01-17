const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const getApiUrl = (endpoint: string): string => {
  return `${API_URL}${endpoint}`;
};

export const apiClient = {
  async get(endpoint: string) {
    try {
      const url = getApiUrl(endpoint);
      const res = await fetch(url, {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return res.json();
    } catch (error) {
      console.error(`API GET error for ${endpoint}:`, error);
      return null;
    }
  },

  async post(endpoint: string, data: any) {
    try {
      const url = getApiUrl(endpoint);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      return res.json();
    } catch (error) {
      console.error(`API POST error for ${endpoint}:`, error);
      throw error;
    }
  },
};

export { API_URL };
