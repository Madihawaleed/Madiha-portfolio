import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa'
import { RiLightbulbFlashLine, RiCodeBoxLine } from 'react-icons/ri'
import ScrollReveal from './ScrollReveal'
import FloatingDots from './FloatingDots'

const strengths = [
  { icon: FaCode, title: 'Full-Stack Development', description: 'I can work across both frontend and backend, from building user interfaces to developing APIs and database solutions.' },
  { icon: FaLightbulb, title: 'Problem Solving', description: 'I focus on understanding the problem first and then building practical software solutions that meet business requirements.' },
  { icon: FaUsers, title: 'Business Understanding', description: 'I believe software should solve real business problems and provide value to both users and the organization.' },
  { icon: FaRocket, title: 'Continuous Learning', description: 'I continuously improve my skills and stay familiar with modern tools and technologies used in web development.' },
]

const WhyHireMe = () => (
  <section id="why-hire-me" className="section-with-floats reveal-section scroll-mt-8 px-0 py-24 sm:py-28">
    <FloatingDots />
    <div className="mx-auto w-full max-w-[1400px]">
      <div className="mb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-200/80">Why Work With Me</p>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Why Hire Me?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-gray-400">I bring technical skills, problem-solving ability, and a business-focused approach to every project I work on.</p>
      </div>
      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        <ScrollReveal animation="animate__fadeInLeft">
        <div className="relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(148,163,184,0.13),rgba(39,39,42,0.18)_48%,rgba(100,116,139,0.12))] p-7 shadow-lg shadow-gray-400/10 transition duration-300 hover:border-slate-300/20 hover:shadow-gray-300/20 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-slate-300/0 via-slate-300/45 to-slate-300/0" />
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10"><RiCodeBoxLine className="text-3xl text-cyan-400" /></div>
            <div><h3 className="text-2xl font-semibold text-white">A Developer Who Solves Problems</h3><p className="mt-1 text-sm text-gray-500">Technical skills with a practical approach</p></div>
          </div>
          <p className="leading-7 text-gray-400">I have a strong understanding of full-stack web development and enjoy building applications that solve real-world problems. I can work with both frontend and backend technologies and understand how different parts of an application work together.</p>
          <p className="mt-5 leading-7 text-gray-400">My goal is not only to write code, but to understand the requirement, identify the problem, and build a reliable and useful solution.</p>
          <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5 shadow-md shadow-gray-400/10"><div className="flex gap-3"><RiLightbulbFlashLine className="mt-1 text-xl text-cyan-400" /><p className="text-sm leading-6 text-gray-300">Good software starts with understanding the problem and creating a solution that provides real value.</p></div></div>
        </div>
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {strengths.map(({ icon: Icon, title, description }, index) => (
            <ScrollReveal key={title} delayMs={index * 90}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(148,163,184,0.13),rgba(39,39,42,0.18)_48%,rgba(100,116,139,0.12))] p-6 shadow-md shadow-gray-400/10 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/20 hover:shadow-lg hover:shadow-gray-300/20">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-slate-300/0 via-slate-300/45 to-slate-300/0 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 transition group-hover:scale-110"><Icon className="text-xl text-cyan-400" /></div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">{['Problem Solving', 'Clean Code', 'Frontend', 'Backend', 'APIs', 'Database', 'Teamwork', 'Continuous Learning'].map((skill) => <span key={skill} className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.08] px-4 py-2 text-sm text-cyan-300">{skill}</span>)}</div>
    </div>
  </section>
)

export default WhyHireMe
