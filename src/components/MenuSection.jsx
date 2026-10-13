import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { categories, menu } from '../data/site.js'

export default function MenuSection() {
  const [active, setActive] = useState(categories[0])
  const items = menu.filter((m) => m.category === active)

  return (
    <section id="menu" className="bg-bark py-16 md:py-24" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-ember">Eat and drink</p>
          <h2 id="menu-heading" className="mt-2 font-display text-4xl text-cream md:text-5xl">
            The menu right now
          </h2>
          <p className="mt-3 text-sand">Printed fresh each week. Dishes change with the market, prices include everything.</p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Menu categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-colors ${
                active === c ? 'bg-ember text-coal' : 'border border-cream/30 text-cream hover:border-ember hover:text-ember'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-4 md:grid-cols-2"
            aria-live="polite"
          >
            {items.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-start justify-between gap-4 rounded-2xl bg-card p-5"
              >
                <div>
                  <h3 className="font-display text-xl text-cream">{item.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-sand">{item.desc}</p>
                </div>
                <p className="shrink-0 rounded-full bg-bark px-4 py-1.5 font-display text-lg text-ember">${item.price}</p>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        <p className="mt-8 text-sm text-sand">
          Something for every diet. Ask our team about vegetarian, vegan and gluten free options.
        </p>
      </div>
    </section>
  )
}
