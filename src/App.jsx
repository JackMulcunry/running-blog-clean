import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  // Create a component to handle routes inside Router context
  const AppRoutes = () => {
    // Tempo routes
    const tempoRoutes = import.meta.env.VITE_TEMPO ? useRoutes(routes) : null;

    if (tempoRoutes) {
      return tempoRoutes;
    }

    return (
      <Routes>
        {/* Add this before any catchall route */}
        {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  };

  return (
    <Router basename="/running-blog">
      <AppRoutes />
    </Router>
  );
}

export default App;
