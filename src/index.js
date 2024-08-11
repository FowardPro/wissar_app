import React from "react"
import ReactDOM from "react-dom/client"

import OrganizerAccountDesktop from "./components/OrganizerAccountDesktop"

import AttendeeDashboard from './components/attendee/AttendeeDashboard'
import ArtistHomePage from './components/ArtistHomePage'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ArtistHomePage />
  </React.StrictMode>
)