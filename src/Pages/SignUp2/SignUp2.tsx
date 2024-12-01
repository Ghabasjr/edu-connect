import { Link, useNavigate } from "react-router-dom";
import { Box, Heading, Button, Text, Paragraph } from "theme-ui";

export default function SignUp2() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle Google sign-up (you can replace this with your own logic)
  const handleGoogleSignUp = () => {
    console.log("Google sign-up triggered");
    // Add your Google authentication logic here
  };

  // Function to handle Email sign-up
  const handleEmailSignUp = () => {
    console.log("Navigating to the sign-up page");
    navigate("/sign-up"); // Redirect to the signup page
  };

  return (
    <>
      <Box
        as="form"
        sx={{
          width: "100%",
          // margin: "0 auto",
          mt: "80px",
          gap: 30,
          fontWeight: 600,
          maxWidth: 400,
          margin: "auto auto",
          alignContent: "center",
          height: "100vh",
          alignItems: "center",
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
            style={{
              width: "100px",
              height: "100px",
            }}
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
            <Link
              to="/sign-in"
              style={{ color: "#4285F4", fontWeight: "bold" }}
            >
              Log in
            </Link>
          </Paragraph>
        </Box>
      </Box>
    </>
  );
}
