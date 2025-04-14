import githubLogo from '../../assets/github-mark-white.svg'
import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {

    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>

        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Document Management System</h3>
                    <p className="text-gray-400 mb-4">Building a comprehensive system for archiving documents. Features automatic OCR processing with a queuing system, tagging, and full-text search powered by ElasticSearch.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Spring Boot", "Docker", "PostgreSQL", "RabbitMQ", "ElasticSearch"].map((tech, key) => (
                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {tech}
                             </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/krunschy/DMS" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer"> View Project → <img src={githubLogo} alt="Github Logo" className='w-6 h-5 inline ml-1 mb-1'></img></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Map Routing Application</h3>
                    <p className="text-gray-400 mb-4"> Developed a JavaFX frontend paired with a Spring Boot backend. Integrated API calls to OpenRouteService to generate maps and visually mark the user-selected route in the interface.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaFX", "Spring", "Docker", "RESTful APIs"].map((tech, key) => (
                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {tech}
                             </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/JohannesHenz/TourPlanner" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer"> View Project → <img src={githubLogo} alt="Github Logo" className='w-6 h-5 inline ml-1 mb-1'></img></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Unity Horror Game</h3>
                    <p className="text-gray-400 mb-4">Designed and implemented a 3D horror/puzzle game in Unity, combining immersive visuals with challenging puzzles for a captivating gameplay experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Unity", "C#", "Blender"].map((tech, key) => (
                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {tech}
                             </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/LaurinGob/GameEngineeringProject" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer"> View Project → <img src={githubLogo} alt="Github Logo" className='w-6 h-5 inline ml-1 mb-1'></img></a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2"> Trading Card Game</h3>
                    <p className="text-gray-400 mb-4">Built a Java-based trading card game with a robust backend developed without any external framework. Features include REST API calls, the repository pattern, and SQL database queries.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Java", "No Framework", "PostgreSQL", "Repository Pattern"].map((tech, key) => (
                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                 {tech}
                             </span>
                        )
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/JohannesHenz/MonsterTCG" className="text-blue-400 hover:text-blue-300 transition-colors my-4" target="_blank" rel="noopener noreferrer"> View Project → <img src={githubLogo} alt="Github Logo" className='w-6 h-5 inline ml-1 mb-1'></img></a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
};