import { FaCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";
import {
    RiLightbulbFlashLine,
    RiCodeBoxLine,
} from "react-icons/ri";
import { useTheme } from "../App";

const WhyHireMe = () => {
    const { darkMode } = useTheme();

    const strengths = [
        {
            icon: FaCode,
            title: "Full-Stack Development",
            description:
                "I can work across both frontend and backend, from building user interfaces to developing APIs and database solutions.",
        },
        {
            icon: FaLightbulb,
            title: "Problem Solving",
            description:
                "I focus on understanding the problem first and then building practical software solutions that meet business requirements.",
        },
        {
            icon: FaUsers,
            title: "Business Understanding",
            description:
                "I believe software should solve real business problems and provide value to both users and the organization.",
        },
        {
            icon: FaRocket,
            title: "Continuous Learning",
            description:
                "I continuously improve my skills and stay familiar with modern tools and technologies used in web development.",
        },
    ];

    return (
        <section id="why-hire-me" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em]">
                        Why Work With Me
                    </p>

                    <h2
                        className={`text-4xl md:text-5xl font-bold mt-3 ${darkMode ? "text-white" : "text-slate-900"
                            }`}
                    >
                        Why Hire Me?
                    </h2>

                    <p
                        className={`max-w-2xl mx-auto mt-5 ${darkMode ? "text-gray-400" : "text-slate-600"
                            }`}
                    >
                        I bring technical skills, problem-solving ability, and a
                        business-focused approach to every project I work on.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Left Side */}
                    <div
                        className={`p-8 md:p-10 rounded-3xl border transition-colors duration-500 ${darkMode
                            ? "bg-white/[0.04] border-white/10"
                            : "bg-white border-slate-200 shadow-sm"
                            }`}
                    >

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                                <RiCodeBoxLine className="text-3xl text-cyan-400" />
                            </div>

                            <div>
                                <h3
                                    className={`text-2xl font-semibold ${darkMode
                                        ? "text-white"
                                        : "text-slate-900"
                                        }`}
                                >
                                    A Developer Who Solves Problems
                                </h3>

                                <p
                                    className={`text-sm mt-1 ${darkMode
                                        ? "text-gray-500"
                                        : "text-slate-500"
                                        }`}
                                >
                                    Technical skills with a practical approach
                                </p>
                            </div>
                        </div>

                        <p
                            className={`leading-7 ${darkMode
                                ? "text-gray-400"
                                : "text-slate-600"
                                }`}
                        >
                            I have a strong understanding of full-stack web development
                            and enjoy building applications that solve real-world problems.
                            I can work with both frontend and backend technologies and
                            understand how different parts of an application work together.
                        </p>

                        <p
                            className={`leading-7 mt-5 ${darkMode
                                ? "text-gray-400"
                                : "text-slate-600"
                                }`}
                        >
                            My goal is not only to write code, but to understand the
                            requirement, identify the problem, and build a reliable and
                            useful solution.
                        </p>

                        {/* Highlight */}
                        <div className="mt-8 p-5 rounded-2xl bg-cyan-400/5 border border-cyan-400/10">
                            <div className="flex gap-3">
                                <RiLightbulbFlashLine className="text-cyan-400 text-xl mt-1" />

                                <p
                                    className={`text-sm leading-6 ${darkMode
                                        ? "text-gray-300"
                                        : "text-slate-700"
                                        }`}
                                >
                                    "Good software is not just about writing code. It is about
                                    understanding the problem and creating a solution that
                                    provides real value."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="grid sm:grid-cols-2 gap-5">

                        {strengths.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`group p-6 rounded-2xl border hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 ${darkMode
                                        ? "bg-white/[0.04] border-white/10"
                                        : "bg-white border-slate-200 shadow-sm"
                                        }`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center group-hover:scale-110 transition">
                                        <Icon className="text-xl text-cyan-400" />
                                    </div>

                                    <h4
                                        className={`text-lg font-semibold mt-5 ${darkMode
                                            ? "text-white"
                                            : "text-slate-900"
                                            }`}
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className={`text-sm leading-6 mt-3 ${darkMode
                                            ? "text-gray-400"
                                            : "text-slate-600"
                                            }`}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>

                {/* Bottom Skills */}
                <div className="flex flex-wrap justify-center gap-3 mt-12">
                    {[
                        "Problem Solving",
                        "Clean Code",
                        "Frontend",
                        "Backend",
                        "APIs",
                        "Database",
                        "Teamwork",
                        "Continuous Learning",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 rounded-full text-sm text-cyan-500 bg-cyan-100/10 border border-cyan-400/10"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyHireMe;