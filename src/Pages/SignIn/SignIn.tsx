// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Input,
//   Label,
//   Flex,
//   Spinner,
//   Message,
//   Text,
//   IconButton,
// } from "@theme-ui/components";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom";
// import { loginUser } from "../utils/apiService";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import Cookies from "js-cookie";

// const useLogin = () => {
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = (event: React.MouseEvent) => {
//     event.preventDefault();
//     setShowPassword(!showPassword);
//   };

//   const login = async (email: string, password: string) => {
//     setLoading(true);
//     setErrorMessage(null);

//     try {
//       const response = await loginUser(email, password);
//       if (response?.message === "Login successful") {
//         // Store token in cookies
//         Cookies.set("authToken", response?.token || "", { expires: 7 }); // Expires in 7 days

//         // Redirect based on isSubjectSelected
//         if (response?.isSubjectSelected) {
//           navigate("/dashboard");
//         } else {
//           navigate("/subject-category");
//         }
//       } else {
//         setErrorMessage("Invalid credentials. Please try again.");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage("Something went wrong. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     login,
//     loading,
//     errorMessage,
//     setErrorMessage,
//     togglePasswordVisibility,
//     showPassword,
//   };
// };

// const SignIn: React.FC = () => {
//   const {
//     login,
//     loading,
//     errorMessage,
//     setErrorMessage,
//     togglePasswordVisibility,
//     showPassword,
//   } = useLogin();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().required("Email or username is required"),
//       password: Yup.string()
//         .min(6, "Password must be at least 6 characters")
//         .required("Password is required"),
//     }),
//     onSubmit: (values) => {
//       login(values.email, values.password);
//     },
//   });

//   useEffect(() => {
//     if (errorMessage) {
//       const timerId = setTimeout(() => setErrorMessage(null), 10000);
//       return () => clearTimeout(timerId);
//     }
//   }, [errorMessage, setErrorMessage]);

//   return (
//     <Box
//       sx={{
//         maxWidth: 400,
//         margin: "auto",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         px: 4,
//         background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
//       }}
//     >
//       {errorMessage && (
//         <Message
//           variant="danger"
//           sx={{
//             position: "absolute",
//             top: 20,
//             left: "50%",
//             transform: "translateX(-50%)",
//             bg: "red",
//             color: "white",
//             px: 3,
//             py: 2,
//             borderRadius: "4px",
//             fontSize: 14,
//           }}
//         >
//           {errorMessage}
//         </Message>
//       )}

//       <Box sx={{ textAlign: "center", mb: 3 }}>
//         <img src="/Education logo.png" alt="Education Logo" />
//         <Text as="h1" sx={{ fontSize: 24, fontWeight: "bold", mt: 2 }}>
//           EDUCONNECT
//         </Text>
//         <Text sx={{ fontSize: 14, color: "gray" }}>Your Academic Home</Text>
//       </Box>

//       <form onSubmit={formik.handleSubmit}>
//         <Flex sx={{ flexDirection: "column", gap: 3 }}>
//           <Box>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               name="email"
//               placeholder="Enter your email or username"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               sx={{ bg: "white" }}
//             />
//             {formik.touched.email && formik.errors.email && (
//               <Text sx={{ color: "red", fontSize: 12, mt: 1 }}>
//                 {formik.errors.email}
//               </Text>
//             )}
//           </Box>

//           <Box sx={{ position: "relative" }}>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               sx={{ bg: "white", pr: "40px" }}
//             />
//             <IconButton
//               sx={{
//                 position: "absolute",
//                 top: "66%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 cursor: "pointer",
//                 background: "transparent",
//                 border: "none",
//                 outline: "none",
//               }}
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </IconButton>
//             {formik.touched.password && formik.errors.password && (
//               <Text sx={{ color: "red", fontSize: 12, mt: 1 }}>
//                 {formik.errors.password}
//               </Text>
//             )}
//           </Box>

//           <Button
//             type="submit"
//             sx={{
//               bg: "blue",
//               color: "white",
//               py: 2,
//               borderRadius: "4px",
//               fontWeight: "bold",
//               cursor: loading ? "not-allowed" : "pointer",
//               mt: 3,
//               opacity: loading ? 0.7 : 1,
//             }}
//             disabled={loading}
//           >
//             {loading ? <Spinner size={20} color="white" /> : "Log In"}
//           </Button>
//         </Flex>
//       </form>

//       <Flex sx={{ justifyContent: "space-between", mt: 3 }}>
//         <Link to="/sign-up" style={{ fontSize: 14, color: "blue" }}>
//           Sign Up
//         </Link>
//         <Link to="/forgot-password" style={{ fontSize: 14, color: "blue" }}>
//           Forgot Password?
//         </Link>
//       </Flex>

//       <Text sx={{ fontSize: 12, color: "gray", textAlign: "center", mt: 3 }}>
//         By continuing, you agree to our <Link to="#">Terms</Link> and{" "}
//         <Link to="#">Privacy Policy</Link>.
//       </Text>
//     </Box>
//   );
// };

// export default SignIn;

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

  const login = async (username: string, email: string, password: string) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await loginUser(username, email, password);
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
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      login(values.username, values.email, values.password);
    },
  });

  return (
    <Box
      sx={{
        // maxWidth: 400,
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
        <Text sx={{ fontSize: 14, color: "gray" }}>Your Academic Home</Text>
      </Box>
      <Box sx={{}}>
        <form onSubmit={formik.handleSubmit}>
          <Flex sx={{ flexDirection: "column", gap: 3 }}>
            <Box>
              <Label htmlFor="email">Email</Label>
              <Input
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ bg: "white" }}
              />
              {formik.touched.username && formik.errors.username && (
                <Text sx={{ color: "red", fontSize: 12, mt: 1 }}>
                  {formik.errors.username}
                </Text>
              )}
            </Box>
            <Box>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email or username"
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
