const BASE_URL = "https://secondaryschoolquora.onrender.com"; // Replace with your actual base URL

// Timeout utility for fetch
const fetchWithTimeout = (url: string, options: RequestInit, timeout = 10000) =>
  Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), timeout)
    ),
  ]);

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

  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetchWithTimeout(`${BASE_URL}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!(response instanceof Response)) {
      throw new Error("Invalid response from API");
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "An error occurred");
    }

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error in API call to ${endpoint}:`, error.message);
    } else {
      console.error(
        `An unknown error occurred in API call to ${endpoint}:`,
        error
      );
    }
    throw error; // Re-throw error to propagate it
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

export const signInWithGoogle = async (idToken: unknown) => {
  return apiCall("/auth", "POST", { idToken });
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
