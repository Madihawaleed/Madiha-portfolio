import { FaPaperPlane } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import FloatingDots from './FloatingDots'

const Contact = () => {
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const phone = String(formData.get('phone_number') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const subject = `Portfolio inquiry from ${name}`
    const body = `Name: ${name}\nPhone Number: ${phone}\n\nMessage:\n${message}`
    const mailtoUrl = `mailto:madiha.waleed17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.assign(mailtoUrl)
  }

  return (
    <section id="contact" className="section-with-floats reveal-section scroll-mt-8 px-0 py-24 sm:py-28">
      <FloatingDots />
      <div className="mx-auto max-w-3xl">
        <ScrollReveal animation="animate__fadeInDown" className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-200/80">Contact</p>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Let&apos;s Work Together</h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-400">Have a project or opportunity in mind? Feel free to get in touch.</p>
        </ScrollReveal>
        <ScrollReveal animation="animate__fadeInUp">
        <form onSubmit={sendEmail} className="space-y-5 rounded-3xl border border-white/[0.08] bg-[linear-gradient(135deg,rgba(148,163,184,0.13),rgba(39,39,42,0.18)_48%,rgba(100,116,139,0.12))] p-6 shadow-xl shadow-gray-400/10 transition duration-300 hover:border-slate-300/20 hover:shadow-gray-300/20 sm:p-8 md:p-10">
          <div>
            <label htmlFor="contact-name" className="text-sm text-gray-300">Name</label>
            <input id="contact-name" type="text" name="name" autoComplete="name" required placeholder="Your name" className="mt-2 w-full rounded-xl border border-white/[0.09] bg-black/15 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-cyan-200/35 focus:ring-2 focus:ring-cyan-200/10" />
          </div>
          <div>
            <label htmlFor="contact-phone" className="text-sm text-gray-300">Phone Number</label>
            <input id="contact-phone" type="tel" name="phone_number" autoComplete="tel" required placeholder="Your phone number" className="mt-2 w-full rounded-xl border border-white/[0.09] bg-black/15 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-cyan-200/35 focus:ring-2 focus:ring-cyan-200/10" />
          </div>
          <div>
            <label htmlFor="contact-message" className="text-sm text-gray-300">Message</label>
            <textarea id="contact-message" rows={5} name="message" required placeholder="How can I help?" className="mt-2 w-full resize-none rounded-xl border border-white/[0.09] bg-black/15 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-gray-600 focus:border-cyan-200/35 focus:ring-2 focus:ring-cyan-200/10" />
          </div>
          <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-xl border border-teal-200/20 bg-gradient-to-r from-teal-200 to-cyan-200 px-6 py-3.5 font-semibold text-[#10161a] transition duration-300 hover:-translate-y-0.5 hover:from-teal-100 hover:to-cyan-100"><FaPaperPlane />Send Message</button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
