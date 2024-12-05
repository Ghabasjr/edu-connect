import { gapi } from "gapi-script";

export const setupGoogleAPI = () => {
  gapi.load("client:auth2", () => {
    gapi.client
      .init({
        clientId: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Replace with your Client ID
        scope: "email profile",
      })
      .then(() => {
        console.log("Google API initialized!");
      })
      .catch((error) => {
        console.error("Error initializing Google API:", error);
      });
  });
};
