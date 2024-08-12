import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
//  import OrganizerAccountDesktop from "./components/OrganizerAccountDesktop"

// import AttendeeDashboard from './components/attendee/AttendeeDashboard'
// import ArtistHome from "./components/ArtistHomePage"
// import Registration from "./components/Registration"
// import Login from "./components/Login"
const root = ReactDOM.createRoot(document.getElementById("root"))
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);