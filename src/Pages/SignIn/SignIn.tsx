import React, { useEffect, useState } from "react";
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
import { Heading, Paragraph } from "theme-ui";
import { loginUser } from "../utils/apiService"; // Import the API call for login

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    validationSchema: Yup.object({
      identifier: Yup.string().required("Email or username is required"),
      password: Yup.string()
        .min(6, "password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");

      try {
        // Use the loginUser function from your API service to authenticate
        const response = await loginUser(values.identifier, values.password);
        console.log("response", response);

        // Check if the response has a token or successful login data
        if (response?.message === "Login successful") {
          localStorage.setItem("authToken", response.token); // Save token

          navigate("/subject-category"); // Redirect after successful login
        } else {
          setErrorMessage("Invalid credentials, please try again.");
        }
      } catch (error) {
        console.error("Error during sign-in", error);
        setErrorMessage("Invalid credentials, please try again.");
      }

      setLoading(false);
    },
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setErrorMessage(null); // Clear the error message after 5 seconds
    }, 5000);

    return () => clearTimeout(timerId);
  }, [errorMessage]);

  const handleGoogleSignUp = () => {
    console.log("Google sign-up triggered");
    // Add your Google authentication logic here
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
        padding: "20px, 30px, 40px",
      }}
    >
      {/* Display error message if it exists */}
      {errorMessage && (
        <Message
          variant="danger"
          sx={{
            width: "fit-content",
            maxWidth: "80%",
            zIndex: 1,
            right: 0,
            top: 0,
            position: "absolute",
            borderRadius: "4px",
            padding: "8px 16px",
            backgroundColor: "red",
            color: "white",
            transition: "0.2s ease-in",
          }}
        >
          {errorMessage}
        </Message>
      )}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src="/Education logo.png" alt="Education Logo" />
      </Box>

      <Heading sx={{ marginBottom: 20, textAlign: "center" }}>
        EDUCONNECT
      </Heading>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
        <Text>Your Academic Home</Text>
      </Box>

      {/* Google Sign-Up Button */}
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          color: "black",
          border: "1px solid",
          borderRadius: "8px",
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "10px",
          fontWeight: 600,
        }}
        onClick={handleGoogleSignUp}
      >
        <img
          src="/search.png" // Google logo
          alt="Google logo"
          style={{ width: "24px", height: "24px", marginRight: "10px" }}
        />
        Continue with Google
      </Button>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Text>OR</Text>
      </Box>

      {/* Form section */}
      <form onSubmit={formik.handleSubmit}>
        <Flex sx={{ flexDirection: "column", gap: 3 }}>
          <Label htmlFor="email">Email or Username</Label>
          <Input
            placeholder="email or username"
            id="identifier"
            name="identifier"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.identifier}
            required
            sx={{ backgroundColor: "white" }}
          />
          {formik.touched.identifier && formik.errors.identifier ? (
            <div style={{ color: "red" }}>{formik.errors.identifier}</div>
          ) : null}

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            required
            sx={{ backgroundColor: "white" }}
          />
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}

          <Paragraph sx={{ textAlign: "right" }}>
            Don't have an Account?{" "}
            <Link
              to="/sign-up"
              style={{
                color: "blue",
                cursor: "pointer",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Paragraph>

          {loading ? (
            <Button
              sx={{
                backgroundColor: "blue",
                borderRadius: 50,
                padding: 20,
                cursor: "pointer",
                marginTop: 20,
              }}
              type="submit"
            >
              <Spinner sx={{ color: "white" }} />
            </Button>
          ) : (
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "blue",
                color: "black",
                border: "1px solid",
                borderRadius: "8px",
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "10px",
                fontWeight: 600,
              }}
              type="submit"
            >
              Log In
            </Button>
          )}

          <Paragraph sx={{ textAlign: "center" }}>
            By continuing you agree with the <Link to="">Terms of Service</Link>{" "}
            and <Link to="">Privacy Policy</Link>
          </Paragraph>

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Text sx={{ textAlign: "center" }}>
              <Link to="/forgot-password">Forgot Your Password?</Link>
            </Text>
          </Box>
        </Flex>
      </form>
    </Box>
  );
};

export default SignIn;
