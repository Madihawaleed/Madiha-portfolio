import { FaGraduationCap, FaCode } from "react-icons/fa";
import { RiGraduationCapLine, RiCodeBoxLine } from "react-icons/ri";
import { useTheme } from "../App";

const Education = () => {
    const { darkMode } = useTheme();

    return (
        <section id="education" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em]">
                        Education
                    </p>

                    <h2 className={`text-4xl md:text-5xl font-bold mt-3 ${darkMode ? "text-white" : "text-slate-900"
                        }`}>
                        Education & Professional Development
                    </h2>

                    <p className={`max-w-2xl mx-auto mt-5 ${darkMode ? "text-gray-400" : "text-slate-600"
                        }`}>
                        My academic background and professional training in full-stack
                        web development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Bachelor's Degree */}
                    <div className={`group p-8 rounded-2xl border hover:border-cyan-400/40 transition-all duration-300 ${darkMode
                        ? "bg-white/[0.04] border-white/10"
                        : "bg-white border-slate-200 shadow-sm"
                        }`}>

                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 group-hover:scale-110 transition">
                                <FaGraduationCap className="text-3xl text-cyan-400" />
                            </div>

                            <div>
                                <p className="text-cyan-400 text-sm font-medium">
                                    Bachelor’s Degree
                                </p>

                                <h3 className={`text-2xl font-semibold mt-1 ${darkMode ? "text-white" : "text-slate-900"
                                    }`}>
                                    Bachelor of Arts
                                </h3>
                            </div>
                        </div>

                        <div className="mt-7">
                            <div className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-700"
                                }`}>
                                <RiGraduationCapLine className="text-cyan-400 text-lg" />
                                <span>University of the Punjab</span>
                            </div>

                            <p className={`text-sm mt-3 ${darkMode ? "text-gray-500" : "text-slate-500"
                                }`}>
                                2020
                            </p>
                        </div>
                    </div>

                    {/* Full Stack Development */}
                    <div className={`group p-8 rounded-2xl border hover:border-cyan-400/40 transition-all duration-300 ${darkMode
                        ? "bg-white/[0.04] border-white/10"
                        : "bg-white border-slate-200 shadow-sm"
                        }`}>

                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 group-hover:scale-110 transition">
                                <FaCode className="text-3xl text-cyan-400" />
                            </div>

                            <div>
                                <p className="text-cyan-400 text-sm font-medium">
                                    Professional Training
                                </p>

                                <h3 className={`text-2xl font-semibold mt-1 ${darkMode ? "text-white" : "text-slate-900"
                                    }`}>
                                    Full Stack Web Development
                                </h3>
                            </div>
                        </div>

                        <div className="mt-7">
                            <div className={`flex items-center gap-2 ${darkMode ? "text-gray-300" : "text-slate-700"
                                }`}>
                                <RiCodeBoxLine className="text-cyan-400 text-lg" />
                                <span>CodingOTT</span>
                            </div>

                            <p className={`text-sm mt-3 ${darkMode ? "text-gray-500" : "text-slate-500"
                                }`}>
                                Completed April 2026
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                {[
                                    'Gen AI',
                                    'React.js',
                                    'Tailwind CSS',
                                    "Next.js",
                                    'Node.js',
                                    'Express.js',
                                    'TypeScript',
                                    "CI/CD",
                                    'MongoDB',
                                    "Postgresql",
                                    "ORM Prisma",
                                    'AWS Cloud',
                                    'Docker',
                                    'Redis',
                                    'Kafka',
                                    'RabitMq',
                                    'BullMq',
                                    'Git',
                                    'Jira',
                                    'Ant Design',
                                    'Remix Icon',
                                    'Font Awesome',



                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-full text-xs text-cyan-400 bg-cyan-100/10 border border-cyan-400/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;