import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../App";

const projects = [
    {
        title: "E-commerce Platform",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
        description:
            "Modern e-commerce platform with authentication, products, cart and checkout.",
        tech: ["Next.js", "React", "TypeScript", "MongoDB", "Stripe", "AWS", "Git"],
    },
    {
        title: "Video Streaming Platform",
        image:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80",
        description:
            "Video streaming platform with a modern interface for browsing and watching content.",
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Git", "AWS"],
    },
    {
        title: "File Sharing Platform",
        image:
            "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=900&q=80",
        description:
            "File sharing application for uploading, managing and sharing files.",
        tech: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
        title: "File Hosting Platform",
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
        description:
            "Cloud-based file hosting platform using AWS S3 for file storage.",
        tech: ["React", "Node.js", "Express.js", "AWS S3"],
    },
    {
        title: "CLI Applications",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
        description:
            "Command-line applications built to perform development and utility tasks.",
        tech: ["Node.js", "TypeScript", "CLI"],
    }
];

const Projects = () => {
    const { darkMode } = useTheme();

    return (
        <section id="work" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <p className="text-cyan-400 text-sm uppercase tracking-widest">
                        My Work
                    </p>

                    <h2
                        className={`text-4xl font-bold mt-2 ${darkMode ? "text-white" : "text-slate-900"
                            }`}
                    >
                        Featured Projects
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`group overflow-hidden rounded-2xl border hover:border-cyan-400/40 transition ${darkMode
                                ? "border-white/10 bg-white/5"
                                : "border-slate-200 bg-white shadow-sm"
                                }`}
                        >
                            {/* Project Image */}
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <h3
                                    className={`text-xl font-semibold ${darkMode
                                        ? "text-white"
                                        : "text-slate-900"
                                        }`}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className={`text-sm mt-3 leading-6 ${darkMode
                                        ? "text-gray-300"
                                        : "text-slate-600"
                                        }`}
                                >
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-5">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-500"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-5 mt-6">

                                    <a
                                        href="#"
                                        className={`flex items-center gap-2 text-sm hover:text-cyan-900 ${darkMode
                                            ? "text-white"
                                            : "text-slate-900"
                                            }`}
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;