import { useState } from "react";
import { Box, Heading, Text, Flex, IconButton, Divider } from "theme-ui";
import { FaHome, FaUser, FaBell, FaList } from "react-icons/fa";

export default function NotificationsPage() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Notifications");

  const notifications = [
    {
      icon: <FaHome />,
      message:
        "Welcome to Educonnect your academic home! Tap here for more and explore.",
      time: "5 seconds ago",
      unread: true,
    },
    {
      icon: <FaList />,
      message:
        "Congratulations! You've earned the 'The Bronze Helper Level 1' badge! Keep up the great work!",
      time: "5 seconds ago",
      unread: true,
    },
    {
      icon: <FaUser />,
      message:
        "Great job! You just received an upvote! Your contribution is valued and appreciated!",
      time: "5 seconds ago",
      unread: true,
    },
  ];

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
    setShowFilter(false);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
        height: "100vh",
        p: 3,
        width: "100%",
        minHeight: "100vh",
        // background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <Flex
        sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}
      >
        <Heading sx={{ fontSize: 24 }}>Notifications</Heading>
        <Flex>
          <IconButton sx={{ ml: 2 }} aria-label="Home">
            <FaHome />
          </IconButton>
          <IconButton sx={{ ml: 2 }} aria-label="Menu">
            <FaList />
          </IconButton>
          <IconButton
            sx={{ ml: 2 }}
            aria-label="Notifications"
            onClick={() => setShowFilter(true)}
          >
            <FaBell />
          </IconButton>
          <IconButton sx={{ ml: 2 }} aria-label="Profile">
            <FaUser />
          </IconButton>
        </Flex>
      </Flex>

      {/* Notifications */}
      <Box
        sx={{
          borderRadius: "8px",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          p: 3,
        }}
      >
        {notifications.map((notification, index) => (
          <Flex
            key={index}
            sx={{
              alignItems: "center",
              p: 2,
              mb: 3,
              borderRadius: "8px",
              backgroundColor: notification.unread ? "#e3f2fd" : "white",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              sx={{
                fontSize: 28,
                color: "#0277bd",
                mr: 3,
              }}
            >
              {notification.icon}
            </Box>
            <Box>
              <Text
                sx={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#0d47a1",
                  mb: 1,
                }}
              >
                {notification.message}
              </Text>
              <Text sx={{ fontSize: 12, color: "gray" }}>
                {notification.time}
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>

      {/* Filter Modal */}
      {showFilter && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "white",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
            p: 4,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "4px",
              backgroundColor: "gray",
              borderRadius: "50px",
              margin: "0 auto 20px auto",
            }}
            onClick={() => setShowFilter(false)}
          ></Box>
          <Text
            sx={{
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              mb: 3,
            }}
          >
            Notifications Filter
          </Text>
          <Divider sx={{ borderColor: "gray", mb: 3 }} />
          <Box
            sx={{
              textAlign: "center",
              mb: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {["All Notifications", "Answers", "Upvotes", "Badges"].map(
              (filter, index) => (
                <Text
                  key={index}
                  sx={{
                    fontSize: 16,
                    mb: 2,
                    cursor: "pointer",
                    color: selectedFilter === filter ? "#0277bd" : "black",
                    fontWeight: selectedFilter === filter ? "bold" : "normal",
                  }}
                  onClick={() => handleFilterSelect(filter)}
                >
                  {filter}
                </Text>
              )
            )}
          </Box>
          {/* <Button
            sx={{
              width: "100%",
              backgroundColor: "#0277bd",
              color: "white",
              borderRadius: "50px",
              textAlign: "center",
              padding: "10px",
            }}
          >
            DONE
          </Button> */}
        </Box>
      )}
    </Box>
  );
}
