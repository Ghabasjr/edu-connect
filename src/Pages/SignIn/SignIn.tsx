import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  Label,
  Flex,
  Spinner,
  Message,
  Text,
} from "@theme-ui/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, signInWithGoogle } from "../utils/apiService";

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Formik for form handling and validation
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: Yup.object({
      identifier: Yup.string().required("Email or username is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage(null);

      try {
        const response = await loginUser(values.identifier, values.password);

        if (response?.message === "Login successful") {
          // Save token or other user data
          localStorage.setItem("authToken", response?.token || "");

          // Navigate to the next page
          navigate("/subject-category");
        } else {
          setErrorMessage("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.error("Login error:", error);
        setErrorMessage("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
  });

  // Clear error messages after 5 seconds
  useEffect(() => {
    if (errorMessage) {
      const timerId = setTimeout(() => setErrorMessage(null), 5000);
      return () => clearTimeout(timerId);
    }
  }, [errorMessage]);

  const handleGoogleSignUp = async () => {
    try {
      // Initialize Google API client (ensure this is done somewhere globally)
      const auth2 = gapi.auth2.getAuthInstance();
      if (!auth2) {
        throw new Error("Google Auth instance not initialized");
      }

      // Trigger Google Sign-In
      const googleUser = await auth2.signIn();

      // Extract the Google ID token
      const idToken = googleUser.getAuthResponse().id_token;
      console.log("Google ID Token:", idToken);

      // Send the ID token to the backend for registration
      const result = await signInWithGoogle(idToken);
      console.log("Backend registration successful:", result);

      // Navigate to dashboard or show a success message
      navigate("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during Google sign-up:", error.message);
      } else {
        console.error(
          "An unknown error occurred during Google sign-up:",
          error
        );
      }
      alert("Google sign-up failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 4,
        background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
      }}
    >
      {/* Error Message */}
      {errorMessage && (
        <Message
          variant="danger"
          sx={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            bg: "red",
            color: "white",
            px: 3,
            py: 2,
            borderRadius: "4px",
            fontSize: 14,
          }}
        >
          {errorMessage}
        </Message>
      )}

      {/* Logo */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <img src="/Education logo.png" alt="Education Logo" />
        <Text as="h1" sx={{ fontSize: 24, fontWeight: "bold", mt: 2 }}>
          EDUCONNECT
        </Text>
        <Text sx={{ fontSize: 14, color: "gray" }}>Your Academic Home</Text>
      </Box>

      {/* Google Login */}
      <Button
        sx={{
          bg: "white",
          color: "black",
          border: "1px solid gray",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 2,
          mb: 3,
          cursor: "pointer",
        }}
        onClick={handleGoogleSignUp}
      >
        <img
          src="/search.png"
          alt="Google Logo"
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        Continue with Google
      </Button>

      {/* OR Divider */}
      <Text sx={{ textAlign: "center", mb: 3 }}>OR</Text>

      {/* Login Form */}
      <form onSubmit={formik.handleSubmit}>
        <Flex sx={{ flexDirection: "column", gap: 3 }}>
          <Box>
            <Label htmlFor="identifier">Email or Username</Label>
            <Input
              id="identifier"
              name="identifier"
              placeholder="Enter your email or username"
              value={formik.values.identifier}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={{ bg: "white" }}
            />
            {formik.touched.identifier && formik.errors.identifier && (
              <Text sx={{ color: "red", fontSize: 12, mt: 1 }}>
                {formik.errors.identifier}
              </Text>
            )}
          </Box>

          <Box>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              sx={{ bg: "white" }}
            />
            {formik.touched.password && formik.errors.password && (
              <Text sx={{ color: "red", fontSize: 12, mt: 1 }}>
                {formik.errors.password}
              </Text>
            )}
          </Box>

          <Button
            type="submit"
            sx={{
              bg: "blue",
              color: "white",
              py: 2,
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
              mt: 3,
            }}
            disabled={loading}
          >
            {loading ? <Spinner size={20} color="white" /> : "Log In"}
          </Button>
        </Flex>
      </form>

      {/* Links */}
      <Flex sx={{ justifyContent: "space-between", mt: 3 }}>
        <Link to="/sign-up" style={{ fontSize: 14, color: "blue" }}>
          Sign Up
        </Link>
        <Link to="/forgot-password" style={{ fontSize: 14, color: "blue" }}>
          Forgot Password?
        </Link>
      </Flex>

      {/* Terms */}
      <Text sx={{ fontSize: 12, color: "gray", textAlign: "center", mt: 3 }}>
        By continuing, you agree to our <Link to="#">Terms</Link> and{" "}
        <Link to="#">Privacy Policy</Link>.
      </Text>
    </Box>
  );
};

export default SignIn;
