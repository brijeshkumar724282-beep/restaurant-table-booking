import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { signatures, site } from '../data/site.js'

function Plate({ initial, tone }) {
  return (
    <div className="flex items-center justify-center rounded-full bg-card p-6" aria-hidden="true">
      <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-cream/90 bg-bark">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full font-display text-4xl text-coal"
          style={{ backgroundColor: tone }}
        >
          {initial}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % signatures.length), 4200)
    return () => clearInterval(id)
  }, [paused])

  const dish = signatures[index]

  return (
    <section id="top" className="relative overflow-hidden bg-coal pt-28 md:pt-32" aria-labelledby="hero-heading">
      <div className="side-accent pointer-events-none absolute inset-x-0 top-0 h-1" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 md:grid-cols-2 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="inline-flex flex-wrap items-center gap-2 rounded-full border border-ember/60 bg-bark px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ember">
            <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-ember" />
            {site.hoursBadge}
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-sand">{site.address}</p>
          <h1 id="hero-heading" className="mt-3 font-display text-5xl leading-tight text-cream md:text-6xl">
            Fire kissed food, <span className="text-ember">room to linger</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-sand">{site.tagline}. Seasonal plates from the wood oven, poured with care.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#reserve"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-ember px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-coal"
            >
              Reserve a Table
            </motion.a>
            <a
              href="#menu"
              className="rounded-full border border-cream/40 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition-colors hover:border-ember hover:text-ember"
            >
              View the Menu
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
            {[
              ['14', 'Seats at the fire counter'],
              ['48', 'Wines by the glass'],
              ['4.9', 'Guest rating'],
            ].map(([n, label]) => (
              <div key={label} className="rounded-2xl bg-bark px-2 py-4">
                <dt className="order-2 mt-1 block text-[11px] uppercase tracking-widest text-sand">{label}</dt>
                <dd className="font-display text-3xl text-ember">{n}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-card bg-bark p-6 md:p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label="Signature dishes carousel"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-sand">Signatures of the house</p>
          <div className="relative mt-4 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <Plate initial={dish.initial} tone={dish.tone} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl text-cream">{dish.name}</h2>
                    <p className="mt-1 text-sm text-sand">{dish.note}</p>
                  </div>
                  <p className="rounded-full bg-ember px-4 py-1.5 font-display text-lg text-coal">${dish.price}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2" role="tablist" aria-label="Choose signature dish">
              {signatures.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show ${s.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-ember' : 'w-2.5 bg-cream/25 hover:bg-cream/50'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIndex((index - 1 + signatures.length) % signatures.length)}
                aria-label="Previous dish"
                className="rounded-full border border-cream/30 px-4 py-2 text-cream transition-colors hover:border-ember hover:text-ember"
              >
                ←
              </button>
              <button
                onClick={() => setIndex((index + 1) % signatures.length)}
                aria-label="Next dish"
                className="rounded-full border border-cream/30 px-4 py-2 text-cream transition-colors hover:border-ember hover:text-ember"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
