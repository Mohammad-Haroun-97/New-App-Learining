import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="mohammad-haroun.us.auth0.com"
  clientId="NFXfs9yZOE8EY9rwSm2TaVpEsYlS8OxP"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);