import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box, Heading, Text, Input, Button } from "theme-ui";
import { forgotPassword } from "../utils/apiService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      setError("");
      const response = await forgotPassword(email);
      console.log("Forgot password API response:", response);
      setSuccess(true);
      navigate("/forgot-password2");
    } catch (err) {
      console.error("Forgot password API error:", err);
      if (err instanceof Error) {
        setError(err.message || "Failed to send verification code.");
      } else {
        setError("An unexpected error occurred.");
      }
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
      }}
    >
      <Box
        as="form"
        onSubmit={handleClick}
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
            fontSize: ["32px", "48px", "64px"],
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Forgot Password
        </Heading>
        <Text
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: ["16px", "20px", "20px"],
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: "90%",
          }}
        >
          Enter your email for instructions
        </Text>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          sx={{
            width: "100%",
            maxWidth: "350px",
            padding: "10px",
            fontSize: "16px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
        />
        {error && (
          <Text
            sx={{
              color: "red",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            {error}
          </Text>
        )}
        {success && (
          <Text
            sx={{
              color: "green",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Verification code sent successfully!
          </Text>
        )}
        <Button
          type="submit"
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
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "darkblue",
            },
          }}
        >
          Get Verification Code
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
