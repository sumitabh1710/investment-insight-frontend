const API_BASE_URL = "http://127.0.0.1:8080/api";

export const getInvestmentInsights = async (userId, prompt, preferences) => {
  const payload = {
    prompt: prompt,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/insights/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error fetching insights: ${response.statusText}`);
    }

    const data = await response.json();
    return data.insight;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const saveUserPreferences = async (userId, preferences) => {
  try {
    const response = await fetch(`${API_BASE_URL}/userPreferences/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    });

    if (!response.ok) {
      throw new Error(`Error saving preferences: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Registration failed");
  }

  return response.json();
};

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Login failed");
  }

  return response.json();
};
