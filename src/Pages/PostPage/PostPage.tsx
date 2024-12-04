import { useNavigate } from "react-router-dom";
import { Box, Button, Close, Image, Select, Textarea } from "theme-ui";

export default function PostPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/edit-profile");
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
          sx={{
            backgroundColor: "primary",
            color: "gray",
            fontWeight: "bold",
            cursor: "pointer",
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
            backgroundColor: "white",
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
    </Box>
  );
}
