import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Input, Button, Spinner, Alert } from "theme-ui";
import { updateUserProfile } from "../utils/apiService"; // Import the updateUserProfile function

function ProfileSetup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    bio: "",
    school: "",
    grade: "",
    dob: "",
  });
  const navigate = useNavigate();
  const token = "string";

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log("Token", token);
      // Call the updateUserProfile API
      await updateUserProfile(formData, token);

      // Navigate to dashboard on success
      navigate("/dash-board");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      // Handle API error
      setError(err.message || "Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    border: "none",
    borderBottom: "2px solid black",
    borderRadius: 0,
    outline: "none",
    fontSize: "16px",
    paddingX: 0,
    paddingY: 1,
    width: "100%",
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "auto",
        height: "100vh",
        background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
        padding: "20px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Heading>SETUP PROFILE</Heading>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
        <Button
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        >
          <img src="/camera.png" alt="Profile Setup Icon" />
        </Button>
      </Box>

      {/* Form Fields */}
      <Box sx={{ mt: 4 }}>
        <Text>Bio</Text>
        <Input
          name="bio"
          sx={inputStyles}
          value={formData.bio}
          onChange={handleChange}
          placeholder="Enter your bio"
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Text>School</Text>
        <Input
          name="school"
          sx={inputStyles}
          value={formData.school}
          onChange={handleChange}
          placeholder="Enter your School"
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Text>Grade</Text>
        <Input
          name="grade"
          sx={inputStyles}
          value={formData.grade}
          onChange={handleChange}
          placeholder="Enter your Grade"
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Text>Date of Birth</Text>
        <Input
          name="dob"
          sx={inputStyles}
          value={formData.dob}
          onChange={handleChange}
          placeholder="Enter your Date of Birth"
        />
      </Box>

      {/* Error Message */}
      {error && (
        <Alert sx={{ color: "red", mt: 3, textAlign: "center" }}>{error}</Alert>
      )}

      {/* Submit Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 20,
        }}
      >
        <Button
          type="submit"
          sx={{
            color: "black",
            background: "white",
            border: "1px solid black",
            borderRadius: "54px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
          disabled={loading}
        >
          {loading ? <Spinner size={24} /> : "DONE"}
        </Button>
      </Box>
    </Box>
  );
}

export default ProfileSetup;
