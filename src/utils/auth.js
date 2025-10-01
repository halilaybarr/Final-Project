export const authorize = (credentials) => {
  return new Promise((resolve, reject) => {
    const { email, password } = credentials;

    if (!email || !password) {
      reject(new Error("Email and password are required"));
      return;
    }

    setTimeout(() => {
      if (email === "wrong@email.com") {
        reject(new Error("Incorrect email or password"));
      } else {
        // For demo purposes, any valid email will work
        const userName = email.includes("@") ? email.split("@")[0] : "User";
        resolve({
          token: "a-fake-jwt-token-12345",
          name: userName.charAt(0).toUpperCase() + userName.slice(1),
        });
      }
    }, 800);
  });
};

export const register = (userData) => {
  return new Promise((resolve, reject) => {
    const { email, password, name } = userData;

    if (!email || !password || !name) {
      reject(new Error("All fields are required"));
      return;
    }

    setTimeout(() => {
      if (email === "existing@email.com") {
        reject(new Error("User with this email already exists"));
      } else {
        resolve({
          token: "a-fake-jwt-token-67890",
          name: name.charAt(0).toUpperCase() + name.slice(1),
        });
      }
    }, 800);
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
