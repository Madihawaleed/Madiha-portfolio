
import { createContext, useContext, useState } from 'react'
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaMoon,
  FaSun,
} from 'react-icons/fa'

import Skills from './component/Skills'
import Projects from './component/Project'
import Education from './component/Education'
import WhyHireMe from './component/WhyHireme'
import Contact from './component/Contact'

type ThemeContextType = {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside ThemeContext')
  }

  return context
}

const skills = [
  'Gen AI',
  'React.js',
  'Tailwind CSS',
  'Next.js',
  'Node.js',
  'Express.js',
  'TypeScript',
  'CI/CD',
  'MongoDB',
  'PostgreSQL',
  'Prisma ORM',
  'AWS Cloud',
  'Docker',
  'Redis',
  'Kafka',
  'RabbitMQ',
  'BullMQ',
  'Git',
  'Jira',
  'Ant Design',
  'Remix Icon',
  'Font Awesome',
]

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <main
        className={`min-h-screen overflow-hidden transition-colors duration-500 ${darkMode
          ? 'bg-[#06060a] text-white'
          : 'bg-[#fafaff] text-slate-900'
          }`}
      >
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {darkMode ? (
            <>
              <div className="absolute left-[-15rem] top-[-12rem] h-[35rem] w-[35rem] rounded-full bg-fuchsia-600/20 blur-[120px]" />

              <div className="absolute right-[-15rem] top-[10rem] h-[35rem] w-[35rem] rounded-full bg-cyan-500/15 blur-[130px]" />

              <div className="absolute bottom-[-15rem] left-[35%] h-[30rem] w-[30rem] rounded-full bg-violet-600/10 blur-[120px]" />

              <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:70px_70px]" />
            </>
          ) : (
            <>
              <div className="absolute left-[-15rem] top-[-12rem] h-[35rem] w-[35rem] rounded-full bg-fuchsia-300/30 blur-[120px]" />

              <div className="absolute right-[-15rem] top-[10rem] h-[35rem] w-[35rem] rounded-full bg-cyan-300/25 blur-[130px]" />

              <div className="absolute bottom-[-15rem] left-[35%] h-[30rem] w-[30rem] rounded-full bg-violet-300/20 blur-[120px]" />

              <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(99,102,241,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.5)_1px,transparent_1px)] [background-size:70px_70px]" />
            </>
          )}
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          {/* Navbar */}
          <nav
            className={`flex items-center justify-between border-b py-5 sm:py-7 ${darkMode
              ? 'border-white/10'
              : 'border-slate-200'
              }`}
          >
            <a
              href="/"
              className="text-lg font-bold tracking-tight sm:text-xl"
            >
              Hi! Madiha<span className="text-fuchsia-400">.</span>
            </a>

            {/* Desktop Navigation */}
            <div
              className={`hidden items-center gap-8 text-sm md:flex ${darkMode
                ? 'text-zinc-400'
                : 'text-slate-500'
                }`}
            >
              <a
                href="#home"
                className="transition hover:text-fuchsia-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="transition hover:text-fuchsia-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="transition hover:text-fuchsia-400"
              >
                Skills
              </a>

              <a
                href="#work"
                className="transition hover:text-fuchsia-400"
              >
                Work
              </a>

              <a
                href="#why-hire-me"
                className="transition hover:text-fuchsia-400"
              >
                Hire Me
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${darkMode
                  ? 'border-white/10 bg-white/[0.04] text-yellow-300 hover:border-yellow-300/40 hover:bg-yellow-300/10'
                  : 'border-slate-200 bg-white text-slate-700 shadow-sm hover:border-violet-400 hover:bg-violet-50'
                  }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {/* Contact */}
              <a
                href="#contact"
                className={`rounded-full border px-3.5 py-2 text-xs font-medium transition sm:px-5 sm:py-2.5 sm:text-sm ${darkMode
                  ? 'border-white/15 hover:border-fuchsia-400 hover:bg-fuchsia-400/10'
                  : 'border-slate-300 bg-white hover:border-violet-400 hover:bg-violet-50'
                  }`}
              >
                Let's talk
              </a>
            </div>
          </nav>

          {/* Hero */}
          <section
            id="home"
            className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:gap-16"
          >

            {/* Left */}
            <div className="relative z-10">

              {/* Availability */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />

                <span className="text-sm font-medium text-emerald-300">
                  Open to New Opportunities
                </span>
              </div>

              <p
                className={`mb-5 text-sm font-medium ${darkMode
                  ? 'text-slate-400'
                  : 'text-slate-500'
                  }`}
              >
                Full Stack Developer
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-[5rem]">
                I build modern

                <span className="block bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                  web applications.
                </span>
              </h1>

              <p
                className={`mt-6 max-w-2xl text-sm leading-6 sm:mt-7 sm:text-lg sm:leading-7 ${darkMode
                  ? 'text-zinc-400'
                  : 'text-slate-500'
                  }`}
              >
                Full Stack Developer focused on building responsive
                interfaces, scalable backend systems, and reliable digital
                products using modern JavaScript technologies.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">

                <a
                  href="#work"
                  className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105 ${darkMode
                    ? 'bg-white text-zinc-950'
                    : 'bg-slate-900 text-white'
                    }`}
                >
                  View my work
                  <FaArrowRight className="text-xs" />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className={`inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition ${darkMode
                    ? 'border-white/15 text-zinc-300 hover:border-white/40 hover:text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:text-violet-600'
                    }`}
                >
                  Resume
                  <FaDownload className="text-xs" />
                </a>
              </div>

              {/* Social */}
              <div className="mt-8 flex items-center gap-4">





              </div>

              {/* Technologies */}
              <div className="mt-10 max-w-2xl sm:mt-12">

                <p
                  className={`mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] ${darkMode
                    ? 'text-zinc-500'
                    : 'text-slate-400'
                    }`}
                >
                  Technologies I work with
                </p>

                <div className="flex flex-wrap gap-2">

                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-xs transition ${darkMode
                        ? 'border-white/10 bg-white/[0.035] text-zinc-400 hover:border-fuchsia-400/40 hover:bg-fuchsia-400/10 hover:text-fuchsia-200'
                        : 'border-slate-200 bg-white text-slate-500 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600'
                        }`}
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mx-auto mt-2 w-full max-w-[320px] sm:max-w-md lg:mt-0">

              {/* Glow */}
              <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 blur-3xl sm:-inset-8" />

              {/* Animated Dots */}
              <span className="absolute -left-1 top-1/4 h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_4px_rgba(232,121,249,0.6)] animate-pulse" />

              <span className="absolute -right-1 top-1/2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_4px_rgba(34,211,238,0.6)] animate-pulse [animation-delay:500ms]" />

              <span className="absolute bottom-1/4 -left-1 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_4px_rgba(167,139,250,0.6)] animate-pulse [animation-delay:1000ms]" />

              <span className="absolute -right-1 bottom-1/4 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_4px_rgba(52,211,153,0.6)] animate-pulse [animation-delay:1500ms]" />

              {/* Card */}
              <div
                className={`relative rounded-[1.5rem] border p-2.5 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-3 ${darkMode
                  ? 'border-white/10 bg-white/[0.04]'
                  : 'border-white bg-white/70 shadow-violet-200/50'
                  }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">

                  <img
                    src="/sample-image.jpeg"
                    alt="Full Stack Developer"
                    className="h-full w-full object-cover"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${darkMode
                      ? 'from-[#06060a]'
                      : 'from-slate-900/80'
                      } via-transparent to-transparent`}
                  />

                  {/* Image Labels */}
                  <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2 sm:left-6 sm:right-6 sm:top-6">

                    <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.1em] text-white/80 backdrop-blur-md sm:px-3 sm:text-[10px] sm:tracking-[0.18em]">
                      Full Stack Developer
                    </span>

                    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-[0.08em] text-emerald-300 sm:gap-2 sm:px-3 sm:text-[10px] sm:tracking-[0.15em]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                      Available
                    </span>

                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>

          {/* Projects */}
          <section id="work" className="scroll-mt-20">
            <Projects />
          </section>

          {/* About */}
          <section id="about" className="scroll-mt-20">
            <Education />
            <WhyHireMe />
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>

          {/* Final CTA */}
          <section className="py-16 sm:py-24">
            <div
              className={`relative overflow-hidden rounded-3xl border px-6 py-10 text-center sm:px-10 sm:py-14 ${darkMode
                ? 'border-white/10 bg-white/[0.03]'
                : 'border-slate-200 bg-white/70'
                }`}
            >

              {/* CTA Glow */}
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />

              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

              <div className="relative">

                <div className="mb-3 flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                    Open to New Opportunities
                  </p>
                </div>

                <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
                  Let's build something together.
                </h2>

                <p
                  className={`mx-auto mt-3 max-w-xl text-sm leading-6 sm:text-base ${darkMode
                    ? 'text-zinc-400'
                    : 'text-slate-500'
                    }`}
                >
                  Have a project, opportunity, or role in mind?
                  Let's connect.
                </p>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105 sm:w-auto ${darkMode
                    ? 'bg-white text-zinc-950'
                    : 'bg-slate-900 text-white'
                    }`}
                >
                  Let's Connect
                  <FaArrowRight className="text-xs" />
                </a>

              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`border-t py-8 text-center text-xs ${darkMode
              ? 'border-white/10 text-zinc-500'
              : 'border-slate-200 text-slate-400'
              }`}
          >
            <p>
              © {new Date().getFullYear()} Madiha. Built with React & Tailwind CSS.
            </p>
          </footer>

        </div>
      </main>
    </ThemeContext.Provider>
  )
}

export default App
