import { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Box, Input, Text, Divider, Button } from "theme-ui";

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
          width: "375px",
          height: "812px",
          top: "360px",
          left: "104px",
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
              top: "77px",
              left: "94px",
              //   right: "10%",
              //   backgroundColor: "linear",
              background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
              //   padding: "20px",
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Arial, sans-serif",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
              padding: "20px",
              width: "280px",
              height: "680px",
              //   maxWidth: "400px",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                gap: "5px",
                justifyContent: "space-between",
              }}
            >
              <Text sx={{ fontWeight: "bold", fontSize: 18, mb: 3 }}>
                Search Filter
              </Text>
              <img
                src="/times.png"
                style={{
                  width: "13.18px",
                  height: "13.18px",
                  top: "2.99",
                  left: "2.99",
                  cursor: "pointer",
                }}
                onClick={handleToggleFilter}
              />
            </Box>
            <Divider sx={{ borderColor: "gray", mb: 3 }} />
            {/* Types */}
            <Text
              sx={{
                fontSize: 14,
                fontWeight: "600",
                mb: 2,
                width: "40px",
                height: "15px",
                top: "154px",
                left: "214px",
              }}
            >
              TYPES
            </Text>
            <Divider sx={{ borderColor: "gray" }} />
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
              sx={{
                backgroundColor: "#9fc5e8",
                width: "75.74px",
                height: "32.46px",
                top: "657.29px",
                left: "196.13px",
                borderRadius: "42.39px",
                color: "black",
                border: "1.57px solid black",
              }}
              onClick={handleToggleFilter}
            >
              Done
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}
