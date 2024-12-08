// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Heading, Text, Input, Button, Spinner, Alert } from "theme-ui";
// import { updateUserProfile } from "../utils/apiService";

// function ProfileSetup() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     bio: "",
//     school: "",
//     grade: "",
//     dob: "",
//   });
//   const navigate = useNavigate();
//   const token = getCookie("authToken"); // Replace "authToken" with the actual cookie name

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     if (!token) {
//       setError("Authentication token is missing. Please log in again.");
//       setLoading(false);
//       return;
//     }

//     try {
//       await updateUserProfile(formData, token);
//       navigate("/dash-board");
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (err: any) {
//       setError(err.message || "Failed to update profile. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputStyles = {
//     border: "none",
//     borderBottom: "2px solid black",
//     borderRadius: 0,
//     outline: "none",
//     fontSize: "16px",
//     paddingX: 0,
//     paddingY: 1,
//     width: "100%",
//   };

//   return (
//     <Box
//       as="form"
//       onSubmit={handleSubmit}
//       sx={{
//         maxWidth: 400,
//         margin: "auto",
//         height: "100vh",
//         background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
//         padding: "20px",
//       }}
//     >
//       <Box sx={{ textAlign: "center" }}>
//         <Heading>SETUP PROFILE</Heading>
//       </Box>

//       <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
//         <Button
//           sx={{
//             backgroundColor: "white",
//             borderRadius: "50%",
//           }}
//         >
//           <img src="/camera.png" alt="Profile Setup Icon" />
//         </Button>
//       </Box>

//       <Box sx={{ mt: 4 }}>
//         <Text>Bio</Text>
//         <Input
//           name="bio"
//           sx={inputStyles}
//           value={formData.bio}
//           onChange={handleChange}
//           placeholder="Enter your bio"
//         />
//       </Box>

//       <Box sx={{ mt: 4 }}>
//         <Text>
//           School <img src="/_.png" />
//         </Text>
//         <Input
//           name="school"
//           sx={inputStyles}
//           value={formData.school}
//           onChange={handleChange}
//           placeholder="Enter your School"
//         />
//       </Box>

//       <Box sx={{ mt: 4 }}>
//         <Text>
//           Grade <img src="/_.png" />
//         </Text>
//         <Input
//           name="grade"
//           sx={inputStyles}
//           value={formData.grade}
//           onChange={handleChange}
//           placeholder="Enter your Grade"
//         />
//       </Box>

//       <Box sx={{ mt: 4 }}>
//         <Text>
//           Date of Birth
//           <img src="/_.png" />
//         </Text>
//         <Input
//           name="dob"
//           sx={inputStyles}
//           value={formData.dob}
//           onChange={handleChange}
//           placeholder="Enter your Date of Birth"
//         />
//       </Box>

//       {error && (
//         <Alert sx={{ color: "red", mt: 3, textAlign: "center" }}>{error}</Alert>
//       )}

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           mt: 20,
//         }}
//       >
//         <Button
//           type="submit"
//           sx={{
//             color: "black",
//             background: "white",
//             border: "1px solid black",
//             borderRadius: "54px",
//             cursor: loading ? "not-allowed" : "pointer",
//           }}
//           disabled={loading}
//         >
//           {loading ? <Spinner size={24} /> : "DONE"}
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// export default ProfileSetup;

// // Utility function
// function getCookie(name: string): string | null {
//   const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
//   return match ? decodeURIComponent(match[2]) : null;
// }
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

      {["bio", "school", "grade", "dob"].map((field) => (
        <Box key={field} sx={{ mt: 4 }}>
          <Text>
            {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
            <Text as="span" sx={{ color: "red" }}>
              *
            </Text>
          </Text>
          <Input
            name={field}
            sx={inputStyles}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            placeholder={`Enter your ${field}`}
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
