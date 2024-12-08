import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Close, Image, Select, Textarea } from "theme-ui";

export default function PostPage() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [showDiscardPopup, setShowDiscardPopup] = useState(false);

  const handleNavigate = () => {
    if (question.trim()) {
      setShowDiscardPopup(true);
    } else {
      navigate("/edit-profile");
    }
  };

  const handleDiscard = () => {
    setShowDiscardPopup(false);
    setQuestion("");
  };

  const handleContinue = () => {
    setShowDiscardPopup(false);
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
        alignItems: "center",
        background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px 20px",
        }}
      >
        <Close onClick={handleNavigate} sx={{ cursor: "pointer" }} />
        <Button
          disabled={!question.trim()}
          sx={{
            backgroundColor: question.trim() ? "#007bff" : "gray",
            color: "white",
            fontWeight: "bold",
            cursor: question.trim() ? "pointer" : "not-allowed",
            borderRadius: "20px",
            padding: "5px 15px",
          }}
        >
          Post
        </Button>
      </Box>

      {/* Profile Image and Dropdown */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "90%",
          marginTop: "20px",
          gap: "15px",
        }}
      >
        {/* Profile Icon */}
        <Image
          src="/Ellipse 1.png"
          alt="Profile Icon"
          sx={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />

        {/* Subject Dropdown */}
        <Select
          defaultValue="Select Subjects"
          sx={{
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
            padding: "5px 10px",
            fontSize: "16px",
            backgroundColor: "#9fc5e8",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <option>Select Subjects</option>
          <option value="Mathematics">Mathematics</option>
          <option value="English Language">English Language</option>
          <option value="History">History</option>
          <option value="Visual Art">Visual Art</option>
          <option value="Physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
          <option value="accounting">Accounting</option>
          <option value="literature">Literature</option>
          <option value="economics">Economics</option>
          <option value="government">Government</option>
          <option value="social studies">Social Studies</option>
          <option value="further maths">Further Mathematics</option>
        </Select>
      </Box>

      {/* Question Input Area */}
      <Box
        sx={{
          width: "90%",
          marginTop: "30px",
        }}
      >
        <Textarea
          placeholder="What's your question?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{
            width: "100%",
            minHeight: "150px",
            border: "none",
            padding: "10px",
            fontSize: "16px",
            resize: "none",
          }}
        />
      </Box>

      {/* Discard Popup */}
      {showDiscardPopup && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        >
          <Box
            sx={{
              backgroundColor: "black",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              width: "80%",
              maxWidth: "400px",
            }}
          >
            <p>Are you sure you want to discard this question?</p>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleDiscard}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px 15px",
                }}
              >
                Discard
              </Button>
              <Button
                onClick={handleContinue}
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "10px",
                  padding: "5px 15px",
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
