import { Link } from "react-router-dom";
import { Box, Heading, Text } from "theme-ui";

const ForgotPassword2 = () => {
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
          gap: 10,
        }}
      >
        <Box>
          <img src="/Group.png" />
        </Box>
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
              fontSize: ["32px", "48px", "25px"],
              fontWeight: 700,
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            Reset Password
          </Heading>
          <Text
            sx={{
              fontFamily: "Roboto, sans-serif",
              fontSize: ["16px", "20px", "24px"],
              fontWeight: 400,
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: "90%",
            }}
          >
            A link has been sent to:{}
          </Text>
          <Text
            style={{
              fontFamily: "Roboto, sans-serif",
              // fontSize: ["16px", "20px", "24px"],
              fontSize: "20px",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: "90%",
            }}
          >
            Check your Email and click on the confirmation link to continue.
          </Text>
          <Text sx={{ gap: 20 }}>
            Didn't receive a code?{" "}
            <Link to="/forgot-password">Click to Resend</Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword2;
