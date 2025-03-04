import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const projects = [
  { name: "Starting Project", path: "starting-project" },
  { name: "Tic Tac Toe", path: "tic-tac-toe" },
  { name: "Investment Calculator", path: "investment-calculator" }
];

export default function App() {
  return (
    <Router>
      {/* Persistent Navigation Bar */}
      <nav className="bg-gray-800 p-4 text-white flex justify-center space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}>Home</NavLink>
        {projects.map((project) => (
          <NavLink
            key={project.path}
            to={`/${project.path}`}
            className={({ isActive }) => isActive ? "text-yellow-400" : "text-white"}
          >
            {project.name}
          </NavLink>
        ))}
      </nav>

      {/* Page Content Below the Tabs */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <>
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
  return <p className="text-lg">Welcome to the LearnReact hub! Click on a project to view it.</p>;
}

function ProjectPage({ name, path }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <iframe
        src={`/projects/${path}/index.html`}
        className="w-full h-screen border-none"
        title={name}
      />
    </div>
  );
}