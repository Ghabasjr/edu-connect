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

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    navigate("/email-verification"); // After sign-up, navigate to email verification page
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
      // confirmPassword: Yup.string(),
      // .oneOf([Yup.ref("password"), null], "Passwords must match")
      // .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        // Simulate a sign-up process (Replace with actual logic if needed)
        console.log("User signed up:", values);

        // After successful sign-up, navigate to email verification page
        navigate("/email-verification");
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    },
  });

  return (
    <Box
      as="form"
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
        {formik.touched.firstName && formik.errors.firstName && (
          <Box sx={{ color: "red" }}>{formik.errors.firstName}</Box>
        )}

        {formik.touched.lastName && formik.errors.lastName && (
          <Box sx={{ color: "red" }}>{formik.errors.lastName}</Box>
        )}

        <Input
          sx={{ backgroundColor: "white", background: "white" }}
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
          sx={{ background: "white" }}
          placeholder="password"
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

        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <Box sx={{ color: "red" }}>{formik.errors.confirmPassword}</Box>
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
              backgroundColor: "#192A41",
              borderRadius: 50,
              padding: 20,
              cursor: "pointer",
              marginTop: 20,
            }}
            type="button"
          >
            <Spinner sx={{ color: "white" }} />
          </Button>
        ) : (
          <Button
            sx={{
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
              marginTop: 20,
            }}
            type="button"
            onClick={handleSubmit} // Trigger form submission manually
          >
            Sign Up
          </Button>
        )}
      </Flex>
    </Box>
  );
}
