import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Image, Input, Paragraph, Text, Flex } from "theme-ui";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

export default function DashBoard() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProfile = () => {
    navigate("/edit-profile");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();

    navigate("/sign-in");
  };
  return (
    <>
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
            src="/Education logo.png"
            alt="Education Logo"
            style={{ width: "45px", height: "45px" }}
          />
          <Box sx={{ display: "flex", gap: "20px" }}>
            <img src="/add.png" alt="Add Icon" />
            <img src="/search (2).png" alt="Search Icon" />
            <img
              src="/vinijr.png"
              alt="Menu Icon"
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            />
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
          <img src="/home.png" alt="Home Icon" />
          <img src="/home3.png" alt="Explore Icon" />
          <img src="/icon4.png" alt="Bookmark Icon" />
          <img src="/notification.png" alt="Notification Icon" />
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
          <Image
            src="/Ellipse 1.png"
            alt="Profile Icon"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={handleProfile}
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
                  src="/Ellipse 2 (1).png"
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
              History is the act of inquiring into the past in order to
              understand the issues of the present and plan ahead for the
              future. One of the great scholars of history...{" "}
              <Text sx={{ color: "#007BFF", cursor: "pointer" }}>
                Read more
              </Text>
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
                  backgroundColor: "background",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                <img
                  src="/upvote.png"
                  alt="Upvote Icon"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
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
                  src="/answers.png"
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

      {/* Overlay */}
      {isMenuOpen && (
        <Box
          onClick={toggleMenu}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        ></Box>
      )}

      {/* Menu */}
      {isMenuOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "36px",
            left: ["114.71px", "0.5px"],
            width: "293.71px",
            height: "775px",
            backgroundColor: "white",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 999,
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <Button
            onClick={toggleMenu}
            sx={{
              backgroundColor: "transparent",
              border: "none",
              color: "text",
              fontSize: "18px",
              cursor: "pointer",
              padding: 0,
              marginBottom: "20px",
            }}
          >
            ✖ Close
          </Button>

          <Flex sx={{ flexDirection: "column", gap: "20px" }}>
            <HorizontalLine />
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>🏠 Home</Text>
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              ❓ Questions
            </Text>
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              📚 Subject Categories
            </Text>
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              🔔 Notifications
            </Text>
            <HorizontalLine />
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              ⚙️ Settings & Privacy
            </Text>
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              🆘 Help Center
            </Text>
            <Text
              sx={{ fontSize: "18px", cursor: "pointer" }}
              onClick={handleLogout}
            >
              🔓 Logout
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
}
