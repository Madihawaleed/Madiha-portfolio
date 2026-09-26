import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react'

type ScrollRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  animation?: string
  delayMs?: number
}

const ScrollReveal = ({
  children,
  animation = 'animate__fadeInUp',
  delayMs = 0,
  className = '',
  style,
  ...props
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const reduceMotion = typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [isVisible, setIsVisible] = useState(() => reduceMotion || !('IntersectionObserver' in window))

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (reduceMotion || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${isVisible && !reduceMotion ? `animate__animated ${animation}` : ''} ${className}`.trim()}
      style={{ ...style, animationDelay: isVisible ? `${delayMs}ms` : undefined }}
      {...props}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
