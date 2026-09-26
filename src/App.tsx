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
  'React.js',
  "Next.js",
  'Node.js',
  'Express.js',
  'MongoDB',
  'TypeScript',
  'AWS',
  'Docker',
  'Redis',
  'Kafka',
  'Git',
  'Jira',
  'Ant Design',
  'Tailwind CSS',
  'Remix Icon',
  'Font Awesome',
  'Web-RTC',
  'Socket.io',
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

        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Navbar */}
          <nav
            className={`flex items-center justify-between border-b py-7 transition-colors duration-500 ${darkMode
              ? 'border-white/10'
              : 'border-slate-200'
              }`}
          >

            <a
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              Madiha<span className="text-fuchsia-400">.</span>
            </a>

            {/* Navigation */}
            <div
              className={`hidden items-center gap-8 text-sm md:flex ${darkMode
                ? 'text-zinc-400'
                : 'text-slate-500'
                }`}
            >
              <a
                href="#home"
                className={`transition ${darkMode
                  ? 'hover:text-white'
                  : 'hover:text-slate-900'
                  }`}
              >
                Home
              </a>

              <a
                href="#about"
                className={`transition ${darkMode
                  ? 'hover:text-white'
                  : 'hover:text-slate-900'
                  }`}
              >
                About
              </a>

              <a
                href="#skills"
                className={`transition ${darkMode
                  ? 'hover:text-white'
                  : 'hover:text-slate-900'
                  }`}
              >
                Skills
              </a>

              <a
                href="#work"
                className={`transition ${darkMode
                  ? 'hover:text-white'
                  : 'hover:text-slate-900'
                  }`}
              >
                Work
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              {/* Theme Button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${darkMode
                  ? 'border-white/10 bg-white/[0.04] text-yellow-300 hover:border-yellow-300/40 hover:bg-yellow-300/10'
                  : 'border-slate-200 bg-white text-slate-700 shadow-sm hover:border-violet-400 hover:bg-violet-50'
                  }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {/* Contact */}
              <a
                href="#contact"
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${darkMode
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
            className="grid min-h-[calc(100vh-90px)] items-center gap-16 py-20 lg:grid-cols-[1.1fr_.9fr]"
          >

            {/* Left */}
            <div className="relative z-10">

              {/* Availability */}
              <div className="mb-6 flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />

                <span
                  className={`text-xs font-semibold uppercase tracking-[0.3em] ${darkMode
                    ? 'text-zinc-400'
                    : 'text-slate-500'
                    }`}
                >
                  Available for opportunities
                </span>

              </div>

              <p
                className={`mb-5 text-sm font-medium ${darkMode
                  ? 'text-fuchsia-300'
                  : 'text-violet-600'
                  }`}
              >
                Full Stack Developer
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-[5rem]">

                I build modern

                <span className="block bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                  web applications.
                </span>

              </h1>

              <p
                className={`mt-7 max-w-2xl text-base leading-7 sm:text-lg ${darkMode
                  ? 'text-zinc-400'
                  : 'text-slate-500'
                  }`}
              >
                Full Stack Developer focused on building responsive
                interfaces, scalable backend systems, and reliable digital
                products using modern JavaScript technologies.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#work"
                  className={`inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-105 ${darkMode
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
                  className={`inline-flex items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition ${darkMode
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

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${darkMode
                    ? 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/30 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-violet-400 hover:text-violet-600'
                    }`}
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${darkMode
                    ? 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/30 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-violet-400 hover:text-violet-600'
                    }`}
                >
                  <FaLinkedinIn />
                </a>

              </div>

              {/* Technologies */}
              <div className="mt-12 max-w-2xl">

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
            <div className="relative mx-auto w-full max-w-md">

              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 blur-3xl" />

              <div
                className={`relative rounded-[2rem] border p-3 shadow-2xl backdrop-blur-xl ${darkMode
                  ? 'border-white/10 bg-white/[0.04]'
                  : 'border-white bg-white/70 shadow-violet-200/50'
                  }`}
              >

                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">

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

                  {/* Labels */}
                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between">

                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur-md">
                      Full Stack
                    </span>

                    <span className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-emerald-300 backdrop-blur-md">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      Available

                    </span>

                  </div>

                  {/* Image Text */}
                  <div className="absolute bottom-7 left-7 right-7">

                    <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">
                      React · Node · MongoDB
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">

                      Turning ideas into

                      <span className="block text-zinc-300">
                        working products.
                      </span>

                    </h2>

                  </div>

                </div>
              </div>
            </div>

          </section>

          {/* Skills */}
          <section id="skills">
            <Skills />
          </section>

          {/* Projects */}
          <section id="work">
            <Projects />
          </section>

          {/* About */}
          <section id="about">
            <Education />
            <WhyHireMe />
          </section>

          {/* Contact */}
          <section id="contact">
            <Contact />
          </section>

        </div>
      </main>
    </ThemeContext.Provider>
  )
}

export default App