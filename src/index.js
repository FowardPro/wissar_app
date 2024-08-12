import React from "react"
import ReactDOM from "react-dom/client"

import OrganizerAccountDesktop from "./components/OrganizerAccountDesktop"
import App from "./App"

import AttendeeDashboard from './components/attendee/AttendeeDashboard'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)