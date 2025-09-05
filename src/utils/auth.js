export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error("Email and password are required"));
      return;
    }

    setTimeout(() => {
      if (email === "wrong@email.com") {
        reject(new Error("Incorrect email or password"));
      } else {
        resolve({ token: "a-fake-jwt-token-12345" });
      }
    }, 1000);
  });
};

export const register = (email, password, name) => {
  return new Promise((resolve, reject) => {
    if (!email || !password || !name) {
      reject(new Error("All fields are required"));
      return;
    }

    setTimeout(() => {
      if (email === "existing@email.com") {
        reject(new Error("User with this email already exists"));
      } else {
        resolve({ token: "a-fake-jwt-token-67890" });
      }
    }, 1000);
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    if (!token || token === "invalid-token") {
      reject(new Error("Invalid token"));
      return;
    }

    setTimeout(() => {
      resolve({
        data: {
          name: "John Doe",
          email: "user@example.com",
          _id: "65f7368dfb74bd6a92114c85",
        },
      });
    }, 500);
  });
};
