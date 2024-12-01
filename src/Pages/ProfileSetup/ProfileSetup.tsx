import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Input, Button } from "theme-ui";

function ProfileSetup() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dash-board");
  };

  const inputStyles = {
    border: "none",
    borderBottom: "2px solid black",
    borderRadius: 0,
    outline: "none",
    fontSize: "16px",
    paddingX: 0,
    paddingY: 1,
    width: "100%",
  };
  const imgStyles = {
    // background: "white",
    // backgroundColor: "white",
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: 400,
          margin: "auto auto",
          alignContent: "center",
          height: "100vh",
          background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
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
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              background: "white",
            }}
          >
            <img
              src="/public/Logo/camera.png"
              alt="Profile Setup Icon"
              style={imgStyles}
            />
          </Button>
        </Box>

        <Box sx={{ gap: 20, mt: 4 }}>
          <Text>
            Username
            <img src="/public/Logo/_.png" alt="Underline Icon" />
          </Text>
          <Box sx={{ mt: 3 }}>
            <Input sx={inputStyles} placeholder="Enter your username" />
          </Box>
        </Box>

        <Box sx={{ gap: 20, mt: 4 }}>
          <Text>
            School
            <img src="/public/Logo/_.png" alt="Underline Icon" />
          </Text>
          <Box sx={{ mt: 3 }}>
            <Input sx={inputStyles} placeholder="Enter your School" />
          </Box>
        </Box>

        <Box sx={{ gap: 20, mt: 4 }}>
          <Text>
            Grade
            <img src="/public/Logo/_.png" alt="Underline Icon" />
          </Text>
          <Box sx={{ mt: 3 }}>
            <Input sx={inputStyles} placeholder="Enter your Grade" />
          </Box>
        </Box>

        <Box sx={{ gap: 20, mt: 4 }}>
          <Text>
            Date of Birth
            <img src="/public/Logo/_.png" alt="Underline Icon" />
          </Text>
          <Box sx={{ mt: 3 }}>
            <Input sx={inputStyles} placeholder="Enter your Date of Birth" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "center", // Center the button
            mt: 20,
          }}
        >
          <Button
            sx={{
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
