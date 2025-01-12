import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Label,
  Flex,
  Spinner,
  Message,
  Text,
  IconButton,
  Heading,
} from "@theme-ui/components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/apiService";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Cookies from "js-cookie";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      // Log the request payload and endpoint for debugging
      console.log("Logging in with:", { email, password });

      const response = await loginUser(email, password);

      // Log the response for debugging
      console.log("API Response:", response);

      if (response?.message === "Login successful") {
        Cookies.set("authToken", response?.token || "", { expires: 7 });

        if (response?.isSubjectSelected) {
          navigate("/dashboard");
        } else {
          navigate("/subject-category");
        }
      } else {
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      // Log the error details for debugging
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // const useLogin = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState<string | null>(null);
  //   const navigate = useNavigate();

  //   const togglePasswordVisibility = (event: React.MouseEvent) => {
  //     event.preventDefault();
  //     setShowPassword(!showPassword);
  //   };

  //   const login = async (identifier: string, password: string) => {
  //     setLoading(true);
  //     setErrorMessage(null);

  //     try {
  //       // Log the endpoint and request payload
  //       const endpoint = "https://secondaryschoolquora.onrender.com/login";
  //       console.log("Logging in with:", { identifier, password });
  //       console.log("Making POST request to:", endpoint);

  //       const response = await loginUser(identifier, password);

  //       // Log the raw response
  //       console.log("API Response:", response);

  //       if (response?.message === "Login successful") {
  //         Cookies.set("authToken", response?.token || "", { expires: 7 });

  //         if (response?.isSubjectSelected) {
  //           navigate("/dashboard");
  //         } else {
  //           navigate("/subject-category");
  //         }
  //       } else if (response?.message === "User not found") {
  //         setErrorMessage("User not found. Please check your credentials.");
  //       } else {
  //         setErrorMessage(response?.message || "Login failed. Try again.");
  //       }
  //     } catch (error: any) {
  //       // Log the error for debugging purposes
  //       console.error("Login error:", error);

  //       // Provide more detailed feedback based on the error type
  //       if (error.response?.status === 404) {
  //         setErrorMessage("Login endpoint not found. Please contact support.");
  //       } else {
  //         setErrorMessage(
  //           error.response?.data?.message ||
  //             "Something went wrong. Please try again later."
  //         );
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return {
    login,
    loading,
    errorMessage,
    setErrorMessage,
    togglePasswordVisibility,
    showPassword,
  };
};

const SignIn: React.FC = () => {
  const {
    login,
    loading,
    errorMessage,
    togglePasswordVisibility,
    showPassword,
  } = useLogin();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Username or Email is required")
        .matches(
          /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9._-]+)$/,
          "Enter a valid username or email"
        ),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });

  return (
    <Box
      sx={{
        margin: "auto",
        height: "100vh",
        display: "flex",
        flexDirection: ["column", "row"],
        justifyContent: "space-around",
        alignItems: "center",
        gap: [20, 30],
        px: 4,
        background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
      }}
    >
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

      <Box sx={{ textAlign: "center", mb: 3 }}>
        <img src="/Education logo.png" alt="Education Logo" />
        <Text as="h1" sx={{ fontSize: 24, fontWeight: "bold", mt: 2 }}>
          EDUCONNECT
        </Text>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Heading sx={{ fontWeight: 600, fontSize: "30px" }}>
            Welcome Back
          </Heading>
          <Text sx={{ fontWeight: 500, fontSize: "20px" }}>
            Get started to experience a better way of learning
          </Text>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Flex sx={{ flexDirection: "column", gap: 3 }}>
            <Box>
              <Label htmlFor="email">Username or Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your username or email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ bg: "white" }}
              />
              {formik.touched.email && formik.errors.email && (
                <Text sx={{ color: "red", fontSize: 12, mt: 1 }}>
                  {formik.errors.email}
                </Text>
              )}
            </Box>

            <Box sx={{ position: "relative" }}>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ bg: "white", pr: "40px" }}
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
                cursor: loading ? "not-allowed" : "pointer",
                mt: 3,
                opacity: loading ? 0.7 : 1,
              }}
              disabled={loading}
            >
              {loading ? <Spinner size={20} color="white" /> : "Log In"}
            </Button>
          </Flex>
        </form>

        <Flex sx={{ justifyContent: "space-between", mt: 3 }}>
          <Link to="/sign-up" style={{ fontSize: 14, color: "blue" }}>
            Sign Up
          </Link>
          <Link to="/forgot-password" style={{ fontSize: 14, color: "blue" }}>
            Forgot Password?
          </Link>
        </Flex>

        <Text sx={{ fontSize: 12, color: "gray", textAlign: "center", mt: 3 }}>
          By continuing, you agree to our <Link to="#">Terms</Link> and{" "}
          <Link to="#">Privacy Policy</Link>.
        </Text>
      </Box>
    </Box>
  );
};

export default SignIn;
