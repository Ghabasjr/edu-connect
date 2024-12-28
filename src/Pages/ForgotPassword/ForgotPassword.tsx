import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Input, Button } from "theme-ui";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/forgot-password2");
  };
  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        as="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Heading
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: ["32px", "48px", "64px"], // Responsive font sizes
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Forgot Password
        </Heading>
        <Text
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontSize: ["16px", "20px", "24px"], // Responsive font sizes
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.5,
            maxWidth: "90%", // Ensures proper width on smaller screens
          }}
        >
          Enter your email for instructions
        </Text>
        <Input
          placeholder="Enter your email"
          sx={{
            width: "100%",
            maxWidth: "350px",
            padding: "10px",
            fontSize: "16px",
            // borderRadius: "4px",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
        />
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: "blue",
            color: "white",
            width: "100%",
            maxWidth: "350px",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            textAlign: "center",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "darkblue",
            },
          }}
        >
          Get Verification Code
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
