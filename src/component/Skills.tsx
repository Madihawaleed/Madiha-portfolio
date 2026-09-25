import { FaAws } from 'react-icons/fa'

import {
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiAntdesign,
    SiRemix,
    SiFontawesome,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiRedis,
    SiApachekafka,
    SiGit,
    SiGithub,
    SiJira,
    SiDocker,
    SiGithubactions,
} from 'react-icons/si'

import { useTheme } from '../App'

const skillGroups = [
    {
        number: '01',
        title: 'Frontend',
        description: 'Interfaces that feel clear, responsive, and effortless.',
        accent: 'from-fuchsia-400 to-violet-400',
        skills: [
            { name: 'React', icon: SiReact, color: 'text-cyan-300' },
            { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-300' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
            { name: 'Ant Design', icon: SiAntdesign, color: 'text-red-300' },
            { name: 'Remix Icon', icon: SiRemix, color: 'text-blue-300' },
            { name: 'Font Awesome', icon: SiFontawesome, color: 'text-blue-300' },
        ],
    },
    {
        number: '02',
        title: 'Backend',
        description: 'Scalable systems built for reliable product experiences.',
        accent: 'from-violet-400 to-cyan-400',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-300' },
            { name: 'Express.js', icon: SiExpress, color: 'text-zinc-200' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-300' },
            { name: 'Redis', icon: SiRedis, color: 'text-red-300' },
            { name: 'Kafka', icon: SiApachekafka, color: 'text-zinc-200' },
            { name: 'AWS', icon: FaAws, color: 'text-orange-300' },
        ],
    },
    {
        number: '03',
        title: 'Workflow tools',
        description: 'A structured process from first idea to final delivery.',
        accent: 'from-cyan-400 to-emerald-400',
        skills: [
            { name: 'Git', icon: SiGit, color: 'text-orange-300' },
            { name: 'GitHub', icon: SiGithub, color: 'text-zinc-900' },
            { name: 'Jira', icon: SiJira, color: 'text-blue-300' },
            { name: 'Docker', icon: SiDocker, color: 'text-blue-300' },
            { name: 'CI/CD', icon: SiGithubactions, color: 'text-purple-300' },
        ],
    },
]

function Skills() {
    const { darkMode } = useTheme()

    return (
        <section
            id="skills"
            className={`relative border-t py-24 transition-colors duration-500 ${darkMode ? 'border-white/10' : 'border-slate-200'
                }`}
        >
            <div className="mb-12 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fuchsia-400">
                    Capabilities
                </p>

                <h2
                    className={`mt-4 text-3xl font-semibold tracking-tight sm:text-5xl ${darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                >
                    From first sketch
                    <span className={darkMode ? 'text-zinc-500' : 'text-slate-400'}>
                        {' '}to final deployment.
                    </span>
                </h2>

                <p
                    className={`mt-5 max-w-xl text-base leading-7 ${darkMode ? 'text-zinc-400' : 'text-slate-600'
                        }`}
                >
                    A focused toolkit for creating polished interfaces, dependable backend
                    systems, and efficient development workflows.
                </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
                {skillGroups.map((group) => (
                    <article
                        key={group.title}
                        className={`group relative overflow-hidden rounded-3xl border p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 ${darkMode
                            ? 'border-white/10 bg-white/[0.045] hover:border-white/25'
                            : 'border-slate-200 bg-white shadow-sm hover:border-cyan-300'
                            }`}
                    >
                        <div
                            className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${group.accent} opacity-10 blur-3xl transition duration-500 group-hover:opacity-25`}
                        />

                        <div className="relative">
                            <div className="flex items-center justify-between">
                                <span
                                    className={
                                        darkMode ? 'text-sm text-zinc-600' : 'text-sm text-slate-400'
                                    }
                                >
                                    {group.number}
                                </span>

                                <span
                                    className={`h-px w-16 bg-gradient-to-r ${group.accent}`}
                                />
                            </div>

                            <h3
                                className={`mt-16 text-2xl font-semibold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'
                                    }`}
                            >
                                {group.title}
                            </h3>

                            <p
                                className={`mt-3 min-h-14 text-sm leading-6 ${darkMode ? 'text-zinc-500' : 'text-slate-500'
                                    }`}
                            >
                                {group.description}
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-2">
                                {group.skills.map(({ name, icon: Icon, color }) => (
                                    <div
                                        key={name}
                                        className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-xs transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/50 ${darkMode
                                            ? 'border-white/10 bg-black/20 text-zinc-300 hover:bg-white/10'
                                            : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-fuchsia-50'
                                            }`}
                                    >
                                        <span
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${darkMode ? 'bg-white/[0.08]' : 'bg-white'
                                                }`}
                                        >
                                            <Icon className={`text-lg ${color}`} />
                                        </span>

                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Skills