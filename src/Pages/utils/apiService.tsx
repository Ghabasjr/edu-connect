const BASE_URL = "https://secondaryschoolquora.onrender.com"; // Replace with your actual base URL

// Helper function for API calls
const apiCall = async (
  endpoint: string,
  method: string,
  body: unknown = null,
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

// Authentication APIs

// Register a new user
export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  return apiCall("/register", "POST", { username, email, password });
};

// Log in a user
export const loginUser = async (identifier: string, password: string) => {
  return apiCall("/login", "POST", { identifier, password });
};

// Log out a user
export const logoutUser = async (token: string) =>
  apiCall("/logout", "POST", null, token);

// Verify user email
export const verifyEmail = async (verificationToken: string) =>
  apiCall(`/verify-email/${verificationToken}`, "GET");

// User Management APIs

// Fetch logged-in user's profile
export const getUserProfile = async (token: string) =>
  apiCall("/profile", "GET", null, token);

// Update user profile details
export const updateUserProfile = async (
  profileDetails: unknown,
  token: string
) => apiCall("/update-info", "PUT", profileDetails, token);

// Fetch public profile by username
export const getPublicProfile = async (username: string) =>
  apiCall(`/get-user/${username}`, "GET");

// Update password
export const updatePassword = async (
  newPasswordDetails: unknown,
  token: string
) => apiCall("/update-password", "PUT", newPasswordDetails, token);

// Admin APIs

// Update a user's role (Admin only)
export const updateUserRole = async (
  username: string,
  newRoleDetails: unknown,
  token: string
) => apiCall(`/update-role/${username}`, "PUT", newRoleDetails, token);
