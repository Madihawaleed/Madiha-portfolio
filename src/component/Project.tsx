import { FaExternalLinkAlt } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import FloatingDots from './FloatingDots'

const projects = [
  { title: 'E-commerce Platform', image: '/ecommerce-preview.svg', description: 'Modern e-commerce platform with authentication, products, cart and checkout.', tech: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Stripe', 'AWS', 'Git'] },
  { title: 'Video Streaming Platform', image: '/video-chat-preview.svg', description: 'Real-time communication platform for video and audio calls, with live messaging and collaboration.', tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'AWS'] },
  { title: 'File Sharing Platform', image: '/file-sharing-preview.svg', description: 'Securely upload, organize, and share files with access-controlled links and a clear file workspace.', tech: ['React', 'Node.js', 'Express.js', 'MongoDB'] },
  { title: 'File Hosting Platform', image: '/file-hosting-preview.svg', description: 'Cloud-based file hosting dashboard for managing storage, transfers, and AWS S3 assets.', tech: ['React', 'Node.js', 'Express.js', 'AWS S3'] },
  { title: 'CLI Applications', image: '/cli-tools-preview.svg', description: 'Developer-focused command-line tools for automating builds, checks, and deployment workflows.', tech: ['Node.js', 'TypeScript', 'CLI'] },
]

const Projects = () => (
  <section id="work" className="section-with-floats reveal-section scroll-mt-8 px-0 py-24 sm:py-28">
    <FloatingDots />
    <div className="mx-auto w-full max-w-[1400px]">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.22em] text-teal-200/80">My Work</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delayMs={Math.min(index * 90, 360)}>
          <article className="project-card group relative isolate overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(217,70,239,0.07),rgba(255,255,255,0.025)_38%,rgba(34,211,238,0.06))] shadow-lg shadow-gray-400/10 transition duration-500 hover:-translate-y-2 hover:border-cyan-200/25 hover:shadow-xl hover:shadow-gray-300/20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-fuchsia-300/0 via-violet-200/80 to-cyan-300/0 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 aspect-[16/9] overflow-hidden bg-zinc-900"><img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090a0e]/65 via-[#090a0e]/5 to-transparent transition-colors duration-500 group-hover:from-[#090a0e]/45" /><div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08] transition duration-300 group-hover:ring-cyan-100/20" /></div>
            <div className="relative z-10 p-6">
              <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1 text-xs text-zinc-300 transition duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.055]">{item}</span>)}</div>
              <div className="mt-6"><a href="#" className="project-demo-link inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:text-teal-200"><FaExternalLinkAlt aria-hidden="true" />Live Demo <span aria-hidden="true" className="ml-0.5 transition-transform duration-300 group-hover:translate-x-1">↗</span></a></div>
            </div>
          </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
