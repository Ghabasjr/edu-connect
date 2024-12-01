import { Box, Button, Input, Paragraph, Text } from "theme-ui";

export default function DashBoard() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Navigation Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
          mb: "20px",
        }}
      >
        <img
          src="/public/Logo/Education logo.png"
          alt="Education Logo"
          style={{ width: "45px", height: "45px" }}
        />
        <Box sx={{ display: "flex", gap: "20px" }}>
          <img src="/public/Logo/add.png" alt="Add Icon" />
          <img src="/public/Logo/search (2).png" alt="Search Icon" />
          <img src="/public/Logo/vectoere.png" alt="Menu Icon" />
        </Box>
      </Box>

      {/* Bottom Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
          mb: "20px",
        }}
      >
        <img src="/public/Logo/home.png" alt="Home Icon" />
        <img src="/public/Logo/home3.png" alt="Explore Icon" />
        <img src="/public/Logo/icon4.png" alt="Bookmark Icon" />
        <img src="/public/Logo/notification.png" alt="Notification Icon" />
      </Box>

      {/* Input Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          width: "100%",
          maxWidth: "500px",
          mb: "20px",
        }}
      >
        <img
          src="/Logo/Ellipse 1.png"
          alt="Profile Icon"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
          }}
        />
        <Input
          placeholder="What do you want to ask?"
          sx={{
            flex: 1,
            borderRadius: "20px",
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "white",
          }}
        />
      </Box>

      {/* Posts Section */}
      {["History", "Mathematics", "Computer Studies"].map((topic, index) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            padding: "15px",
            mb: "15px",
          }}
        >
          {/* User Info */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/public/Logo/Ellipse 2 (1).png"
                alt="User Avatar"
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
              <Box>
                <Text sx={{ fontWeight: "bold", fontSize: "16px" }}>
                  Angel Nancy
                </Text>
                <Text sx={{ fontSize: "12px", color: "gray" }}>Nov 24</Text>
              </Box>
            </Box>
            <Text
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#555",
              }}
            >
              {topic}
            </Text>
          </Box>

          {/* Post Content */}
          <Paragraph
            sx={{
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#333",
              mb: "15px",
            }}
          >
            History is the act of inquiring into the past in order to understand
            the issues of the present and plan ahead for the future. One of the
            great scholars of history...{" "}
            <Text sx={{ color: "#007BFF", cursor: "pointer" }}>Read more</Text>
          </Paragraph>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                borderRadius: "20px",
                padding: "5px 10px",
                backgroundColor: "#f0f0f0",
                color: "black",
                fontSize: "14px",
              }}
            >
              <img
                src="/public/Logo/upvote.png"
                alt="Upvote Icon"
                style={{ width: "16px" }}
              />
              Upvote. 2.1k
            </Button>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                borderRadius: "20px",
                padding: "5px 10px",
                backgroundColor: "#f0f0f0",
                color: "black",
                fontSize: "14px",
              }}
            >
              <img
                src="/public/Logo/answers.png"
                alt="Answer Icon"
                style={{ width: "16px" }}
              />
              Answer
            </Button>
            <Text
              sx={{
                fontSize: "18px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              ...
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
