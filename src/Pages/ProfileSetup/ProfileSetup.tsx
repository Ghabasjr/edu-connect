import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Heading, Text, Input, Button, Spinner, Alert } from "theme-ui";
import { updateUserProfile } from "../utils/apiService";

function ProfileSetup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    bio: "",
    school: "",
    grade: "",
    dob: "",
  });
  const navigate = useNavigate();
  const token = getCookie("authToken"); // Replace "authToken" with the actual cookie name

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { bio, school, grade, dob } = formData;
    if (!bio || !school || !grade || !dob) {
      setError("All fields are required. Please complete the form.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    if (!token) {
      setError("Authentication token is missing. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const response = await updateUserProfile(formData, token);
      setSuccess(response.message || "Profile updated successfully.");
      setTimeout(() => navigate("/dash-board"), 2000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
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

  const fields = [
    { name: "bio", label: "Bio" },
    { name: "school", label: "School" },
    { name: "grade", label: "Grade" },
    { name: "dob", label: "Date of Birth" },
  ];

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

      {fields.map(({ name, label }) => (
        <Box key={name} sx={{ mt: 4 }}>
          <Text>
            {label}{" "}
            {name !== "bio" && (
              <Text as="span" sx={{ color: "red" }}>
                *
              </Text>
            )}
          </Text>
          <Input
            name={name}
            sx={inputStyles}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
            placeholder={`Enter your ${label}`}
          />
        </Box>
      ))}

      {error && (
        <Alert sx={{ color: "red", mt: 3, textAlign: "center" }}>{error}</Alert>
      )}

      {success && (
        <Alert sx={{ color: "green", mt: 3, textAlign: "center" }}>
          {success}
        </Alert>
      )}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 20 }}>
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

// Utility function
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}
