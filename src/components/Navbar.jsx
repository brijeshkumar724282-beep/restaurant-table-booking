import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site.js'

const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#reserve', label: 'Reserve' },
  { href: '#story', label: 'Our Story' },
  { href: '#visit', label: 'Visit' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? 'bg-coal' : 'bg-transparent'}`}
    >
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-xl tracking-wide text-cream">
          Ember <span className="text-ember">&amp;</span> Oak
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm uppercase tracking-widest text-sand transition-colors hover:text-ember">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reserve"
          className="hidden rounded-full bg-ember px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-coal transition-colors hover:bg-cream md:inline-block"
        >
          Book a Table
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-md p-2 text-cream md:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-card bg-coal px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-cream hover:bg-card"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-ember px-5 py-3 text-center text-sm font-bold uppercase tracking-widest text-coal"
              >
                Book a Table
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-widest text-sand">{site.hoursBadge}</p>
        </div>
      )}
    </motion.header>
  )
}
