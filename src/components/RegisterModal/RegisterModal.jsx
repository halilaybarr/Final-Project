import React, { useState, useEffect } from "react";
import "./RegisterModal.css";

const RegisterModal = ({ isOpen, onClose, onRegister, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 2) {
      newErrors.username = "Username must be at least 2 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await onRegister({
        email: formData.email,
        password: formData.password,
        name: formData.username,
      });
      setFormData({ email: "", password: "", username: "" });
    } catch (error) {
      setErrors({
        submit: error.message || "Registration failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="modal__title">Sign up</h2>

        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__field">
            <label className="modal__label" htmlFor="register-email">
              Email
            </label>
            <input
              type="email"
              id="register-email"
              name="email"
              className={`modal__input ${
                errors.email ? "modal__input_error" : ""
              }`}
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
            {errors.email && (
              <span className="modal__error">{errors.email}</span>
            )}
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="register-password">
              Password
            </label>
            <input
              type="password"
              id="register-password"
              name="password"
              className={`modal__input ${
                errors.password ? "modal__input_error" : ""
              }`}
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
            />
            {errors.password && (
              <span className="modal__error">{errors.password}</span>
            )}
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="register-username">
              Username
            </label>
            <input
              type="text"
              id="register-username"
              name="username"
              className={`modal__input ${
                errors.username ? "modal__input_error" : ""
              }`}
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
            {errors.username && (
              <span className="modal__error">{errors.username}</span>
            )}
          </div>

          {errors.submit && (
            <div className="modal__submit-error">{errors.submit}</div>
          )}

          <button type="submit" className="modal__submit" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <p className="modal__switch">
          or{" "}
          <button
            type="button"
            className="modal__switch-button"
            onClick={onSwitchToLogin}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
