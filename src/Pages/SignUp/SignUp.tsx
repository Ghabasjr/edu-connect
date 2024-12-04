import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Flex,
  Input,
  Paragraph,
  Button,
  Spinner,
} from "theme-ui";
import { registerUser } from "../utils/apiService";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  navigate("/email-verification");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username must not exceed 20 characters")
        .notOneOf([Yup.ref("email")], "Username must differ from email")
        .required("Username is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(
          /[!@#$%^&*]/,
          "Password must contain at least one special character"
        )
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      if (loading) return; // Prevent duplicate submissions

      setLoading(true);
      try {
        const data = await registerUser(
          values.username,
          values.email,
          values.password
        );
        console.log("Registration successful:", data);

        // Redirect to email verification page
      } catch (error: any) {
        alert(error.message || "Registration failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      as="form"
      onSubmit={formik.handleSubmit} // Ensure Formik's submit handler is called
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 3,
        background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Heading sx={{ textAlign: "center", fontSize: 40, marginBottom: 4 }}>
        Sign Up
      </Heading>

      <Flex sx={{ flexDirection: "column", gap: 3 }}>
        <Input
          id="username"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ backgroundColor: "white" }}
        />
        {formik.touched.username && formik.errors.username && (
          <Box sx={{ color: "red", fontSize: 12 }}>
            {formik.errors.username}
          </Box>
        )}

        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ backgroundColor: "white" }}
        />
        {formik.touched.email && formik.errors.email && (
          <Box sx={{ color: "red", fontSize: 12 }}>{formik.errors.email}</Box>
        )}

        <Input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ backgroundColor: "white" }}
        />
        {formik.touched.password && formik.errors.password && (
          <Box sx={{ color: "red", fontSize: 12 }}>
            {formik.errors.password}
          </Box>
        )}

        <Paragraph sx={{ textAlign: "right", fontSize: 14 }}>
          Already have an account?{" "}
          <Link to="/sign-in" style={{ color: "blue", textDecoration: "none" }}>
            Log in
          </Link>
        </Paragraph>

        <Button
          type="submit" // Ensure the button triggers form submission
          disabled={loading}
          sx={{
            mt: 3,
            backgroundColor: loading ? "#192A41" : "blue",
            color: "white",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? <Spinner /> : "Sign Up"}
        </Button>
      </Flex>
    </Box>
  );
}
