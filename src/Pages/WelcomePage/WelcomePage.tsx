import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Text } from "theme-ui";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  const handleSignUp = () => {
    navigate("/sign-up2");
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          margin: "0 auto",
          height: "100vh",
          padding: ["20px", "30px", "40px"],
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: [10, 15, 20],
          }}
        >
          <img
            src="/Education logo.png" // Path to public folder directly
            alt="Graduation Hat"
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </Box>

        {/* Heading Section */}
        <Box sx={{ textAlign: "center", mt: [15, 20, 30] }}>
          <Heading
            sx={{
              color: "black",
              fontSize: [3, 4, 5],
              lineHeight: "1.4",
              padding: ["10px", "20px", "30px"],
            }}
          >
            WELCOME
            <img
              src="/gross-striped-short-pencil-symbol.png" // Path to public folder directly
              alt="Pencil Icon"
              style={{
                width: "20px",
                height: "25px",
                marginLeft: "8px",
              }}
            />
            TO
            <br />
            <Box
              as="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <img
                src="/mortarboard.png" // Path to public folder directly
                style={{
                  width: "20px",
                  height: "18px",
                  marginRight: "8px",
                }}
                alt="Mortarboard Icon"
              />
            </Box>
            EDUCONNECT
          </Heading>
          <Text
            sx={{
              fontSize: [1, 2, 3],
              color: "black",
              mt: "10px",
            }}
          >
            Your academic home
          </Text>
        </Box>

        {/* Button Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: [3, 4, 4],
            mt: [20, 30, 40],
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "rgba(159,197,232,1)",
              color: "black",
              // border: "1px solid",
              borderRadius: "30px",
              width: "100%",
              padding: "12px",
              fontSize: [1, 2, 3],
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={handleSignIn}
          >
            SIGN IN
          </Button>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid",
              borderRadius: "30px",
              width: "100%",
              padding: "12px",
              fontSize: [1, 2, 3],
              fontWeight: 600,
              cursor: "pointer",
            }}
            onClick={handleSignUp}
          >
            SIGN UP
          </Button>
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
            mt: [10, 15, 20],
          }}
        >
          <img
            src="/formula.png" // Path to public folder directly
            alt="Formula Icon"
            style={{ width: "40px", height: "40px" }}
          />
          <img
            src="/science.png" // Path to public folder directly
            alt="Science Icon"
            style={{ width: "40px", height: "40px" }}
          />
        </Box>
      </Box>
    </>
  );
}
