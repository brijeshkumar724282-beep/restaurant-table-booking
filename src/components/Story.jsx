import { motion } from 'framer-motion'
import { gallery, reviews } from '../data/site.js'

function Stars({ n }) {
  return (
    <p aria-label={`${n} out of 5 stars`} className="text-sm tracking-widest text-ember">
      {'★'.repeat(n)}{'☆'.repeat(5 - n)}
    </p>
  )
}

export default function Story() {
  return (
    <section id="story" className="bg-bark py-16 md:py-24" aria-labelledby="story-heading">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-ember">Our story</p>
            <h2 id="story-heading" className="mt-2 font-display text-4xl text-cream md:text-5xl">
              One fire, one room, one long table spirit
            </h2>
            <p className="mt-4 leading-relaxed text-sand">
              Chef Elena Marsh opened Ember and Oak in 2016 with a single wood oven and a simple rule: cook what the
              morning market gives us. Nine years on, the fire never goes out and the menu still follows the seasons.
            </p>
            <p className="mt-3 leading-relaxed text-sand">
              Everything is made in house, from the sourdough to the smoked butter. Come hungry, stay late.
            </p>
            <div className="mt-6 flex items-center gap-4 rounded-2xl bg-card p-5">
              <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ember font-display text-2xl text-coal">
                E
              </span>
              <div>
                <p className="font-display text-lg text-cream">Elena Marsh</p>
                <p className="text-sm text-sand">Founder and head chef</p>
              </div>
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
            aria-label="Restaurant gallery"
          >
            {gallery.map((g, i) => (
              <motion.li
                key={g.id}
                whileHover={{ scale: 1.03 }}
                className={`flex min-h-[140px] flex-col justify-between rounded-2xl p-4 ${i === 0 ? 'col-span-2 row-span-2 min-h-[220px]' : ''}`}
                style={{ backgroundColor: g.tone }}
              >
                <span aria-hidden="true" className="font-display text-4xl text-cream/80">{g.initial}</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-cream">{g.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-2xl text-cream md:text-3xl">What guests say</h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.li
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-card p-6"
              >
                <Stars n={r.rating} />
                <blockquote className="mt-3 leading-relaxed text-cream">“{r.text}”</blockquote>
                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-sand">{r.name}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
