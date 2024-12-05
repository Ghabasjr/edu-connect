// import { useNavigate } from "react-router-dom";
// import { Box, Button, Heading, Text } from "theme-ui";

// export default function WelcomePage() {
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     navigate("/Sign-in");
//   };

//   const handleSignUp = () => {
//     navigate("/Sign-up2");
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           maxWidth: "100%",
//           margin: "0 auto",
//           height: "100vh",
//           padding: ["20px", "30px", "40px"],
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           alignItems: "center",
//           background: "linear-gradient(to bottom,#9fc5e8, #f2f2f2)",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Logo Section */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             mt: [10, 15, 20],
//           }}
//         >
//           <img
//             src="/Education logo.png" // Path to public folder directly
//             alt="Graduation Hat"
//             style={{
//               width: "80px",
//               height: "80px",
//             }}
//           />
//         </Box>

//         {/* Heading Section */}
//         <Box sx={{ textAlign: "center", mt: [15, 20, 30] }}>
//           <Heading
//             sx={{
//               color: "black",
//               fontSize: [3, 4, 5],
//               lineHeight: "1.4",
//               padding: ["10px", "20px", "30px"],
//             }}
//           >
//             WELCOME
//             <img
//               src="/gross-striped-short-pencil-symbol.png" // Path to public folder directly
//               alt="Pencil Icon"
//               style={{
//                 width: "20px",
//                 height: "25px",
//                 marginLeft: "8px",
//               }}
//             />
//             TO
//             <br />
//             <Box
//               as="span"
//               sx={{
//                 display: "inline-flex",
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src="/mortarboard.png" // Path to public folder directly
//                 style={{
//                   width: "20px",
//                   height: "18px",
//                   marginRight: "8px",
//                 }}
//                 alt="Mortarboard Icon"
//               />
//             </Box>
//             EDUCONNECT
//           </Heading>
//           <Text
//             sx={{
//               fontSize: [1, 2, 3],
//               color: "black",
//               mt: "10px",
//             }}
//           >
//             Your academic home
//           </Text>
//         </Box>

//         {/* Button Section */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: [3, 4, 4],
//             mt: [20, 30, 40],
//             width: "100%",
//             maxWidth: "400px",
//           }}
//         >
//           <Button
//             sx={{
//               backgroundColor: "white",
//               color: "black",
//               border: "1px solid",
//               borderRadius: "8px",
//               width: "100%",
//               padding: "12px",
//               fontSize: [1, 2, 3],
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//             onClick={handleSignIn}
//           >
//             SIGN IN
//           </Button>
//           <Button
//             sx={{
//               backgroundColor: "white",
//               color: "black",
//               border: "1px solid",
//               borderRadius: "8px",
//               width: "100%",
//               padding: "12px",
//               fontSize: [1, 2, 3],
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//             onClick={handleSignUp}
//           >
//             SIGN UP
//           </Button>
//         </Box>

//         {/* Footer Section */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//             width: "100%",
//             maxWidth: "400px",
//             mt: [10, 15, 20],
//           }}
//         >
//           <img
//             src="/formula.png" // Path to public folder directly
//             alt="Formula Icon"
//             style={{ width: "40px", height: "40px" }}
//           />
//           <img
//             src="/science.png" // Path to public folder directly
//             alt="Science Icon"
//             style={{ width: "40px", height: "40px" }}
//           />
//         </Box>
//       </Box>
//     </>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/Sign-in");
  };

  const handleSignUp = () => {
    navigate("/Sign-up2");
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center h-screen bg-gradient-to-b from-[#9fc5e8] to-[#f2f2f2] p-5 sm:p-10 lg:p-16">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center mt-10 sm:mt-16 lg:mt-20">
          <img
            src="/Education logo.png"
            alt="Graduation Hat"
            className="w-20 h-20"
          />
        </div>

        {/* Heading Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-30">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl leading-snug py-2 sm:py-4 lg:py-6">
            WELCOME
            <img
              src="/gross-striped-short-pencil-symbol.png"
              alt="Pencil Icon"
              className="w-3 h-3 ml-2"
            />
            TO
            <br />
            <span className="inline-flex items-center">
              <img
                src="/mortarboard.png"
                alt="Mortarboard Icon"
                className="w-5 h-5 mr-2"
              />
              EDUCONNECT
            </span>
          </h1>
          <p className="text-black text-lg sm:text-xl lg:text-2xl mt-3">
            Your academic home
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col gap-4 mt-20 sm:mt-30 lg:mt-40 w-full max-w-md">
          <button
            className="bg-white text-black border border-black rounded-xl py-3 text-lg sm:text-xl lg:text-2xl font-semibold cursor-pointer w-full"
            onClick={handleSignIn}
          >
            SIGN IN
          </button>
          <button
            className="bg-white text-black border border-black rounded-xl py-3 text-lg sm:text-xl lg:text-2xl font-semibold cursor-pointer w-full"
            onClick={handleSignUp}
          >
            SIGN UP
          </button>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center w-full max-w-md mt-10 sm:mt-15 lg:mt-20">
          <img src="/formula.png" alt="Formula Icon" className="w-10 h-10" />
          <img src="/science.png" alt="Science Icon" className="w-10 h-10" />
        </div>
      </div>
    </>
  );
}
