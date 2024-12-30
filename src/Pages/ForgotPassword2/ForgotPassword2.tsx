import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text } from "theme-ui";
import OTPInput from "../../Components/OtpInput/OtpInput";

const ForgotPassword2 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
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
              fontSize: ["32px", "48px", "64px"],
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Enter your code
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
            We sent a code to {}
          </Text>
          <OTPInput />
          {/* <Input
            placeholder="Enter your code"
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
          /> */}
          <Text>
            Didn't receive a code?{" "}
            <Link to="/forgot-password">Click to Resend</Link>
          </Text>
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
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword2;
