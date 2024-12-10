import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>
      </header>

      <main className="p-8">
        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-800">
            I’m a passionate software developer with experience in React,
            Node.js, and modern web technologies. I love creating performant and
            intuitive user interfaces.
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Example project cards */}
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Project One</h3>
              <p className="text-gray-700">
                A brief description of this awesome project.
              </p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Project Two</h3>
              <p className="text-gray-700">
                Another cool project showcasing my React skills.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-800">
            Feel free to reach out to me at{" "}
            <a
              href="mailto:email@example.com"
              className="text-blue-500 underline"
            >
              email@example.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="p-4 bg-gray-200 text-center">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} My Name
        </p>
      </footer>
    </div>
  );
}

export default App;
