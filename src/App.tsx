import { useEffect, useState } from 'react'
import { FaArrowRight, FaHandPaper, FaHandPointLeft, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
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
const heroTitles = ['Full Stack Developer', 'Software Engineer']
const highlightedHeroSkills = new Set(['Next.js', 'Node.js', 'Express.js', 'TypeScript', 'Docker', 'CI/CD'])

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
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [titleText, setTitleText] = useState('')

  useEffect(() => {
    let frame = 0
    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      if (!(event.target instanceof Element)) return
      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link) return
      const id = decodeURIComponent(link.hash.slice(1))
      const target = document.getElementById(id)
      if (!target) return

      event.preventDefault()
      cancelAnimationFrame(frame)
      history.pushState(null, '', link.hash)
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const top = target.getBoundingClientRect().top + window.scrollY - 88
      if (reduceMotion) {
        window.scrollTo(0, top)
        return
      }

      const start = window.scrollY
      const distance = top - start
      const duration = Math.min(3400, Math.max(2200, Math.abs(distance) * 1.2))
      const startTime = performance.now()
      const animateScroll = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = progress < 0.5
          ? 16 * progress ** 5
          : 1 - (-2 * progress + 2) ** 5 / 2
        window.scrollTo(0, start + distance * eased)
        if (progress < 1) frame = requestAnimationFrame(animateScroll)
      }
      frame = requestAnimationFrame(animateScroll)
    }

    document.addEventListener('click', handleAnchorClick)
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    let titleIndex = 0
    let characterIndex = 0
    let deleting = false
    let timer: number

    const animateTitle = () => {
      const title = heroTitles[titleIndex]
      characterIndex += deleting ? -1 : 1
      setTitleText(title.slice(0, characterIndex))

      let delay = deleting ? 38 : 72
      if (!deleting && characterIndex === title.length) {
        deleting = true
        delay = 1500
      } else if (deleting && characterIndex === 0) {
        deleting = false
        titleIndex = (titleIndex + 1) % heroTitles.length
        delay = 350
      }
      timer = window.setTimeout(animateTitle, delay)
    }

    timer = window.setTimeout(animateTitle, 250)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const sections = ['work', 'skills', 'why-hire-me', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.15, 0.35, 0.6] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Element && !event.target.closest('[data-site-nav]')) setMenuOpen(false)
    }
    const closeOnDesktop = () => {
      if (window.innerWidth > 720) setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    window.addEventListener('resize', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [menuOpen])

  const navItems = [
    { label: 'Work', id: 'work' }, { label: 'Skills', id: 'skills' },
    { label: 'Why Hire Me', id: 'why-hire-me' }, { label: 'Contact', id: 'contact' },
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#090a0e] text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-15rem] top-[-12rem] h-[35rem] w-[35rem] rounded-full bg-fuchsia-700/10 blur-[140px]" />
        <div className="absolute right-[-15rem] top-[10rem] h-[35rem] w-[35rem] rounded-full bg-cyan-700/[0.08] blur-[150px]" />
        <div className="absolute bottom-[-15rem] left-[35%] h-[30rem] w-[30rem] rounded-full bg-violet-700/[0.07] blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.012] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 lg:px-8">
        <nav data-site-nav className="site-nav animate__animated animate__fadeInDown fixed top-0 left-0 z-30 flex w-full flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] bg-[#090a0e]/90 px-5 py-4 backdrop-blur-xl transition-colors duration-300 sm:px-6 lg:px-8" aria-label="Main navigation">
          <a href="#home" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight"><span className="brand-gray-shimmer ">Hi! Madiha.</span><FaHandPaper aria-hidden="true" className="hello-wave text-amber-200" /></a>
          <div id="primary-navigation" className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            {navItems.map(({ label, id }) => <a key={id} aria-current={activeSection === id ? 'location' : undefined} className={`nav-link ${activeSection === id ? 'nav-link-active' : ''}`} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <a href="#contact" className="talk-cta ">Let&apos;s Talk <FaArrowRight aria-hidden="true" /></a>
            <FaHandPointLeft aria-hidden="true" className="talk-pointing-hand text-lg text-amber-200" />
            <button className="menu-toggle animate__animated  animate-pulse animate-infinite" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <FaTimes /> : <FaBars />}</button>
          </div>
        </nav>

        <section id="home" className="reveal-section relative isolate grid min-h-screen items-start gap-8 pt-24 pb-10 sm:gap-10 sm:pt-28 sm:pb-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
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
            <div className="mb-3 flex items-center gap-2">
              <span className="availability-pulse h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
              <span className="availability-copy text-sm font-medium text-emerald-200/90">Open to New Opportunities</span>
            </div>
            <h1 className="mb-3">
              <span className="hero-intro">I&apos;m a</span>
              <span className="developer-title-frame relative inline-block rounded-xl px-2 py-1">
                <span className="developer-title bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-5xl font-bold leading-tight tracking-[-0.045em] text-transparent">
                  {titleText}<span className="typewriter-caret" aria-hidden="true" />
                </span>
              </span>

              <span className="mt-3 block h-[2px] w-24 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 opacity-80" />
            </h1>
            <p className="hero-summary">I create polished, reliable full-stack applications from idea to launch.</p>
            <section className="hero-skills-panel hero-portfolio-skills-panel mt-3 max-w-3xl rounded-2xl p-3 sm:p-4" aria-labelledby="hero-skills-title">
              <div className="mb-2 flex items-center gap-3">
                <span className="block h-[2px] w-8 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 opacity-80" />
                <h2 id="hero-skills-title" className="bg-gradient-to-r from-fuchsia-200 via-violet-200 to-cyan-200 bg-clip-text text-sm font-semibold tracking-[0.12em] text-transparent">My Skills</h2>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-300 to-cyan-300 shadow-[0_0_8px_rgba(139,92,246,0.25)]" />
              </div>
              <div className="hero-skills-grid" aria-label="Technical skills">
                {heroSkills.map((skill) => {
                  const SkillIcon = heroSkillIcons[skill]
                  const highlighted = highlightedHeroSkills.has(skill)
                  return (
                    <span key={skill} className={`hero-skill-chip group inline-flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-[11px] sm:text-xs ${highlighted ? 'hero-skill-chip--highlighted' : ''}`}>
                      <SkillIcon aria-hidden="true" className="hero-skill-icon shrink-0" size={16} color={highlighted ? '#e9d5ff' : '#c4b5fd'} />
                      <span className="truncate">{skill}</span>
                      {highlighted && <span aria-label="Core skill" className="hero-skill-indicator ml-auto shrink-0" />}
                    </span>
                  )
                })}
              </div>
            </section>
            <div className="hire-button-wrap mt-2 inline-flex items-center gap-2">
              <a href="#why-hire-me" className="hire-me-attention group inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 px-5 py-2 text-sm font-semibold text-[#101116] shadow-[0_8px_32px_rgba(139,92,246,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_38px_rgba(139,92,246,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#090a0e]">
                Hire Me <FaArrowRight aria-hidden="true" className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <FaHandPointLeft aria-hidden="true" className="hire-pointing-hand text-xl text-amber-200" />
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight relative z-10 mx-auto w-full max-w-xs lg:self-center">
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

      <a href="https://wa.me/14695409948" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="whatsapp-cta"><FaWhatsapp aria-hidden="true" /><span>Chat on WhatsApp</span></a>
    </main>
  )
}

export default App
