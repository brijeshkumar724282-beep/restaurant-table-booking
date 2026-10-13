import { motion } from 'framer-motion'
import { hours, site } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <section id="visit" className="bg-coal py-16 md:py-24" aria-labelledby="visit-heading">
        <div className="mx-auto max-w-6xl px-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-ember">Find us</p>
            <h2 id="visit-heading" className="mt-2 font-display text-4xl text-cream md:text-5xl">
              Visit for dinner
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-bark p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ember">Address</h3>
              <p className="mt-2 text-cream">{site.address}</p>
              <p className="mt-1 text-sm text-sand">Two blocks from Old Market Station. Street parking after 6pm.</p>
            </div>
            <div className="rounded-2xl bg-bark p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ember">Contact</h3>
              <p className="mt-2 text-cream">{site.phone}</p>
              <p className="mt-1 text-sm text-sand">{site.email}</p>
              <a href="#reserve" className="mt-3 inline-block rounded-full border border-ember px-5 py-2 text-xs font-bold uppercase tracking-widest text-ember hover:bg-ember hover:text-coal">
                Reserve online
              </a>
            </div>
            <div className="rounded-2xl bg-bark p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ember">Hours</h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span className="text-sand">{h.day}</span>
                    <span className="text-cream">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="mt-4 flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cream/25 bg-bark p-8 text-center"
            role="img"
            aria-label="Map placeholder. The restaurant is at 48 Lantern Row, Old Market District."
          >
            <p aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-ember font-display text-2xl text-coal">
              ✦
            </p>
            <p className="mt-3 font-display text-xl text-cream">Map placeholder</p>
            <p className="mt-1 max-w-md text-sm text-sand">
              Drop in your embed here. Replace this block with a Google Maps or OpenStreetMap iframe pointing at {site.address}.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-card bg-coal py-10" aria-label="Footer">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
          <p className="font-display text-2xl text-cream">
            Ember <span className="text-ember">&amp;</span> Oak
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-sand">
              <li><a href="#menu" className="hover:text-ember">Menu</a></li>
              <li><a href="#reserve" className="hover:text-ember">Reserve</a></li>
              <li><a href="#story" className="hover:text-ember">Our Story</a></li>
              <li><a href="#visit" className="hover:text-ember">Visit</a></li>
            </ul>
          </nav>
          <p className="text-xs text-sand">© 2026 {site.name}. Template demo, all content fictional.</p>
        </div>
      </footer>
    </>
  )
}
