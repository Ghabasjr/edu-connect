import { Box, Button, Input, Paragraph, Text } from "theme-ui";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

export default function DashBoard() {
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
          alignItems: "center",
          background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
        }}
      >
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "500px",
            mb: "20px", // Adds spacing between top and bottom sections
          }}
        >
          <Box>
            <img
              src="/Logo/Education logo.png"
              style={{ width: "45px", height: "45px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <img src="/Logo/add.png" />
            <img src="/Logo/search (2).png" />
            <img src="/Logo/vectoere.png" />
          </Box>
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px", // Reduces the space between rows
          }}
        >
          {/* Row 1: Bottom Icons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px", // Space between icons
            }}
          >
            <img src="/Logo/home.png" />
            <img src="/Logo/home3.png" />
            <img src="/Logo/icon4.png" />
            <img src="/Logo/notification.png" />
          </Box>

          {/* Row 2: Profile and Input */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px", // Space between image and input
              mt: "10px", // Optional, tweak spacing here
            }}
          >
            <img src="/Logo/Ellipse 1.png" alt="Profile Icon" />
            <Input
              placeholder="What do you want ask"
              sx={{
                borderRadius: "50px",
                width: "220px",
                height: "35px",
                backgroundColor: "white",
              }}
            />
          </Box>
        </Box>
        {/* Horizontal Line */}
        <HorizontalLine sx={{ width: "100%", maxWidth: "500px", mt: "20px" }} />
        <Box>
          <Box>
            <img src="/Logo/Ellipse 2 (1).png" />
            <Box>
              <Text>Angel Nancy</Text>
              <Paragraph>Nov 24</Paragraph>
            </Box>
            <Paragraph>History</Paragraph>
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              background: "background",
              backgroundColor: "#9fc5e8",
              color: "black",
              borderRadius: 50,
            }}
          >
            <img src="/Logo/upvote.png" />
            Upvote. 2.1k
          </Button>
          <Button
            sx={{
              background: "background",
              backgroundColor: "#9fc5e8",
              color: "black",
              borderRadius: 50,
            }}
          >
            <img src="/Logo/answers.png" />
            Answers
          </Button>
          <Paragraph>...</Paragraph>
        </Box>
        <HorizontalLine />

        <Box>
          <Box>
            <Box>
              <img src="/Logo/Ellipse 2 (1).png" />
              <Box>
                <Text>Angel Nancy</Text>
                <Paragraph>Nov 24</Paragraph>
              </Box>
              <Paragraph>History</Paragraph>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                background: "background",
                backgroundColor: "#9fc5e8",
                color: "black",
                borderRadius: 50,
              }}
            >
              <img src="/Logo/upvote.png" />
              Upvote. 2.1k
            </Button>
            <Button
              sx={{
                background: "background",
                backgroundColor: "#9fc5e8",
                color: "black",
                borderRadius: 50,
              }}
            >
              <img src="/Logo/answers.png" />
              Answers
            </Button>
            <Paragraph>...</Paragraph>
          </Box>
        </Box>
        <HorizontalLine />
        <Box>
          <Box>
            <Box>
              <img src="/Logo/Ellipse 2 (1).png" />
              <Box>
                <Text>Angel Nancy</Text>
                <Paragraph>Nov 24</Paragraph>
              </Box>
              <Paragraph>History</Paragraph>
            </Box>
          </Box>
          <Box>
            <Button
              sx={{
                background: "background",
                backgroundColor: "#9fc5e8",
                color: "black",
                borderRadius: 50,
              }}
            >
              <img src="/Logo/upvote.png" />
              Upvote. 2.1k
            </Button>
            <Button
              sx={{
                background: "background",
                backgroundColor: "#9fc5e8",
                color: "black",
                borderRadius: 50,
              }}
            >
              <img src="/Logo/answers.png" />
              Answers
            </Button>
            <Paragraph>...</Paragraph>
          </Box>
        </Box>
        <HorizontalLine />
      </Box>
    </>
  );
}
