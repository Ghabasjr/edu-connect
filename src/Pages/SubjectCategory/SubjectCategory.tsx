import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Radio, Text } from "theme-ui";

export default function SubjectCategory() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/profile-setup");
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
            }}
            onClick={handleSubmit}
          >
            NEXT
          </Button>
        </Box>
      </Box>
    </>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Button, Heading, Radio, Text, Spinner } from "theme-ui";
// // import { sendSubjectToBackend } from "../utils/apiService"; // Import the API call

// export default function SubjectCategory() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false); // Track loading state
//   const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

//   // Handle subject selection
//   const handleSubjectChange = (subject: string) => {
//     setSelectedSubject(subject);
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     if (!selectedSubject) {
//       alert("Please select a subject.");
//       return;
//     }

//     setLoading(true); // Set loading state to true when submitting

//     try {
//       // Send the selected subject to the backend
//       await sendSubjectToBackend(selectedSubject);
//       // Redirect after successful API call
//       navigate("/profile-setup");
//     } catch (error) {
//       console.error("Error sending subject to backend:", error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false); // Reset loading state after the API call is done
//     }
//   };

//   return (
//     <>
//       <Box
//         as="form"
//         sx={{
//           padding: "10px",
//           gap: "10px",
//           background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
//           maxWidth: 400,
//           margin: "auto auto",
//           alignContent: "center",
//           height: "100vh",
//           alignItems: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <Box
//           sx={{
//             textAlign: "center",
//             gap: 15,
//             backgroundRepeat: "no-repeat",
//             mb: 15,
//           }}
//         >
//           <Box>
//             <Heading sx={{ mt: 10 }}>SUBJECT CATEGORIES</Heading>
//           </Box>
//           <Box sx={{ mt: 15 }}>
//             <Text sx={{ mt: 10 }}>Choose your subject of interest</Text>
//           </Box>
//         </Box>
//         <Box
//           as="ul"
//           sx={{ listStyleType: "none", fontSize: "20px", padding: 0, mt: 15 }}
//         >
//           {[
//             "Mathematics",
//             "English Language",
//             "Physics",
//             "Chemistry",
//             "Biology",
//             "Visual Arts",
//             "Accounting",
//             "Government",
//             "Literature",
//             "Economics",
//             "History",
//             "Social Studies",
//             "Civic Education",
//             "Commerce",
//             "Computer Science",
//           ].map((subject) => (
//             <label
//               key={subject}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 cursor: "pointer",
//               }}
//             >
//               <Box
//                 as="li"
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   mb: 2,
//                   borderRadius: "10px",
//                 }}
//               >
//                 <Radio
//                   type="radio"
//                   name="subject"
//                   value={subject}
//                   sx={{
//                     mr: 2,
//                     borderRadius: "50%", // Fully round shape
//                     width: "22px",
//                     height: "22px",
//                   }}
//                   onChange={() => handleSubjectChange(subject)} // Update the selected subject
//                 />
//                 {subject}
//               </Box>
//             </label>
//           ))}
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "end",
//             justifyContent: "end",
//             mt: 15,
//           }}
//         >
//           <Button
//             sx={{
//               backgroundColor: "white",
//               color: "black",
//               background: "white",
//               border: "1px solid black",
//               borderRadius: "54px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             onClick={handleSubmit}
//             disabled={loading} // Disable the button when loading
//           >
//             {loading ? (
//               <Spinner size={20} color="black" sx={{ mr: 2 }} /> // Show spinner while loading
//             ) : (
//               "NEXT"
//             )}
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// }
