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
import { registerUser } from "../utils/apiService"; // Import the service

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const data = await registerUser(values); // Call the centralized API function
        console.log("Registration successful:", data);

        // Save token if needed for subsequent API calls
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }

        // Navigate to email verification page
        navigate("/email-verification");
      } catch (error) {
        alert(error.message || "Registration failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box
      as="form"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        height: "100vh",
        alignContent: "center",
        background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
      }}
    >
      <Heading
        sx={{ marginBottom: 100, textAlign: "center", fontSize: "50px" }}
      >
        Sign Up
      </Heading>

      <Flex sx={{ flexDirection: "column", gap: 3 }}>
        <Input
          sx={{ backgroundColor: "white" }}
          placeholder="First Name"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <Box sx={{ color: "red" }}>{formik.errors.firstName}</Box>
        )}

        <Input
          sx={{ backgroundColor: "white" }}
          placeholder="Last Name"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <Box sx={{ color: "red" }}>{formik.errors.lastName}</Box>
        )}

        <Input
          sx={{ backgroundColor: "white" }}
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <Box sx={{ color: "red" }}>{formik.errors.email}</Box>
        )}

        <Input
          sx={{ backgroundColor: "white" }}
          placeholder="Password"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Box sx={{ color: "red" }}>{formik.errors.password}</Box>
        )}

        <Paragraph sx={{ textAlign: "right" }}>
          Already have an account?{" "}
          <Link
            to="/sign-in"
            style={{
              color: "blue",
              cursor: "pointer",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Log in
          </Link>
        </Paragraph>

        {loading ? (
          <Button
            sx={{
              marginTop: 20,
              backgroundColor: "#192A41",
              borderRadius: 50,
              padding: 20,
              cursor: "pointer",
            }}
            type="button"
          >
            <Spinner sx={{ color: "white" }} />
          </Button>
        ) : (
          <Button
            sx={{
              marginTop: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "blue",
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
            type="submit" // Automatically triggers formik.handleSubmit
          >
            Sign Up
          </Button>
        )}
      </Flex>
    </Box>
  );
}
