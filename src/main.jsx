import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import credentials from "./credentials/credentials";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={credentials.ecommerceProject.client_id}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
