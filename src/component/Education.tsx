import { FaGraduationCap, FaCode } from 'react-icons/fa'
import { RiGraduationCapLine, RiCodeBoxLine } from 'react-icons/ri'
import ScrollReveal from './ScrollReveal'
import FloatingDots from './FloatingDots'

const technologyBadges = [
  'Gen AI', 'React.js', 'Tailwind CSS', 'Next.js', 'Node.js', 'Express.js', 'TypeScript',
  'CI/CD', 'MongoDB', 'PostgreSQL', 'Prisma ORM', 'AWS Cloud', 'Docker', 'Redis', 'Kafka',
  'RabbitMQ', 'BullMQ', 'Git', 'Jira', 'Ant Design', 'Remix Icon', 'Font Awesome',
]

const Education = () => (
  <section id="education" className="section-with-floats reveal-section scroll-mt-8 px-0 py-24 sm:py-28">
    <FloatingDots />
    <div className="mx-auto w-full max-w-[1400px]">
      <div className="mb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-200/80">Education</p>
        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Education &amp; Professional Development</h2>
        <p className="mx-auto mt-5 max-w-2xl text-gray-400">My academic background and professional training in full-stack web development.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <ScrollReveal animation="animate__fadeInLeft">
        <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(217,70,239,0.065),rgba(255,255,255,0.025)_42%,rgba(34,211,238,0.055))] p-7 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20 sm:p-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-fuchsia-300/0 via-violet-300/60 to-cyan-300/0" />
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition group-hover:scale-110"><FaGraduationCap className="text-3xl text-cyan-400" /></div>
            <div><p className="text-sm font-medium text-cyan-400">Bachelor&apos;s Degree</p><h3 className="mt-1 text-2xl font-semibold text-white">Bachelor of Arts</h3></div>
          </div>
          <div className="mt-7 flex items-center gap-2 text-gray-300"><RiGraduationCapLine className="text-lg text-cyan-400" />University of the Punjab</div>
          <p className="mt-3 text-sm text-gray-500">2020</p>
        </article>
        </ScrollReveal>
        <ScrollReveal animation="animate__fadeInRight" delayMs={100}>
        <article className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(217,70,239,0.065),rgba(255,255,255,0.025)_42%,rgba(34,211,238,0.055))] p-7 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20 sm:p-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-fuchsia-300/0 via-violet-300/60 to-cyan-300/0" />
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition group-hover:scale-110"><FaCode className="text-3xl text-cyan-400" /></div>
            <div><p className="text-sm font-medium text-cyan-400">Professional Training</p><h3 className="mt-1 text-2xl font-semibold text-white">Full Stack Web Development</h3></div>
          </div>
          <div className="mt-7 flex items-center gap-2 text-gray-300"><RiCodeBoxLine className="text-lg text-cyan-400" />CodingOTT</div>
          <p className="mt-3 text-sm text-gray-500">Completed April 2026</p>
          <div className="mt-5 flex flex-wrap gap-2">{technologyBadges.map((technology) => <span key={technology} className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.08] px-3 py-1.5 text-xs text-zinc-300">{technology}</span>)}</div>
        </article>
        </ScrollReveal>
      </div>
    </div>
  </section>
)

export default Education
