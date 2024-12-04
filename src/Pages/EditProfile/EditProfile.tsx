import { Box, Button, Paragraph, Text } from "theme-ui";
import HorizontalLine from "../../Components/HorizontalLine/HorizontalLine";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dash-board");
  };
  const handlePost = () => {
    navigate("/post-page");
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0 auto",
        minHeight: "100vh",
        padding: ["20px", "30px", "40px"],
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "0 20px",
        }}
      >
        <Box>
          <img
            src="Arrowleft.png"
            alt="Arrow"
            style={{
              cursor: "pointer",
              width: "24px",
              height: "24px",
            }}
            onClick={handleBack}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: ["10px", "20px"],
          }}
        >
          <Box>
            <img
              src="search (2).png"
              style={{
                height: "22px",
                width: "22px",
              }}
            />
          </Box>
          <Box>
            <img
              src="three-dot.png"
              style={{
                height: "25px",
                width: "26px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Profile Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            width: "fit-content",
            marginBottom: "10px",
          }}
        >
          {/* Profile Image */}
          <img
            src="Ellipse 1.png"
            alt="Profile"
            style={{
              width: "118px",
              height: "118px",
              borderRadius: "50%",
            }}
          />

          {/* Camera Icon */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src="camera.png"
              alt="Camera Icon"
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          </Box>
        </Box>

        <Text
          sx={{
            fontSize: ["16px", "18px"],
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Joshua
        </Text>
        <Button
          sx={{
            fontSize: ["14px", "16px"],
            backgroundColor: "background",
            color: "black",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Edit profile
        </Button>

        <Paragraph
          sx={{
            fontSize: ["14px", "16px"],
            lineHeight: "1.5",
            maxWidth: "90%",
            marginBottom: "30px",
          }}
        >
          Dedicated and enthusiastic student passionate about math. I strive for
          academic excellence, participate in extracurricular activities, and
          aim to make a positive impact in my community.
        </Paragraph>

        {/* Stats */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Text>0 Answers</Text>
          <Text>0 Questions</Text>
          <Text>0 Posts</Text>
          <Text>0 Badges</Text>
          <Text>0 Upvotes</Text>
        </Box>
        <HorizontalLine />
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: "20px",
          fontSize: ["14px", "16px"],
          marginBottom: "20px",
        }}
      >
        <Text>You have not shared, answered, or posted anything yet.</Text>
      </Box>

      <Button
        sx={{
          backgroundColor: "white",
          borderRadius: "50px",
          width: "60px",
          height: "60px",
          fontSize: ["14px", "16px"],
          marginBottom: "20px",
          cursor: "pointer",
        }}
        onClick={handlePost}
      >
        <img src="onet0two.png" alt="Add Post" />
      </Button>
    </Box>
  );
}
