import { Link, useNavigate } from "react-router-dom";
import { Box, Heading, Button, Text, Paragraph } from "theme-ui";

export default function SignUp2() {
  const navigate = useNavigate();

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
