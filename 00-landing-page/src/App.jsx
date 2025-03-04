import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./index.css"

const projects = [
  { name: "Starting Project", path: "starting-project" },
  { name: "Tic Tac Toe", path: "tic-tac-toe" },
  { name: "Investment Calculator", path: "investment-calculator" }
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
      <div className="content no-margin">
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
  return (
    <div className="project-container no-margin">
      <iframe
        src={`https://leandroswr.github.io/learningReact/projects/${path}/index.html`}
        className="project-iframe full-screen no-margin"
        title={name}
      />
    </div>
  );
}
