import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Box, Input, Button, Text, Divider } from "theme-ui";

export default function Search() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

  const handleBack = () => {
    navigate("/dash-board");
  };

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
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
        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "400px",
            mb: 4,
          }}
        >
          <Box>
            <img
              src="/Arrowleft.png"
              alt="Back"
              onClick={handleBack}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box>
            <Input
              placeholder="Search"
              sx={{
                backgroundColor: "white",
                borderRadius: "76px",
                width: "235px",
                height: "31px",
                padding: "0 10px",
              }}
            />
          </Box>
          <Box onClick={handleToggleFilter} sx={{ cursor: "pointer" }}>
            <IoMdSettings size={24} />
          </Box>
        </Box>

        {/* Filter Modal */}
        {showFilter && (
          <Box
            sx={{
              position: "absolute",
              top: "60px",
              left: "10%",
              right: "10%",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
              padding: "20px",
              maxWidth: "400px",
            }}
          >
            <Text sx={{ fontWeight: "bold", fontSize: 18, mb: 3 }}>
              Search Filter
            </Text>
            <Divider sx={{ borderColor: "gray", mb: 3 }} />

            {/* Types */}
            <Text sx={{ fontSize: 14, fontWeight: "bold", mb: 2 }}>TYPES</Text>
            <Box sx={{ mb: 3 }}>
              <Text sx={{ display: "block", mb: 1 }}>All Types</Text>
              <Text sx={{ display: "block", mb: 1 }}>Most Upvoted Answers</Text>
              <Text sx={{ display: "block", mb: 1 }}>Most Recent</Text>
            </Box>

            {/* Subjects */}
            <Text sx={{ fontSize: 14, fontWeight: "bold", mb: 2 }}>
              SUBJECTS
            </Text>
            <Box sx={{ mb: 3 }}>
              {[
                "Mathematics",
                "Computer Studies",
                "Networking",
                "Geography",
                "Chemistry",
              ].map((subject, index) => (
                <Text key={index} sx={{ display: "block", mb: 1 }}>
                  {subject}
                </Text>
              ))}
            </Box>

            {/* Upload Date */}
            <Text sx={{ fontSize: 14, fontWeight: "bold", mb: 2 }}>
              UPLOAD DATE
            </Text>
            <Box sx={{ mb: 3 }}>
              {["Last Hour", "Today", "This Week", "This Month"].map(
                (timeFrame, index) => (
                  <Text key={index} sx={{ display: "block", mb: 1 }}>
                    {timeFrame}
                  </Text>
                )
              )}
            </Box>

            <Button
              onClick={handleToggleFilter}
              sx={{
                width: "100%",
                backgroundColor: "#0277bd",
                color: "white",
                borderRadius: "50px",
                textAlign: "center",
              }}
            >
              DONE
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}
