import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import {useEffect, useRef} from "react";

const projects = [
  { name: "Starting Project", path: "starting-project" },
  { name: "Tic Tac Toe", path: "tic-tac-toe" },
  { name: "Investment Calculator", path: "investment-calculator" },
  { name: "The Almost Final Countdown", path: "countdown" }
];

export default function App() {
  return (
    <Router basename="/learningReact">
      {/* Persistent Navigation Bar */}
      <nav className="nav-bar">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        {projects.map((project) => (
          <NavLink
            key={project.path}
            to={`/${project.path}`}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            {project.name}
          </NavLink>
        ))}
      </nav>

      {/* Page Content Below the Tabs */}
      <div className="content">
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            {projects.map((project) => (
              <Route
                key={project.path}
                path={`/${project.path}`}
                element={<ProjectPage name={project.name} path={project.path} />}
              />
            ))}
          </>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <p className="home-text">Welcome to the LearnReact hub! Click on a project to view it.</p>;
}

function ProjectPage({ name, path }) {
  const iframeRef = useRef(null);
  useEffect(() => {
    const adjustIframeHeight = () => {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.style.height = `${window.innerHeight - iframe.offsetTop}px`;
      }
    };

    // Adjust on mount
    adjustIframeHeight();

    // Adjust when window resizes
    window.addEventListener("resize", adjustIframeHeight);
    return () => {
      window.removeEventListener("resize", adjustIframeHeight);
    };
  }, []);
  return (
    <div className="project-container">
      <iframe
        ref={iframeRef}
        src={`https://leandroswr.github.io/learningReact/projects/${path}/index.html`}
        className="project-iframe"
        title={name}
      />
    </div>
  );
}
