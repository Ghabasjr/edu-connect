import { gapi } from "gapi-script";

export const initializeGapi = () => {
  gapi.load("client:auth2", () => {
    gapi.client
      .init({
        clientId: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com", // Replace with your actual client ID
        scope: "email profile",
      })
      .then(() => {
        console.log("GAPI initialized");
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.error("Error initializing GAPI:", error);
      });
  });
};
