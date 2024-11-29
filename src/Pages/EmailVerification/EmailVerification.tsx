import { Box, Heading, Link, Paragraph, Text } from "theme-ui";

function EmailVerification() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/Logo/mailimage.jpeg"
          style={{ width: "100px", height: "100px", background: "background" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Heading>Confirm your Email address</Heading>
        </Box>
        <Box>
          <Paragraph>We sent a confirmation Email to:</Paragraph>
          {/* write a logic to call the user email address */}
          <Text>educonnect@gmail.com</Text>
        </Box>
        <Box>
          <Paragraph>
            Check your email and click on the confirmation link to continue
          </Paragraph>
        </Box>
        <Box>
          <Text>
            Didn't receive? <Link to="/resend-email">Resend email</Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default EmailVerification;
