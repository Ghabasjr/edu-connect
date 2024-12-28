// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Box, Button, Flex, Image, Input, Paragraph, Text } from "theme-ui";
// import { getUserProfile } from "../../Pages/utils/apiService";
// import { IoIosNotifications } from "react-icons/io";
// import HorizontalLine from "../HorizontalLine/HorizontalLine";
// import { CiCircleQuestion, CiSettings } from "react-icons/ci";
// import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// import { GoHome } from "react-icons/go";
// import { TbLogout } from "react-icons/tb";

// export default function DashBoard() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [userProfile, setUserProfile] = useState(null);
//   const [error, setError] = useState("");

//   interface UserProfile {
//     picture: string;
//     name: string;
//   }
//   const userProfile: UserProfile = {
//     picture: "/path-to-picture.png",
//     name: "John Doe",
//   };

//   // useEffect(() => {
//   //   const fetchProfile = async () => {
//   //     try {
//   //       const profile = await getUserProfile();
//   //       setUserProfile(profile);
//   //     } catch (err) {
//   //       setError("Failed to fetch user profile. Please log in again.");
//   //       console.error(err);
//   //     }
//   //   };

//   //   // Redirect to login if no token
//   //   if (!localStorage.getItem("token")) {
//   //     navigate("/sign-in");
//   //   } else {
//   //     fetchProfile();
//   //   }
//   // }, [navigate]);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           navigate("/sign-in");
//           return;
//         }

//         const profile = await getUserProfile(token); // Pass token here
//         setUserProfile(profile);
//       } catch (err) {
//         setError("Failed to fetch user profile. Please log in again.");
//         console.error(err);
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   const handleProfile = () => {
//     navigate("/edit-profile");
//   };

//   const handleQuestion = () => {
//     navigate("/post-page");
//   };

//   const handleSearch = () => {
//     navigate("/search");
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleNotify = () => {
//     navigate("/notifications-page");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     sessionStorage.clear();
//     navigate("/sign-in");
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           width: "100%",
//           minHeight: "100vh",
//           background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
//           padding: "20px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           fontFamily: "Arial, sans-serif",
//         }}
//       >
//         {/* Top Navigation Bar */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//             maxWidth: "500px",
//             mb: "20px",
//           }}
//         >
//           <img
//             src="/Education logo.png"
//             alt="Education Logo"
//             style={{ width: "45px", height: "45px" }}
//           />
//           <Box sx={{ display: "flex", gap: "20px" }}>
//             <img src="/add.png" alt="Add Icon" />
//             <img
//               src="/search (2).png"
//               alt="Search Icon"
//               onClick={handleSearch}
//             />
//             <img
//               src="/vinijr.png"
//               alt="Menu Icon"
//               onClick={toggleMenu}
//               style={{ cursor: "pointer" }}
//             />
//           </Box>
//         </Box>

//         {/* User Greeting */}
//         <Box sx={{ mb: "20px", textAlign: "center" }}>
//           {userProfile ? (
//             <>
//               <Image
//                 src={userProfile?.picture || "/default-avatar.png"}
//                 alt="Profile"
//                 sx={{
//                   width: "60px",
//                   height: "60px",
//                   borderRadius: "50%",
//                   mb: "10px",
//                 }}
//               />
//               <Text sx={{ fontSize: "18px", fontWeight: "bold" }}>
//                 Welcome, {userProfile?.name || "Guest"}
//               </Text>
//             </>
//           ) : (
//             <Text>{error || "Loading user profile..."}</Text>
//           )}
//         </Box>

//         {/* Bottom Navigation */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-evenly",
//             alignItems: "center",
//             width: "100%",
//             maxWidth: "500px",
//             mb: "20px",
//           }}
//         >
//           <img src="/home.png" alt="Home Icon" />
//           <img src="/home3.png" alt="Explore Icon" />
//           <img src="/icon4.png" alt="Bookmark Icon" />
//           <img
//             src="/notification.png"
//             alt="Notification Icon"
//             onClick={handleNotify}
//           />
//         </Box>

//         {/* Input Section */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             gap: "15px",
//             width: "100%",
//             maxWidth: "500px",
//             mb: "20px",
//           }}
//         >
//           <Image
//             src={userProfile?.picture || "/Ellipse 1.png"}
//             alt="Profile Icon"
//             style={{
//               width: "45px",
//               height: "45px",
//               borderRadius: "50%",
//               cursor: "pointer",
//             }}
//             onClick={handleProfile}
//           />
//           <Input
//             placeholder="What do you want to ask?"
//             sx={{
//               flex: 1,
//               borderRadius: "20px",
//               border: "1px solid black",
//               padding: "10px",
//               backgroundColor: "white",
//             }}
//             onClick={handleQuestion}
//           />
//         </Box>

//         {/* Posts Section */}
//         {["History", "Mathematics", "Computer Studies"].map((topic, index) => (
//           <Box
//             key={index}
//             sx={{
//               width: "100%",
//               maxWidth: "500px",
//               borderRadius: "10px",
//               boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
//               padding: "15px",
//               mb: "15px",
//             }}
//           >
//             {/* User Info */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 mb: "10px",
//               }}
//             >
//               <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                 <img
//                   src="/Ellipse 2 (1).png"
//                   alt="User Avatar"
//                   style={{
//                     width: "45px",
//                     height: "45px",
//                     borderRadius: "50%",
//                   }}
//                 />
//                 <Box>
//                   <Text sx={{ fontWeight: "bold", fontSize: "16px" }}>
//                     Angel Nancy
//                   </Text>
//                   <Text sx={{ fontSize: "12px", color: "gray" }}>Nov 24</Text>
//                 </Box>
//               </Box>
//               <Text
//                 sx={{
//                   fontSize: "14px",
//                   fontWeight: "bold",
//                   color: "#555",
//                 }}
//               >
//                 {topic}
//               </Text>
//             </Box>

//             {/* Post Content */}
//             <Paragraph
//               sx={{
//                 fontSize: "14px",
//                 lineHeight: "1.5",
//                 color: "#333",
//                 mb: "15px",
//               }}
//             >
//               History is the act of inquiring into the past in order to
//               understand the issues of the present and plan ahead for the
//               future. One of the great scholars of history...{" "}
//               <Text sx={{ color: "#007BFF", cursor: "pointer" }}>
//                 Read more
//               </Text>
//             </Paragraph>

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Image, Input, Paragraph, Text } from "theme-ui";
import { getUserProfile } from "../../Pages/utils/apiService";
import { IoIosNotifications } from "react-icons/io";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { TbLogout } from "react-icons/tb";

export default function DashBoard() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState("");

  interface UserProfile {
    picture: string;
    name: string;
  }

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/sign-in");
          return;
        }

        const profile = await getUserProfile(token); // Pass token here
        setUserProfile(profile);
      } catch (err) {
        setError("Failed to fetch user profile. Please log in again.");
        console.error(err);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleProfile = () => {
    navigate("/edit-profile");
  };

  const handleQuestion = () => {
    navigate("/post-page");
  };

  const handleSearch = () => {
    navigate("/search");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNotify = () => {
    navigate("/notifications-page");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/sign-in");
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #9fc5e8, #f2f2f2)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Top Navigation Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "500px",
            mb: "20px",
          }}
        >
          <img
            src="/Education logo.png"
            alt="Education Logo"
            style={{ width: "45px", height: "45px" }}
          />
          <Box sx={{ display: "flex", gap: "20px" }}>
            <img src="/add.png" alt="Add Icon" />
            <img
              src="/search (2).png"
              alt="Search Icon"
              onClick={handleSearch}
            />
            <img
              src="/vinijr.png"
              alt="Menu Icon"
              onClick={toggleMenu}
              style={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        {/* User Greeting */}
        <Box sx={{ mb: "20px", textAlign: "center" }}>
          {userProfile ? (
            <>
              <Image
                src={userProfile.picture || "/default-avatar.png"}
                alt="Profile"
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  mb: "10px",
                }}
              />
              <Text sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Welcome, {userProfile.name || "Guest"}
              </Text>
            </>
          ) : (
            <Text>{error || "Loading user profile..."}</Text>
          )}
        </Box>

        {/* Bottom Navigation */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            maxWidth: "500px",
            mb: "20px",
          }}
        >
          <img src="/home.png" alt="Home Icon" />
          <img src="/home3.png" alt="Explore Icon" />
          <img src="/icon4.png" alt="Bookmark Icon" />
          <img
            src="/notification.png"
            alt="Notification Icon"
            onClick={handleNotify}
          />
        </Box>

        {/* Input Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            width: "100%",
            maxWidth: "500px",
            mb: "20px",
          }}
        >
          <Image
            src={userProfile?.picture || "/Ellipse 1.png"}
            alt="Profile Icon"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={handleProfile}
          />
          <Input
            placeholder="What do you want to ask?"
            sx={{
              flex: 1,
              borderRadius: "20px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "white",
            }}
            onClick={handleQuestion}
          />
        </Box>

        {/* Posts Section */}
        {["History", "Mathematics", "Computer Studies"].map((topic, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              mb: "15px",
            }}
          >
            {/* User Info */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="/Ellipse 2 (1).png"
                  alt="User Avatar"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                  }}
                />
                <Box>
                  <Text sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Angel Nancy
                  </Text>
                  <Text sx={{ fontSize: "12px", color: "gray" }}>Nov 24</Text>
                </Box>
              </Box>
              <Text
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                {topic}
              </Text>
            </Box>

            {/* Post Content */}
            <Paragraph
              sx={{
                fontSize: "14px",
                lineHeight: "1.5",
                color: "#333",
                mb: "15px",
              }}
            >
              History is the act of inquiring into the past in order to
              understand the issues of the present and plan ahead for the
              future. One of the great scholars of history...
              <Text sx={{ color: "#007BFF", cursor: "pointer" }}>
                {" "}
                Read more
              </Text>
            </Paragraph>

            {/* Action Buttons */}

            {/* Action Buttons */}
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  borderRadius: "20px",
                  padding: "5px 10px",
                  backgroundColor: "background",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                <img
                  src="/upvote.png"
                  alt="Upvote Icon"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
                Upvote. 2.1k
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  borderRadius: "20px",
                  padding: "5px 10px",
                  backgroundColor: "#f0f0f0",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                <img
                  src="/answers.png"
                  alt="Answer Icon"
                  style={{ width: "16px" }}
                />
                Answer
              </Button>
              <Text
                sx={{
                  fontSize: "18px",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                ...
              </Text>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Overlay */}
      {isMenuOpen && (
        <Box
          onClick={toggleMenu}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        ></Box>
      )}

      {/* Menu */}
      {isMenuOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "36px",
            left: ["114.71px", "0.5px"],
            width: "293.71px",
            height: "775px",
            backgroundColor: "white",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 999,
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <Button
            onClick={toggleMenu}
            sx={{
              backgroundColor: "transparent",
              border: "none",
              color: "text",
              fontSize: "18px",
              cursor: "pointer",
              padding: 0,
              marginBottom: "20px",
            }}
          >
            ✖ Close
          </Button>

          <Flex sx={{ flexDirection: "column", gap: "20px" }}>
            <HorizontalLine />
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              <GoHome /> Home
            </Text>
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              ❓ Questions
            </Text>
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              <HiOutlineAdjustmentsHorizontal /> Subject Categories
            </Text>
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              <IoIosNotifications /> Notifications
            </Text>
            <HorizontalLine />
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              <CiSettings />
              Settings & Privacy
            </Text>
            <Text sx={{ fontSize: "18px", cursor: "pointer" }}>
              <CiCircleQuestion /> Help Center
            </Text>
            <Text
              sx={{ fontSize: "18px", cursor: "pointer" }}
              onClick={handleLogout}
            >
              <TbLogout /> Logout
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
}
