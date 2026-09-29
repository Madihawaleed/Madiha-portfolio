import { FaAws, FaBrain, FaLayerGroup } from 'react-icons/fa'
import {
  SiReact, SiTypescript, SiTailwindcss, SiAntdesign, SiRemix, SiFontawesome, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiRedis, SiApachekafka, SiGit, SiJira, SiDocker,
  SiGithubactions, SiPostgresql, SiPrisma, SiRabbitmq,
} from 'react-icons/si'
import ScrollReveal from './ScrollReveal'
import FloatingDots from './FloatingDots'

const skillGroups = [
  {
    number: '01', title: 'Frontend', description: 'Interfaces that feel clear, responsive, and effortless.', accent: 'from-fuchsia-400 to-violet-400',
    skills: [
      { name: 'React.js', icon: SiReact, color: 'text-cyan-300' }, { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-zinc-100' }, { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-300' },
      { name: 'Ant Design', icon: SiAntdesign, color: 'text-red-300' }, { name: 'Remix Icon', icon: SiRemix, color: 'text-blue-300' },
      { name: 'Font Awesome', icon: SiFontawesome, color: 'text-blue-300' },
    ],
  },
  {
    number: '02', title: 'Backend', description: 'Reliable services and intelligent features that support useful products.', accent: 'from-violet-400 to-cyan-400',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-300' }, { name: 'Express.js', icon: SiExpress, color: 'text-zinc-200' },
      { name: 'Gen AI', icon: FaBrain, color: 'text-violet-300' },
    ],
  },
  {
    number: '03', title: 'Database & ORM', description: 'Organized data and fast access patterns for dependable applications.', accent: 'from-blue-400 to-cyan-400',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-300' }, { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-300' },
      { name: 'Prisma ORM', icon: SiPrisma, color: 'text-indigo-300' }, { name: 'Redis', icon: SiRedis, color: 'text-red-300' },
    ],
  },
  {
    number: '04', title: 'Cloud & DevOps', description: 'Tools for shipping, deploying, and maintaining software.', accent: 'from-cyan-400 to-emerald-400',
    skills: [
      { name: 'AWS Cloud', icon: FaAws, color: 'text-orange-300' }, { name: 'Docker', icon: SiDocker, color: 'text-sky-300' },
      { name: 'CI/CD', icon: SiGithubactions, color: 'text-violet-300' }, { name: 'Git', icon: SiGit, color: 'text-orange-300' },
      { name: 'Jira', icon: SiJira, color: 'text-blue-300' },
    ],
  },
  {
    number: '05', title: 'Messaging & Queues', description: 'Event-driven tools for asynchronous processing and communication.', accent: 'from-fuchsia-400 to-cyan-400',
    skills: [
      { name: 'Kafka', icon: SiApachekafka, color: 'text-zinc-200' }, { name: 'RabbitMQ', icon: SiRabbitmq, color: 'text-orange-300' },
      { name: 'BullMQ', icon: FaLayerGroup, color: 'text-rose-300' },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-with-floats reveal-section relative scroll-mt-8 border-t border-white/[0.08] py-24 sm:py-28">
      <FloatingDots />
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-200/75">TECHNICAL EXPERTISE</p>
        <h2 className="mt-4 bg-gradient-to-r from-white via-zinc-100 to-cyan-100/85 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">Built with modern technologies.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">A full-stack toolkit for building scalable applications, responsive interfaces, reliable backend systems, and production-ready solutions.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <ScrollReveal key={group.title} delayMs={index * 100}>
          <article className="expertise-card hero-skills-panel group relative h-full overflow-hidden rounded-3xl p-4 shadow-lg shadow-gray-400/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:p-5">
            <div aria-hidden="true" className={`pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r ${group.accent} opacity-50 transition-opacity duration-300 group-hover:opacity-90`} />
            <div aria-hidden="true" className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${group.accent} opacity-[0.07] blur-3xl transition duration-500 group-hover:opacity-[0.13]`} />
            <div className="relative">
              <div className="flex items-center justify-between"><span className="text-sm text-zinc-600">{group.number}</span><span className={`h-px w-16 bg-gradient-to-r ${group.accent}`} /></div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-5 text-zinc-400">{group.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <div key={name} className="expertise-skill-chip flex min-w-0 items-center gap-2 rounded-xl px-2 py-2 text-xs text-zinc-300 transition duration-300 hover:-translate-y-0.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.08]"><Icon className={`text-base ${color}`} /></span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
