import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import FloatingDots from './FloatingDots'

const projects = [
  { title: 'E-commerce Platform', image: '/ecommerce-preview.svg', description: 'Modern e-commerce platform with authentication, products, cart and checkout.', tech: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Stripe', 'AWS', 'Git'] },
  { title: 'Video Streaming Platform', image: '/video-chat-preview.svg', description: 'Real-time communication platform for video and audio calls, with live messaging and collaboration.', tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'AWS'] },
  {
    title: 'File Sharing and Hosting Platform', image: '/filemoon.png', previewLabel: 'FileMoon', description: 'A secure file sharing and hosting platform for uploading, downloading, organizing, and sharing files using cloud storage.', tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3'], features: [
      'Secure authentication with access and refresh tokens.',
      'File upload, download, and deletion using AWS S3.',
      'Secure file sharing with specific recipients via email.',
      'File management, sharing history, and signed URL access.',
      'Docker deployment and CI/CD using GitHub Actions.',
    ]
  },

  {
    title: 'Servantly', image: '/image.png', previewLabel: 'Servantly', description: 'A servant booking platform connecting users with approved servant profiles.', tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3'], liveDemo: 'https://madiha-waleed.shop/', features: [
      'Role-based authentication for users, servants, and admins.',
      'Servant registration and admin approval workflow.',
      'Location-based search for approved servant profiles.',
      'Booking system with availability and working hours.',
      'Servant dashboards and admin management panel.',
    ]
  },
]

const Projects = () => {
  const [preview, setPreview] = useState<{ left: number; top: number; width: number; height: number; image: string; label: string } | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const keepPreviewOpen = () => {
    if (closeTimer.current !== null) clearTimeout(closeTimer.current)
  }
  const closePreview = () => {
    keepPreviewOpen()
    closeTimer.current = setTimeout(() => setPreview(null), 300)
  }
  const openPreview = (image: HTMLElement, project: typeof projects[number]) => {
    keepPreviewOpen()
    const rect = image.getBoundingClientRect()
    const margin = 12
    const rightSpace = window.innerWidth - rect.right - margin * 2
    const leftSpace = rect.left - margin * 2
    const besideImage = Math.max(rightSpace, leftSpace) >= 240
    const width = besideImage
      ? Math.min(600, Math.max(rightSpace, leftSpace))
      : Math.min(600, window.innerWidth - margin * 2)
    const aboveImage = !besideImage && rect.top - margin * 2 >= 120
    // On narrow screens, stay above the image or within its bounds so the
    // preview can never intercept the demo link or features underneath.
    const height = Math.min(
      560,
      width * 1.2,
      besideImage ? window.innerHeight - margin * 2
        : aboveImage ? rect.top - margin * 2
          : Math.max(1, Math.min(rect.bottom - margin, window.innerHeight - margin) - Math.max(margin, rect.top)),
    )
    const left = besideImage
      ? rightSpace >= leftSpace ? rect.right + margin : rect.left - width - margin
      : Math.max(margin, Math.min(rect.left, window.innerWidth - width - margin))
    const top = besideImage
      ? Math.max(margin, Math.min(rect.top, window.innerHeight - height - margin))
      : aboveImage ? rect.top - height - margin : Math.max(margin, rect.top)
    setPreview({ left, top, width, height, image: project.image, label: project.previewLabel ?? project.title })
  }

  useEffect(() => {
    const dismissPreview = () => setPreview(null)
    window.addEventListener('resize', dismissPreview)
    window.addEventListener('scroll', dismissPreview)
    return () => {
      if (closeTimer.current !== null) clearTimeout(closeTimer.current)
      window.removeEventListener('resize', dismissPreview)
      window.removeEventListener('scroll', dismissPreview)
    }
  }, [])

  return (<>
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
                <div onMouseEnter={project.previewLabel ? (event) => openPreview(event.currentTarget, project) : undefined} onMouseLeave={project.previewLabel ? closePreview : undefined} className="relative z-10 aspect-[16/9] overflow-hidden bg-zinc-900"><img src={project.image} alt={project.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" /><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090a0e]/65 via-[#090a0e]/5 to-transparent transition-colors duration-500 group-hover:from-[#090a0e]/45" /><div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.08] transition duration-300 group-hover:ring-cyan-100/20" /></div>
                <div onMouseEnter={project.previewLabel ? () => { keepPreviewOpen(); setPreview(null) } : undefined} className="relative z-10 p-6">
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-100">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">{project.description}</p>
                  {project.tech.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1 text-xs text-zinc-300 transition duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.055]">{item}</span>)}</div>}
                  <div className="mt-6"><a href={project.liveDemo ?? '#'} target={project.liveDemo ? '_blank' : undefined} rel={project.liveDemo ? 'noopener noreferrer' : undefined} className="project-demo-link inline-flex items-center gap-2 text-sm font-medium text-zinc-200 transition-colors duration-300 hover:text-teal-200"><FaExternalLinkAlt aria-hidden="true" />Live Demo <span aria-hidden="true" className="ml-0.5 transition-transform duration-300 group-hover:translate-x-1">↗</span></a></div>
                  {project.features && <ol className="mt-3 list-decimal space-y-1 pl-4 text-sm leading-5 text-gray-300">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ol>}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    {preview && createPortal(
      <aside aria-label={`${preview.label} screenshot preview`} onMouseEnter={keepPreviewOpen} onMouseLeave={closePreview} className="fixed z-50 overflow-x-hidden overflow-y-scroll overscroll-contain rounded-2xl border border-white/[0.08] bg-zinc-900 shadow-xl shadow-gray-400/10" style={{ left: preview.left, top: preview.top, width: preview.width, height: preview.height, scrollbarGutter: 'stable' }} tabIndex={0}>
        <img src={preview.image} alt={`Full ${preview.label} screenshot`} className="block h-auto w-full" />
      </aside>,
      document.body,
    )}
  </>)
}

export default Projects
