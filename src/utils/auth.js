const BASE_URL = "http://localhost:3001";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

export const authorize = async (credentials) => {
  const { email, password } = credentials;

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const response = await fetch(`${BASE_URL}/users/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await handleResponse(response);
  return {
    token: data.token,
    name: data.user.name,
  };
};

export const register = async (userData) => {
  const { email, password, name } = userData;

  if (!email || !password || !name) {
    throw new Error("All fields are required");
  }

  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  const data = await handleResponse(response);

  // After registration, log in to get token
  return authorize({ email, password });
};

export const checkToken = async (token) => {
  if (!token) {
    throw new Error("Token is required");
  }

  const response = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await handleResponse(response);
  return { data };
};
