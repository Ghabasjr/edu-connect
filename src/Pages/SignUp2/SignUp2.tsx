import { Link, useNavigate } from "react-router-dom";
import { Box, Heading, Button, Text, Paragraph } from "theme-ui";
import { signInWithGoogle } from "../utils/apiService"; // Importing the API functions
import { gapi } from "gapi-script"; // Google API client library

export default function SignUp2() {
  const navigate = useNavigate();
  const handleGoogleSignUp = async () => {
    try {
      const auth2 = gapi.auth2.getAuthInstance(); // Get Google Auth instance
      const googleUser = await auth2.signIn(); // Open Google Sign-In pop-up
      const idToken = googleUser.getAuthResponse().id_token; // Get ID Token

      console.log("Google ID Token:", idToken);

      // Use the ID Token for backend API calls
      const result = await signInWithGoogle(idToken);
      console.log("Google Sign-In Success:", result);

      navigate("/dashboard"); // Redirect to the dashboard on success
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Now TypeScript knows error is an instance of Error
        console.error("Google Sign-Up Error:", error.message);
      } else {
        // Handle case where error is not an instance of Error
        console.error(
          "An unknown error occurred during Google sign-up:",
          error
        );
      }
      alert("Google sign-in failed. Please try again.");
    }
  };

  // Email Sign-Up handler
  const handleEmailSignUp = () => {
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
