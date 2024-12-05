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
import { loginUser } from "../utils/apiService";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await loginUser(email, password);
      if (response?.message === "Login successful") {
        localStorage.setItem("authToken", response?.token || "");
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
  };

  return { login, loading, errorMessage, setErrorMessage };
};

const SignIn: React.FC = () => {
  const { login, loading, errorMessage, setErrorMessage } = useLogin();

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
    onSubmit: (values) => {
      login(values.identifier, values.password);
    },
  });

  useEffect(() => {
    if (errorMessage) {
      const timerId = setTimeout(() => setErrorMessage(null), 5000);
      return () => clearTimeout(timerId);
    }
  }, [errorMessage]);

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
        <Text sx={{ fontSize: 14, color: "gray" }}>Your Academic Home</Text>
      </Box>

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
  );
};

export default SignIn;
