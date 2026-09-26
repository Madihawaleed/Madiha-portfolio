import { FaArrowRight, FaHandPaper, FaWhatsapp } from 'react-icons/fa'
import { FaAws, FaBrain, FaLayerGroup } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import {
  SiReact, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiExpress, SiTypescript,
  SiGithubactions, SiMongodb, SiPostgresql, SiPrisma, SiDocker, SiRedis,
  SiApachekafka, SiRabbitmq, SiGit, SiJira, SiAntdesign, SiRemix, SiFontawesome,
} from 'react-icons/si'
import Skills from './component/Skills'
import Projects from './component/Project'
import Education from './component/Education'
import WhyHireMe from './component/WhyHireme'
import Contact from './component/Contact'
import ScrollReveal from './component/ScrollReveal'
import FloatingDots from './component/FloatingDots'

const heroSkills = [
  'Gen AI', 'React.js', 'Tailwind CSS', 'Next.js', 'Node.js', 'Express.js', 'TypeScript',
  'CI/CD', 'MongoDB', 'PostgreSQL', 'Prisma ORM', 'AWS Cloud', 'Docker', 'Redis', 'Kafka',
  'RabbitMQ', 'BullMQ', 'Git', 'Jira', 'Ant Design', 'Remix Icon', 'Font Awesome',
]

const heroSkillIcons: Record<string, IconType> = {
  'Gen AI': FaBrain,
  'React.js': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  TypeScript: SiTypescript,
  'CI/CD': SiGithubactions,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  'Prisma ORM': SiPrisma,
  'AWS Cloud': FaAws,
  Docker: SiDocker,
  Redis: SiRedis,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,
  BullMQ: FaLayerGroup,
  Git: SiGit,
  Jira: SiJira,
  'Ant Design': SiAntdesign,
  'Remix Icon': SiRemix,
  'Font Awesome': SiFontawesome,
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090a0e] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-15rem] top-[-12rem] h-[35rem] w-[35rem] rounded-full bg-fuchsia-700/10 blur-[140px]" />
        <div className="absolute right-[-15rem] top-[10rem] h-[35rem] w-[35rem] rounded-full bg-cyan-700/[0.08] blur-[150px]" />
        <div className="absolute bottom-[-15rem] left-[35%] h-[30rem] w-[30rem] rounded-full bg-violet-700/[0.07] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <nav className="animate__animated animate__fadeInDown sticky top-0 z-30 -mx-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] bg-[#090a0e]/85 px-5 py-4 backdrop-blur-xl transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight"><span className="brand-gray-shimmer ">Hi! Madiha.</span><FaHandPaper aria-hidden="true" className="hello-wave text-amber-200" /></a>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400 sm:gap-7">
            <a className="transition duration-300 hover:-translate-y-0.5 hover:text-white" href="#work">Work</a>
            <a className="transition duration-300 hover:-translate-y-0.5 hover:text-white" href="#skills">Skills</a>
            <a className="transition duration-300 hover:-translate-y-0.5 hover:text-white" href="#why-hire-me">Why Hire Me</a>
            <a className="transition duration-300 hover:-translate-y-0.5 hover:text-white" href="#contact">Contact</a>
          </div>
          <a href="#contact" className="rounded-full border border-white/15 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-[#101116] shadow-md shadow-violet-950/20 transition duration-300 hover:-translate-y-0.5 hover:from-fuchsia-200 hover:via-violet-200 hover:to-cyan-200 hover:shadow-violet-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0e]">Let&apos;s Talk</a>
        </nav>

        <section id="home" className="reveal-section relative isolate grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 sm:gap-16 sm:py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div aria-hidden="true" className="hero-float-field pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <span className="hero-float-dot hero-float-dot--1 hero-float-horizontal hero-float-dot--fuchsia hero-float-dot--glow" />
            <span className="hero-float-dot hero-float-dot--2 hero-float-vertical hero-float-dot--violet" />
            <span className="hero-float-dot hero-float-dot--3 hero-float-diagonal hero-float-dot--cyan hero-float-dot--glow" />
            <span className="hero-float-dot hero-float-dot--4 hero-float-orbit hero-float-dot--fuchsia" />
            <span className="hero-float-dot hero-float-dot--5 hero-float-horizontal hero-float-dot--violet hero-float-dot--glow" />
            <span className="hero-float-dot hero-float-dot--6 hero-float-vertical hero-float-dot--cyan" />
            <span className="hero-float-dot hero-float-dot--7 hero-float-diagonal hero-float-dot--fuchsia hero-float-dot--glow" />
            <span className="hero-float-dot hero-float-dot--8 hero-float-orbit hero-float-dot--violet" />
            <span className="hero-float-dot hero-float-dot--9 hero-float-horizontal hero-float-dot--cyan hero-float-dot--glow" />
            <span className="hero-float-dot hero-float-dot--10 hero-float-vertical hero-float-dot--fuchsia" />
            <span className="hero-float-dot hero-float-dot--11 hero-float-diagonal hero-float-dot--violet hero-float-dot--glow" />
            <span className="hero-float-dot hero-float-dot--12 hero-float-orbit hero-float-dot--cyan" />
            <span className="hero-float-dot hero-float-dot--13 hero-float-horizontal hero-float-dot--fuchsia hero-float-dot--glow" />
            <span className="hero-float-dot hero-float-dot--14 hero-float-vertical hero-float-dot--violet" />
            <span className="hero-float-dot hero-float-dot--15 hero-float-orbit hero-float-dot--cyan hero-float-dot--glow" />
          </div>
          <div className="animate__animated animate__fadeInLeft relative z-10">
            <div className="mb-5 flex items-center gap-2">
              <span className="availability-pulse h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
              <span className="availability-copy text-sm font-medium text-emerald-200/90">Open to New Opportunities</span>
            </div>
            <h1 className="mb-8">
              <span className="developer-title-frame relative inline-block rounded-xl px-2 py-1">
                <span className="animate__animated animate__heartBeat animate__infinite bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-5xl font-bold leading-tight tracking-[-0.045em] text-transparent">
                  Full Stack Developer
                </span>
              </span>

              <span className="mt-3 block h-[2px] w-24 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 opacity-80" />
            </h1>
            <div className="mb-4 mt-1 flex items-center gap-3">
              <span className="mt-3 block h-[2px] w-8 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 opacity-80" />
              <h2 className="bg-gradient-to-r from-fuchsia-200 via-violet-200 to-cyan-200 bg-clip-text text-sm font-semibold tracking-[0.12em] text-transparent transition duration-300 hover:tracking-[0.16em]">My Skills</h2>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-300 to-cyan-300 shadow-[0_0_8px_rgba(139,92,246,0.25)]" />
            </div>
            <div className="flex max-w-3xl flex-wrap gap-2" aria-label="Technical skills">
              {heroSkills.map((skill) => {
                const SkillIcon = heroSkillIcons[skill]
                return (
                  <span key={skill} className="hero-skill-chip group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-zinc-300 sm:text-sm">
                    <SkillIcon aria-hidden="true" className="hero-skill-icon shrink-0" size={17} color="#c4b5fd" />
                    <span className="bg-gradient-to-r from-fuchsia-200 via-violet-200 to-cyan-200 bg-clip-text text-transparent">{skill}</span>
                  </span>
                )
              })}
            </div>
            <a href="#why-hire-me" className="animate__animated animate__pulse animate__infinite hire-me-attention group mt-7 inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#101116] shadow-[0_6px_20px_rgba(139,92,246,0.16)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(139,92,246,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0e]">
              Hire Me <FaArrowRight aria-hidden="true" className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="animate__animated animate__fadeInRight relative z-10 mx-auto w-full max-w-xs">
            <div className="profile-image-frame relative rounded-lg p-[2px]">
              <img src="/profile.jpeg" alt="Madiha's professional profile" decoding="async" fetchPriority="high" className="relative z-[1] block h-auto w-full rounded-[calc(0.5rem-2px)] object-contain shadow-lg shadow-gray-500/20" />
            </div>
            <div aria-label="Available to Join" className="animate__animated animate__fadeInDown animate__delay-1s pointer-events-none absolute left-[4%] top-[9%] z-20 flex items-center gap-2">
              <span className="availability-pulse h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
              <span className="availability-copy bg-gradient-to-r from-emerald-200 via-green-300 to-lime-200 bg-clip-text text-xs font-semibold tracking-wide text-transparent drop-shadow-[0_0_8px_rgba(74,222,128,0.2)] sm:text-sm">Available to Join</span>
            </div>
          </div>
        </section>

        <ScrollReveal><Projects /></ScrollReveal>
        <ScrollReveal><Skills /></ScrollReveal>
        <ScrollReveal><Education /></ScrollReveal>
        <ScrollReveal><WhyHireMe /></ScrollReveal>
        <ScrollReveal><Contact /></ScrollReveal>

        <ScrollReveal><section className="section-with-floats reveal-section my-16 rounded-3xl border border-white/[0.09] bg-gradient-to-br from-teal-300/[0.06] via-violet-300/[0.05] to-rose-300/[0.05] px-6 py-12 text-center shadow-xl shadow-gray-400/10 sm:px-12">
          <FloatingDots />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-200">Have a project in mind?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s build something useful.</h2>
          <a href="#contact" className="mt-7 inline-flex items-center gap-3 rounded-full border border-teal-200/25 bg-gradient-to-r from-teal-200 to-cyan-200 px-6 py-3 text-sm font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:from-teal-100 hover:to-cyan-100">Get in touch <FaArrowRight className="text-xs" /></a>
        </section></ScrollReveal>
        <ScrollReveal><footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">&copy; {new Date().getFullYear()} Madiha. Thanks for visiting.</footer></ScrollReveal>
      </div>

      <a href="https://wa.me/14695409948" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg shadow-green-900/30 transition hover:scale-105 hover:bg-[#20bd5a]"><FaWhatsapp /></a>
      <a href="#why-hire-me" className="fixed bottom-6 right-24 z-40 rounded-full border border-white/15 bg-zinc-900/95 px-4 py-3 text-xs font-semibold tracking-wide text-zinc-100 shadow-lg shadow-black/30 backdrop-blur transition hover:border-cyan-400/40 hover:bg-zinc-800 sm:px-5 sm:text-sm">Hire Me</a>
    </main>
  )
}

export default App
