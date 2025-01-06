import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Heading, Button, Input, Text, IconButton } from "theme-ui";
import { changePassword } from "../utils/apiService";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const ForgotPassword3 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the reset token from the query params or state
  const queryParams = new URLSearchParams(location.search);
  const resetToken = queryParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resetToken) {
      setErrorMessage("Invalid or missing token.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      await changePassword(resetToken, newPassword, confirmPassword);
      setSuccessMessage("Password reset successfully!");
      navigate("/sign-in");
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to reset password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 10,
      }}
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Heading
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: ["32px", "48px", "35px"],
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          Set New Password
        </Heading>
        <Box sx={{ position: "relative" }}>
          <Input
            placeholder="New password"
            value={newPassword}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setNewPassword(e.target.value)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "9px",
              width: "100%",
              height: "60px",
              maxWidth: "500px",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "66%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </IconButton>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Input
            placeholder="Confirm password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "9px",
              width: "100%",
              height: "60px",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "66%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </IconButton>
        </Box>
        {errorMessage && (
          <Text sx={{ color: "red", textAlign: "center" }}>{errorMessage}</Text>
        )}
        {successMessage && (
          <Text sx={{ color: "green", textAlign: "center" }}>
            {successMessage}
          </Text>
        )}
        <Button
          type="submit"
          disabled={loading}
          sx={{
            backgroundColor: "blue",
            color: "white",
            width: "100%",
            maxWidth: "350px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: loading ? "blue" : "darkblue",
            },
          }}
        >
          {loading ? "Processing..." : "Continue"}
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword3;
