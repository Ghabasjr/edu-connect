import { Link, useNavigate } from "react-router-dom";
import { Box, Heading, Button, Text, Paragraph } from "theme-ui";
import { signInWithGoogle } from "../utils/apiService";
// import { gapi } from "gapi-script";
// import { useEffect } from "react";

export default function SignUp2() {
  const navigate = useNavigate();
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

  // Function to handle Email sign-up
  const handleEmailSignUp = () => {
    console.log("Navigating to / sign-up");
    navigate("/sign-up"); // Redirect to the email sign-up page
  };

  return (
    <Box
      as="form"
      sx={{
        width: "100%",
        mt: "80px",
        fontWeight: 600,
        maxWidth: 400,
        margin: "auto auto",
        alignContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 30,
        }}
      >
        <img
          src="/mortarboard.png"
          alt="Graduation Hat"
          style={{ width: "100px", height: "100px" }}
        />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          gap: 30,
        }}
      >
        <Heading>SIGN UP</Heading>
        <Text sx={{ mt: "10rem" }}>
          Sign up now to be part of our <br />
          community
        </Text>
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
        Sign up with Google
      </Button>

      {/* Email Sign-Up Button */}
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
        onClick={handleEmailSignUp}
      >
        Sign up with Email
      </Button>

      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Paragraph>
          Already have an account?{" "}
          <Link to="/sign-in" style={{ color: "#4285F4", fontWeight: "bold" }}>
            Log in
          </Link>
        </Paragraph>
      </Box>
    </Box>
  );
}
