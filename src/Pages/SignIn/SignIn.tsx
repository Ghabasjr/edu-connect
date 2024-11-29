// /** @jsxImportSource theme-ui */
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Input,
//   Label,
//   Flex,
//   Spinner,
//   Message,
// } from "@theme-ui/components";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Link, useNavigate } from "react-router-dom";
// import { Heading, Paragraph } from "theme-ui";

// const SignIn: React.FC = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>("");

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       password: Yup.string().required("Password is required"),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);
//       setErrorMessage(""); // Clear previous error message before submitting

//       try {
//         const userCredential = await signInWithEmailAndPassword(
//           auth,
//           values.email,
//           values.password
//         );
//         console.log("userCredential", userCredential);

//         const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));

//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           console.log("userData", userData);

//           if (userData.role === "admin") {
//             console.log("admin-dashboard");
//             navigate("/admin-dashboard");
//           } else {
//             console.log("users-dashboard");
//             navigate("/");
//           }
//         } else {
//           console.error("No user data found in Firebase store");
//         }
//       } catch (error: unknown) {
//         if (typeof error === "object" || error !== null || "code" in error) {
//          // Set the error message from Firebase
//         }
//       }

//       setLoading(false);
//     },
//   });

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setErrorMessage(null); // Set the error message from Firebase
//     }, 5000);

//     return () => clearTimeout(timerId);
//   }, [errorMessage]);

//   return (
//     // @ts-ignore
//     <Box
//       as="form"
//       onSubmit={formik.handleSubmit}
//       sx={{
//         maxWidth: 400,
//         margin: "auto auto",
//         alignContent: "center",
//         height: "100vh",
//       }}
//     >
//       {/* Display error message if it exists */}
//       {errorMessage && (
//         <Message
//           variant="danger"
//           sx={{
//             width: "fit-content",
//             maxWidth: "80%",
//             zIndex: 1,
//             right: 0,
//             top: 0,
//             position: "absolute",
//             borderRadius: "4px",
//             padding: "8px 16px",
//             backgroundColor: "red",
//             color: "white",
//             transition: "0.2s ease-in",
//             borderLeftColor: "none",
//           }}
//         >
//           {errorMessage}
//         </Message>
//       )}

//       <Heading sx={{ marginBottom: 20, textAlign: "center" }}>
//         Welcome to <span sx={{ color: "#ff0000" }}>Eloni</span>
//       </Heading>

//       <Flex sx={{ flexDirection: "column", gap: 3 }}>
//         <Label htmlFor="email">Email</Label>
//         <Input
//           id="email"
//           name="email"
//           type="email"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//           required
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <div sx={{ color: "red" }}>{formik.errors.email}</div>
//         ) : null}

//         <Label htmlFor="password">Password</Label>
//         <Input
//           id="password"
//           name="password"
//           type="password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//           required
//         />
//         {formik.touched.password && formik.errors.password ? (
//           <div sx={{ color: "red" }}>{formik.errors.password}</div>
//         ) : null}

//         <Paragraph sx={{ textAlign: "right" }}>
//           Don't have an Account?{" "}
//           <Link
//             to={"/sign-up"}
//             sx={{
//               color: "blue",
//               cursor: "pointer",
//               fontWeight: "600",
//               textDecoration: "none",
//             }}
//           >
//             Sign Up
//           </Link>
//         </Paragraph>

//         {loading ? (
//           <Button
//             sx={{
//               backgroundColor: "#192A41",
//               borderRadius: 50,
//               padding: 20,
//               cursor: "pointer",
//               marginTop: 20,
//             }}
//             type="submit"
//           >
//             <Spinner sx={{ color: "white" }} />
//           </Button>
//         ) : (
//           <Button
//             sx={{
//               backgroundColor: "#192A41",
//               borderRadius: 50,
//               padding: 20,
//               cursor: "pointer",
//               marginTop: 20,
//             }}
//             type="submit"
//           >
//             Sign In
//           </Button>
//         )}
//       </Flex>
//     </Box>
//   );
// };

// export default SignIn;
