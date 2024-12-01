// const BASE_URL = "https://secondaryschoolquora.onrender.com"; // Replace with your actual base URL

// // Helper function for API calls
// const apiCall = async (
//   endpoint: string,
//   method = "GET",
//   body = null,
//   token = null
// ) => {
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }

//   try {
//     const response = await fetch(`${BASE_URL}${endpoint}`, {
//       method,
//       headers,
//       body: body ? JSON.stringify(body) : null,
//     });

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "Something went wrong");
//     }

//     return data;
//   } catch (error) {
//     console.error(`Error in API call to ${endpoint}:`, error);
//     throw error;
//   }
// };

// // Registration API
// export const registerUser = (userDetails: null | undefined) =>
//   apiCall("/register", "POST", userDetails);

// // Update profile API
// export const updateUserProfile = (
//   profileDetails: null | undefined,
//   token: null | undefined
// ) => apiCall("/update-info", "PUT", profileDetails, token);

// // Get user profile API
// export const getUserProfile = (token: null | undefined) =>
//   apiCall("/profile", "GET", null, token);

const BASE_URL = "https://secondaryschoolquora.onrender.com"; // Replace with your actual base URL

// Helper function for API calls
const apiCall = async (
  endpoint: string,
  method = "GET",
  body: any = null,
  token: string | null = null
) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error(`Error in API call to ${endpoint}:`, error);
    throw error;
  }
};

// Login API
export const loginUser = async (email: string, password: string) => {
  return apiCall("/login", "POST", { email, password });
};

// Registration API
export const registerUser = async (userDetails: any) =>
  apiCall("/register", "POST", userDetails);

// Update profile API
export const updateUserProfile = async (profileDetails: any, token: string) =>
  apiCall("/update-info", "PUT", profileDetails, token);

// Get user profile API
export const getUserProfile = async (token: string) =>
  apiCall("/profile", "GET", null, token);
