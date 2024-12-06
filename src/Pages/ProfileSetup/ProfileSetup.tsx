// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Heading, Text, Input, Button, Spinner } from "theme-ui";

// function ProfileSetup() {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     setLoading(true);
//     setTimeout(() => {
//       navigate("/dash-board");
//       setLoading(false);
//     }, 1500);
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
//   const imgStyles = {};

//   return (
//     <>
//       <Box
//         as="form"
//         sx={{
//           maxWidth: 400,
//           margin: "auto auto",
//           alignContent: "center",
//           height: "100vh",
//           background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
//         }}
//       >
//         <Box
//           sx={{
//             alignItems: "center",
//             justifyContent: "center",
//             display: "flex",
//           }}
//         >
//           <Heading>SETUP PROFILE</Heading>
//         </Box>

//         <Box sx={{ display: "flex", justifyContent: "center", mt: "30px" }}>
//           <Button
//             sx={{
//               backgroundColor: "white",
//               borderRadius: "50%",
//               background: "white",
//             }}
//           >
//             <img src="/camera.png" alt="Profile Setup Icon" style={imgStyles} />
//           </Button>
//         </Box>

//         <Box sx={{ gap: 20, mt: 4 }}>
//           <Text>
//             Bio
//             <img src="/_.png" alt="Underline Icon" />
//           </Text>
//           <Box sx={{ mt: 3 }}>
//             <Input sx={inputStyles} placeholder="" />
//           </Box>
//         </Box>
//         <Box sx={{ gap: 20, mt: 4 }}>
//           <Text>
//             School
//             <img src="/_.png" alt="Underline Icon" />
//           </Text>
//           <Box sx={{ mt: 3 }}>
//             <Input sx={inputStyles} placeholder="Enter your School" />
//           </Box>
//         </Box>

//         <Box sx={{ gap: 20, mt: 4 }}>
//           <Text>
//             Grade
//             <img src="/_.png" alt="Underline Icon" />
//           </Text>
//           <Box sx={{ mt: 3 }}>
//             <Input sx={inputStyles} placeholder="Enter your Grade" />
//           </Box>
//         </Box>

//         <Box sx={{ gap: 20, mt: 4 }}>
//           <Text>
//             Date of Birth
//             <img src="/_.png" alt="Underline Icon" />
//           </Text>
//           <Box sx={{ mt: 3 }}>
//             <Input sx={inputStyles} placeholder="Enter your Date of Birth" />
//           </Box>
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "end",
//             justifyContent: "center", // Center the button
//             mt: 20,
//           }}
//         >
//           <Button
//             sx={{
//               color: "black",
//               background: "white",
//               border: "1px solid black",
//               borderRadius: "54px",
//               cursor: loading ? "not-allowed" : "pointer",
//             }}
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? <Spinner size={24} /> : "DONE"}
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default ProfileSetup;

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
