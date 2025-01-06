// Base URL for the API
const BASE_URL = "https://secondaryschoolquora.onrender.com";

// Generalized API call function
const apiCall = async (
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body: unknown = null,
  headers: Record<string, string> = {}
) => {
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers, // Allows adding custom headers like Authorization
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: defaultHeaders,
      body: body ? JSON.stringify(body) : null,
      credentials: "include", // Include cookies in the request
    });

    if (!response.ok) {
      // Handle JSON and non-JSON error responses
      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const errorData = isJson
        ? await response.json()
        : { message: response.statusText };
      throw new Error(errorData.message || "An error occurred");
    }

    // Parse the response as JSON
    return await response.json();
  } catch (error) {
    console.error(
      `Error in API call to ${endpoint}:`,
      error instanceof Error ? error.message : error
    );
    throw error;
  }
};

// Authentication APIs
export const registerUser = async (
  username: string,
  email: string,
  password: string
) => apiCall("/register", "POST", { username, email, password });

export const loginUser = async (
  _username: string,
  email: string,
  password: string
) => {
  try {
    const result = await apiCall("/login", "POST", { email, password });
    console.log("Login API Call Result:", result);
    return result;
  } catch (error) {
    console.error("Login API Call Error:", error);
    throw error;
  }
};

export const logoutUser = async () => apiCall("/logout", "POST");

// User Profile APIs
export const getUserProfile = async (token: string) =>
  apiCall("/profile", "GET", null, {
    Authorization: `Bearer ${token}`,
  });

export const updateUserProfile = async (
  profileDetails: Record<string, string>,
  token: string
) =>
  apiCall("/update-info", "PUT", profileDetails, {
    Authorization: `Bearer ${token}`,
  });

export const updatePassword = async (
  newPasswordDetails: { currentPassword: string; newPassword: string },
  token: string
) =>
  apiCall("/update-password", "PUT", newPasswordDetails, {
    Authorization: `Bearer ${token}`,
  });

// Question Management APIs
export const getAllQuestions = async (
  filters: { search?: string; subject?: string; tags?: string[] } = {}
) => {
  const queryParams = new URLSearchParams();

  if (filters.search) queryParams.append("search", filters.search);
  if (filters.subject) queryParams.append("subject", filters.subject);
  if (filters.tags) queryParams.append("tags", filters.tags.join(","));

  return apiCall(`/questions?${queryParams.toString()}`, "GET");
};

export const getQuestionById = async (id: string) =>
  apiCall(`/question/${id}`, "GET");

export const createQuestion = async (
  content: string,
  subject: string,
  tags: string[] | null,
  token: string
) =>
  apiCall(
    "/create-question",
    "POST",
    { content, subject, tags },
    { Authorization: `Bearer ${token}` }
  );

export const updateQuestion = async (
  id: string,
  updatedQuestion: { content: string; subject: string; tags?: string[] },
  token: string
) =>
  apiCall(`/update-question/${id}`, "PUT", updatedQuestion, {
    Authorization: `Bearer ${token}`,
  });

export const deleteQuestion = async (id: string, token: string) =>
  apiCall(`/delete-question/${id}`, "DELETE", null, {
    Authorization: `Bearer ${token}`,
  });

// Admin APIs
export const updateUserRole = async (
  username: string,
  newRoleDetails: { role: string },
  token: string
) =>
  apiCall(`/update-role/${username}`, "PUT", newRoleDetails, {
    Authorization: `Bearer ${token}`,
  });
export const forgotPasswordRequest = async (email: string) => {
  return apiCall("/forgot-password", "POST", {
    email,
  });
};
export const changePassword = async (
  token: string,
  newPassword: string,
  confirmPassword: string
) => {
  return apiCall("/change-password", "POST", {
    token,
    newPassword,
    confirmPassword,
  });
};
