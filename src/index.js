import React from "react"
import ReactDOM from "react-dom/client"
 import OrganizerAccountDesktop from "./components/OrganizerAccountDesktop"
 
 import AttendeeDashboard from './components/attendee/AttendeeDashboard'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <AttendeeDashboard />
  </React.StrictMode>
)