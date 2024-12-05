// const BASE_URL = "https://secondaryschoolquora.onrender.com";

// // Timeout utility for fetch
// const fetchWithTimeout = (url: string, options: RequestInit, timeout = 10000) =>
//   Promise.race([
//     fetch(url, options),
//     new Promise((_, reject) =>
//       setTimeout(() => reject(new Error("Request timeout")), timeout)
//     ),
//   ]);

// // Centralized API service
// const apiCall = async (
//   endpoint: string,
//   method: string,
//   body: unknown = null,
//   token: string | null = null
// ) => {
//   const headers: Record<string, string> = {
//     "Content-Type": "application/json",
//   };

//   if (token) headers.Authorization = `Bearer ${token}`;

//   try {
//     const response = await fetchWithTimeout(`${BASE_URL}${endpoint}`, {
//       method,
//       headers,
//       body: body ? JSON.stringify(body) : null,
//     });

//     if (!(response instanceof Response)) {
//       throw new Error("Invalid response from API");
//     }

//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || "An error occurred");
//     }

//     return data;
//   } catch (error) {
//     console.error(
//       `Error in API call to ${endpoint}:`,
//       error instanceof Error ? error.message : error
//     );
//     throw error;
//   }
// };

// // API Service Implementation
// export const apiService = {
//   // Authentication APIs
//   registerUser: async (username: string, email: string, password: string) =>
//     apiCall("/register", "POST", { username, email, password }),

//   loginUser: async (identifier: string, password: string) =>
//     apiCall("/login", "POST", { identifier, password }),

//   signInWithGoogle: async (idToken: string) =>
//     apiCall("/auth", "POST", { idToken }),

//   logoutUser: async (token: string) => apiCall("/logout", "POST", null, token),

//   verifyEmail: async (verificationToken: string) =>
//     apiCall(`/verify-email/${verificationToken}`, "GET"),

//   // User Profile APIs
//   getUserProfile: async (token: string) =>
//     apiCall("/profile", "GET", null, token),

//   updateUserProfile: async (profileDetails: unknown, token: string) =>
//     apiCall("/update-info", "PUT", profileDetails, token),

//   updatePassword: async (newPasswordDetails: unknown, token: string) =>
//     apiCall("/update-password", "PUT", newPasswordDetails, token),

//   // Question Management APIs
//   getAllQuestions: async (
//     filters: { search?: string; subject?: string; tags?: string[] } = {},
//     token: string | null = null
//   ) => {
//     const queryParams = new URLSearchParams();

//     if (filters.search) queryParams.append("search", filters.search);
//     if (filters.subject) queryParams.append("subject", filters.subject);
//     if (filters.tags) queryParams.append("tags", filters.tags.join(","));

//     return apiCall(`/questions?${queryParams.toString()}`, "GET", null, token);
//   },

//   getQuestionById: async (id: string) => apiCall(`/question/${id}`, "GET"),

//   createQuestion: async (
//     content: string,
//     subject: string,
//     tags: string[] | null,
//     token: string
//   ) => apiCall("/create-question", "POST", { content, subject, tags }, token),

//   updateQuestion: async (
//     id: string,
//     updatedQuestion: { content: string; subject: string; tags?: string[] },
//     token: string
//   ) => apiCall(`/update-question/${id}`, "PUT", updatedQuestion, token),

//   deleteQuestion: async (id: string, token: string) =>
//     apiCall(`/delete-question/${id}`, "DELETE", null, token),

//   // Admin APIs
//   updateUserRole: async (
//     username: string,
//     newRoleDetails: { role: string },
//     token: string
//   ) => apiCall(`/update-role/${username}`, "PUT", newRoleDetails, token),
// };

// Importing the necessary libraries
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
  } catch (error) {
    console.error(
      `Error in API call to ${endpoint}:`,
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

// API Service Functions with Exports

// Authentication APIs
export const registerUser = async (
  username: string,
  email: string,
  password: string
) => apiCall("/register", "POST", { username, email, password });

export const loginUser = async (identifier: string, password: string) =>
  apiCall("/login", "POST", { identifier, password });

export const signInWithGoogle = async (idToken: string) =>
  apiCall("/auth", "POST", { idToken });

export const logoutUser = async (token: string) =>
  apiCall("/logout", "POST", null, token);

export const verifyEmail = async (verificationToken: string) =>
  apiCall(`/verify-email/${verificationToken}`, "GET");

// User Profile APIs
export const getUserProfile = async (token: string) =>
  apiCall("/profile", "GET", null, token);

export const updateUserProfile = async (
  profileDetails: unknown,
  token: string
) => apiCall("/update-info", "PUT", profileDetails, token);

export const updatePassword = async (
  newPasswordDetails: unknown,
  token: string
) => apiCall("/update-password", "PUT", newPasswordDetails, token);

// Question Management APIs
export const getAllQuestions = async (
  filters: { search?: string; subject?: string; tags?: string[] } = {},
  token: string | null = null
) => {
  const queryParams = new URLSearchParams();

  if (filters.search) queryParams.append("search", filters.search);
  if (filters.subject) queryParams.append("subject", filters.subject);
  if (filters.tags) queryParams.append("tags", filters.tags.join(","));

  return apiCall(`/questions?${queryParams.toString()}`, "GET", null, token);
};

export const getQuestionById = async (id: string) =>
  apiCall(`/question/${id}`, "GET");

export const createQuestion = async (
  content: string,
  subject: string,
  tags: string[] | null,
  token: string
) => apiCall("/create-question", "POST", { content, subject, tags }, token);

export const updateQuestion = async (
  id: string,
  updatedQuestion: { content: string; subject: string; tags?: string[] },
  token: string
) => apiCall(`/update-question/${id}`, "PUT", updatedQuestion, token);

export const deleteQuestion = async (id: string, token: string) =>
  apiCall(`/delete-question/${id}`, "DELETE", null, token);

// Admin APIs
export const updateUserRole = async (
  username: string,
  newRoleDetails: { role: string },
  token: string
) => apiCall(`/update-role/${username}`, "PUT", newRoleDetails, token);
