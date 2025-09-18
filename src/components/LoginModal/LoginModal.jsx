import React, { useState, useEffect } from "react";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onLogin, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      await onLogin(formData);
      setFormData({ email: "", password: "" });
    } catch (error) {
      setErrors({ submit: error.message || "Login failed. Please try again." });
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

        <h2 className="modal__title">Sign in</h2>

        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__field">
            <label className="modal__label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
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
            <label className="modal__label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
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

          {errors.submit && (
            <div className="modal__submit-error">{errors.submit}</div>
          )}

          <button type="submit" className="modal__submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="modal__switch">
          or{" "}
          <button
            type="button"
            className="modal__switch-button"
            onClick={onSwitchToRegister}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
