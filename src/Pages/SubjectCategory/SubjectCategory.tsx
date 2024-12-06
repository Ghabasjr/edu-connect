import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Radio, Text, Spinner } from "theme-ui";

export default function SubjectCategory() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true); // Show spinner
    setTimeout(() => {
      navigate("/profile-setup");
      setLoading(false); // Hide spinner after navigation
    }, 1500); // Simulate a delay for demonstration
  };

  return (
    <>
      <Box
        as="form"
        sx={{
          padding: "10px",
          gap: "10px",
          background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
          maxWidth: 400,
          margin: "auto auto",
          alignContent: "center",
          height: "100vh",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            gap: 15,
            backgroundRepeat: "no-repeat",
            mb: 15,
          }}
        >
          <Box>
            <Heading sx={{ mt: 10 }}>SUBJECT CATEGORIES</Heading>
          </Box>
          <Box sx={{ mt: 15 }}>
            <Text sx={{ mt: 10 }}>Choose your subject of interest</Text>
          </Box>
        </Box>
        <Box
          as="ul"
          sx={{ listStyleType: "none", fontSize: "20px", padding: 0, mt: 15 }}
        >
          {[
            "Mathematics",
            "English Language",
            "Physics",
            "Chemistry",
            "Biology",
            "Visual Arts",
            "Accounting",
            "Government",
            "Literature",
            "Economics",
            "History",
            "Social Studies",
            "Civic Education",
            "Commerce",
            "Computer Science",
          ].map((subject) => (
            <label
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Box
                as="li"
                key={subject}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  borderRadius: "10px",
                }}
              >
                <Radio
                  type="checkbox"
                  name="subject"
                  sx={{
                    mr: 2,
                    borderRadius: "50%", // Fully round shape
                    width: "22px",
                    height: "22px",
                  }}
                />
                {subject}
              </Box>
            </label>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "end",
            mt: 15,
          }}
        >
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              background: "white",
              border: "1px solid black",
              borderRadius: "54px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleSubmit}
            disabled={loading} // Disable the button while loading
          >
            {loading ? <Spinner size={24} /> : "NEXT"}
          </Button>
        </Box>
      </Box>
    </>
  );
}
