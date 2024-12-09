import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Radio, Text, Spinner, Alert } from "theme-ui";
import { updateUserProfile } from "../utils/apiService"; // the same API service is used as setup profile

export default function SubjectCategory() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const token = getCookie("authToken"); //  "authToken"

  const handleCheckboxChange = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((item) => item !== subject)
        : [...prev, subject]
    );
  };

  const handleSubmit = async () => {
    if (!selectedSubjects.length) {
      setError("Please select at least one subject.");
      return;
    }

    setLoading(true);
    setError(null);

    if (!token) {
      setError("Authentication token is missing. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      // Convert selectedSubjects to a comma-separated string
      await updateUserProfile({ subjects: selectedSubjects.join(",") }, token);
      navigate("/profile-setup");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Failed to save subjects. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        as="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        sx={{
          padding: "10px",
          gap: "10px",
          background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
          maxWidth: 400,
          margin: "auto",
          alignContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", gap: 15, mb: 15 }}>
          <Heading sx={{ mt: 10 }}>SUBJECT CATEGORIES</Heading>
          <Text sx={{ mt: 10 }}>Choose your subject of interest</Text>
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
              key={subject}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Box
                as="li"
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
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => handleCheckboxChange(subject)}
                  sx={{
                    mr: 2,
                    borderRadius: "50%",
                    width: "22px",
                    height: "22px",
                  }}
                />
                {subject}
              </Box>
            </label>
          ))}
        </Box>

        {error && (
          <Alert sx={{ color: "red", mt: 3, textAlign: "center" }}>
            {error}
          </Alert>
        )}

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
            type="submit"
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              borderRadius: "54px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            disabled={loading}
          >
            {loading ? <Spinner size={24} /> : "NEXT"}
          </Button>
        </Box>
      </Box>
    </>
  );
}

// Utility function
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}
