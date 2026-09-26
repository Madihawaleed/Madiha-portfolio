import { FaExternalLinkAlt } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import FloatingDots from './FloatingDots'

const projects = [
  { title: 'E-commerce Platform', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80', description: 'Modern e-commerce platform with authentication, products, cart and checkout.', tech: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Stripe', 'AWS', 'Git'] },
  { title: 'Video Streaming Platform', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80', description: 'Video streaming platform with a modern interface for browsing and watching content.', tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'AWS'] },
  { title: 'File Sharing Platform', image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=900&q=80', description: 'File sharing application for uploading, managing and sharing files.', tech: ['React', 'Node.js', 'Express.js', 'MongoDB'] },
  { title: 'File Hosting Platform', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80', description: 'Cloud-based file hosting platform using AWS S3 for file storage.', tech: ['React', 'Node.js', 'Express.js', 'AWS S3'] },
  { title: 'CLI Applications', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80', description: 'Command-line applications built to perform development and utility tasks.', tech: ['Node.js', 'TypeScript', 'CLI'] },
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
          <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(217,70,239,0.07),rgba(255,255,255,0.025)_38%,rgba(34,211,238,0.06))] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:shadow-xl hover:shadow-black/20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-fuchsia-300/0 via-violet-300/60 to-cyan-300/0 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900"><img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090a0e]/45 via-transparent to-transparent" /></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1 text-xs text-zinc-300">{item}</span>)}</div>
              <div className="mt-6"><a href="#" className="flex items-center gap-2 text-sm text-zinc-200 transition-colors duration-300 hover:text-teal-200"><FaExternalLinkAlt />Live Demo</a></div>
            </div>
          </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
