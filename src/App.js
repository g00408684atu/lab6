// Import Bootstrap CSS to style the app using Bootstrap's default styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import React Router components for managing routes and navigation
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import custom components that will be used in the app
import NavigationBar from './components/NavigationBar';  // The navigation bar component
import Header from './components/header';                // The header component (not used in this file but likely for other purposes)
import Footer from './components/footer';                // The footer component
import Content from './components/content';              // The main content component (likely to show the landing page)
import Read from './components/read';                    // The component to display the list of movies
import Create from './components/create';                // The component for creating new movies
import Edit from './components/edit';                    // The component for editing an existing movie

function App() {
  return (
    // Wrap the entire app in a Router component to enable client-side routing
    <Router>
      <NavigationBar />
      <Routes>
        {/* The default route ("/") renders the Content component */}
        <Route path="/" element={<Content />} />
        {/* The "/read" route renders the Read component to show the list of movies */}
        <Route path="/read" element={<Read />} />
        {/* The "/create" route renders the Create component to allow users to create new movies */}
        <Route path="/create" element={<Create />} />
        {/* The "/edit/:id" route renders the Edit component to edit an existing movie, using the movie's id from the URL */}
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      {/* Render the Footer component at the bottom of the page */}
      <Footer />
    </Router>
  );
}

export default App;
