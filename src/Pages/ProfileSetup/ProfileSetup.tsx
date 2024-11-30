import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Input, Button } from "theme-ui";

function ProfileSetup() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dash-board");
  };
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
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Heading>SETUP PROFILE</Heading>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
          <img src="/Logo/Glyph_undefined.png" alt="Profile Icon" />
        </Box>

        <Box sx={{ gap: 20, mt: 4 }}>
          <Text>
            Username
            <img src="/Logo/_.png" alt="Underline Icon" />
          </Text>
          <Box sx={{ mt: 3 }}>
            <Input
              sx={{
                border: "none",
                borderBottom: "2px solid black",
                borderRadius: 0,
                outline: "none",
                fontSize: "16px",
                paddingX: 0,
                paddingY: 1,
                width: "100%",
              }}
              placeholder="Enter your username"
            />
          </Box>
        </Box>
        <Box sx={{ gap: 20, mt: 4 }}>
          <Text>
            School
            <img src="/Logo/_.png" alt="Underline Icon" />
          </Text>
          <Box sx={{ mt: 3 }}>
            <Input
              sx={{
                border: "none",
                borderBottom: "2px solid black",
                borderRadius: 0,
                outline: "none",
                fontSize: "16px",
                paddingX: 0,
                paddingY: 1,
                width: "100%",
              }}
              placeholder="Enter your School"
            />
          </Box>
        </Box>
        <Box sx={{ gap: 20, mt: 4 }}>
          <Text>
            Grade
            <img src="/Logo/_.png" alt="Underline Icon" />
          </Text>
          <Box sx={{ mt: 3 }}>
            <Input
              sx={{
                border: "none",
                borderBottom: "2px solid black",
                borderRadius: 0,
                outline: "none",
                fontSize: "16px",
                paddingX: 0,
                paddingY: 1,
                width: "100%",
              }}
              placeholder="Enter your Grade"
            />
          </Box>
        </Box>
        <Box sx={{ gap: 20, mt: 4 }}>
          <Text>
            Date of Birth
            <img src="/Logo/_.png" alt="Underline Icon" />
          </Text>
          <Box sx={{ mt: 3 }}>
            <Input
              sx={{
                border: "none",
                borderBottom: "2px solid black",
                borderRadius: 0,
                outline: "none",
                fontSize: "16px",
                paddingX: 0,
                paddingY: 1,
                width: "100%",
              }}
              placeholder="Enter your Date of Birth"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "end",
            mt: 20,
          }}
        >
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              background: "white",
              border: "1px solid black",
              borderRadius: "54px",
            }}
            onClick={handleSubmit}
          >
            DONE
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ProfileSetup;
