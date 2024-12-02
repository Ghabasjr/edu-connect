import { Link, useNavigate } from "react-router-dom";
import { Box, Heading, Button, Text, Paragraph } from "theme-ui";

// import { useEffect } from "react";

export default function SignUp2() {
  const navigate = useNavigate();

  // Function to handle Google sign-up
  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth);
      const user = result.user;

      // Optionally, send user information to your backend for account creation
      console.log("Google sign-up successful:", user);

      // Redirect or show success message
      navigate("/dashboard"); // Redirect to the dashboard or preferred page
    } catch (error) {
      console.error("Error during Google sign-up:", error.message);
      alert("Google sign-up failed. Please try again.");
    }
  };

  // Function to handle Email sign-up
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
