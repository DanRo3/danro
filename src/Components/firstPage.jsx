import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaDatabase,
  FaPalette,
} from "react-icons/fa";

const Button = ({ className, onClick, children }) => (
  <button className={`px-4 py-2 rounded ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default function PortfolioPreview() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="text-center space-y-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse text-blue-500">
          DanRo Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-violet-300">
          Innovative Developer | Creative Problem Solver | Tech Enthusiast
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-400">
          <div className="bg-gray-900 p-4 rounded-lg border border-violet-500">
            <FaCode className="h-12 w-12 mx-auto mb-4 text-violet-400" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>Creating responsive and dynamic web applications</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-blue-500">
            <FaDatabase className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Solutions</h3>
            <p>Building robust and scalable server-side applications</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg border border-violet-500">
            <FaPalette className="h-12 w-12 mx-auto mb-4 text-violet-400" />
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p>Crafting intuitive and beautiful user interfaces</p>
          </div>
        </div>
        <div className="mt-12">
          <Button
            className="bg-violet-600 hover:bg-violet-700 text-white text-lg py-3 px-8 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => window.open("https://github.com/DanRo3", "_blank")}
          >
            Explore My GitHub
          </Button>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://x.com/grass_rojas"
            className="text-blue-400 hover:text-violet-300 transition duration-300"
          >
            <FaTwitter className="h-8 w-8" />
            <span className="sr-only">X</span>
          </a>
          <a
            href="www.linkedin.com/in/danronk445"
            className="text-blue-400 hover:text-violet-300 transition duration-300"
          >
            <FaLinkedin className="h-8 w-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/DanRo3"
            className="text-violet-400 hover:text-blue-300 transition duration-300"
          >
            <FaGithub className="h-8 w-8" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
