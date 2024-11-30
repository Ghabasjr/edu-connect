import { Box, Heading, Link, Text } from "theme-ui";

function EmailVerification() {
  return (
    <>
      <Box
        sx={{
          maxWidth: 400,
          margin: "auto auto",
          alignContent: "center",
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
            mt: 20,
          }}
        >
          <img
            src="/Logo/Group.png"
            style={{ width: 100, height: 100, background: "#9fc5e8" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            mt: "20px",
          }}
        >
          <Box>
            <Heading>Confirm your Email address</Heading>
          </Box>
          <Box sx={{ mt: "30px" }}>
            <Text>We sent a confirmation Email to:</Text>
            {/* write a logic to call the user email address */}
            <Text sx={{ display: "block", fontWeight: "bold" }}>
              educonnect@gmail.com
            </Text>
          </Box>
          <Box sx={{ mt: "30px", display: "flex", textAlign: "center" }}>
            <Text>
              Check your email and click on the confirmation link to continue
            </Text>
          </Box>
          <Box sx={{ mt: "13rem" }}>
            <Text>
              Didn't receive? <Link href="/resend-email">Resend email</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EmailVerification;
