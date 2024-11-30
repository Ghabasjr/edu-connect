import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text } from "theme-ui";

export default function WelcomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = () => {
    navigate("/Sign-in");
  };

  const handleSignUp = () => {
    navigate("/Sign-up2"); // Navigate to the Sign-up page
  };

  return (
    <>
      <Box
        sx={{
          fontFamily: "sans-serif",
          maxWidth: 400,
          margin: "auto auto",
          alignContent: "center",
          height: "100vh",
          alignItems: "center",
          padding: "10px",
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
            src="/Logo/Education logo.png"
            alt="Graduation Hat"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Box>
        <Box>
          <Heading
            sx={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              flexWrap: "wrap", // Allows wrapping if content overflows
              width: ["100%", "100%", "100%"],
              padding: "20px",
              marginTop: "70px",
            }}
          >
            WELCOME
            <img
              src="/Logo/gross-striped-short-pencil-symbol.png"
              alt="Pencil Icon"
              style={{
                width: "20px",
                height: "25px",
                marginLeft: "8px", // Adds spacing between the text and the icon
              }}
            />
            <br />
            TO <br />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/Logo/mortarboard.png"
                style={{
                  width: "20px",
                  height: "25px",
                  marginRight: "8px",
                }}
              />
            </Box>
            EDUCONNECT
          </Heading>
        </Box>
        <Text
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: ["100%", "100%", "100%"],
            backgroundColor: "",
            mt: "10px",
            mb: 10,
          }}
        >
          A space for all knowledge
        </Text>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
            onClick={handleSignIn}
            type="submit"
          >
            SIGN IN
          </Button>
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
            onClick={handleSignUp} // Handle the click event
            type="button"
          >
            SIGN UP
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 20,
            padding: "20px",
          }}
        >
          <Box>
            <img
              src="/Logo/formula.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Box>
          <Box />
          <Box>
            <img
              src="/Logo/science.png"
              style={{ width: "50px", height: "50px" }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
