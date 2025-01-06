import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Box, Heading, Text } from "theme-ui";

const ForgotPassword2 = () => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/");
  // };
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
            Confirm your Email address
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
            We sent a confirmation Email to:{}
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
          {/* <Button
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
          </Button> */}
        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword2;
