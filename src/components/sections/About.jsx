import { RevealOnScroll } from "../RevealOnScroll";


export const About = () => {

    const frontendSkills = ["React", "TypeScript", "Angular", "TailwindCSS"];
    const backendSkills = ["Node.js", "SpringBoot", "AWS", "PostgreSQL"];

    return <section id="about" className="min-h-screen flex- items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                I'm a Computer Science Student in his last semester. My University has 
            already given me all the tools I need to start my career as a Software Developer.
            In this Portfolio you will see some of my previous projects and get a sense of my current skill level.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Currently in Last Semester of Computer Science Education</strong> - University of Applied Sciences Technikum Wien (2021 - 2025)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> Internal IT Support at andamp GmbH (2023-2024) </h4>
                            <p> Managed in-house IT Services for Employees and handled acquisition and Maintenance of Hardware and Software</p>
                        </div>
                        <div>
                            <h4 className="font-semibold"> Facility Overseer at VHS Landstraße (2017-2020) </h4>
                            <p> Oversaw day to day of Courses at VHS and handled resposibility of the entire Facility </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
}