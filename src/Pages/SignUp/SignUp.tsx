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
        .notOneOf([Yup.ref("email")], "Username must be different from email")
        .required("Username is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    onSubmit: async (values) => {
      setLoading(true);
      try {
        const data = await registerUser(
          values.username,
          values.email,
          values.password
        ); // Updated API function
        console.log("Registration successful:", data);

        // Navigate to email verification page if registration succeeds
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
        background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
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
          placeholder="Username"
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username} // Correctly bound to `formik.values.username`
        />
        {formik.touched.username && formik.errors.username && (
          <Box sx={{ color: "red" }}>{formik.errors.username}</Box>
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
            Sign Up
          </Button>
        )}
      </Flex>
    </Box>
  );
}
