import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { STORAGE_KEY, timeSlots } from '../data/site.js'

const empty = { date: '', time: '', party: '2', name: '', phone: '', notes: '' }

function todayISO() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export default function BookingForm() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [saved, setSaved] = useState([])
  const [confirmed, setConfirmed] = useState(null)

  useEffect(() => {
    setSaved(loadSaved())
  }, [])

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }))
    setErrors((er) => ({ ...er, [k]: undefined }))
  }

  function validate() {
    const er = {}
    if (!form.date) er.date = 'Please pick a date.'
    else if (form.date < todayISO()) er.date = 'Date cannot be in the past.'
    if (!form.time) er.time = 'Please pick a time slot.'
    const party = Number(form.party)
    if (!party || party < 1 || party > 12) er.party = 'Party size must be 1 to 12.'
    if (form.name.trim().length < 2) er.name = 'Please enter your name.'
    if (form.phone.replace(/\D/g, '').length < 7) er.phone = 'Please enter a valid phone number.'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    const booking = { ...form, party: Number(form.party), id: `BK-${Date.now().toString(36).toUpperCase()}` }
    const next = [booking, ...loadSaved()].slice(0, 20)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* storage unavailable, still show confirmation */
    }
    setSaved(next)
    setConfirmed(booking)
    setForm(empty)
  }

  function cancel(id) {
    const next = saved.filter((b) => b.id !== id)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* ignore */
    }
    setSaved(next)
    if (confirmed && confirmed.id === id) setConfirmed(null)
  }

  const inputCls = (bad) =>
    `w-full rounded-xl border bg-coal px-4 py-3 text-cream placeholder:text-sand/60 ${
      bad ? 'border-red-400' : 'border-cream/20 focus:border-ember'
    }`

  return (
    <section id="reserve" className="bg-coal py-16 md:py-24" aria-labelledby="reserve-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-ember">Reservations</p>
          <h2 id="reserve-heading" className="mt-2 font-display text-4xl text-cream md:text-5xl">
            Book in under a minute
          </h2>
          <p className="mt-3 leading-relaxed text-sand">
            Pick a date, time and party size. Your booking saves to this device instantly and you get a reference code.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-sand">
            {['No card needed to reserve', 'Free cancellation up to 4 hours before', 'Parties over 12, call us directly'].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-ember text-xs font-bold text-coal">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>

          {saved.length > 0 && (
            <div className="mt-8 rounded-2xl bg-bark p-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-cream">Your bookings on this device</h3>
              <ul className="mt-3 space-y-3">
                {saved.map((b) => (
                  <li key={b.id} className="flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-3 text-sm">
                    <span className="text-cream">
                      {b.date} · {b.time} · {b.party} {b.party === 1 ? 'guest' : 'guests'}
                      <span className="block text-xs text-sand">{b.id}</span>
                    </span>
                    <button
                      onClick={() => cancel(b.id)}
                      className="rounded-full border border-cream/30 px-3 py-1.5 text-xs uppercase tracking-widest text-sand hover:border-red-400 hover:text-red-300"
                      aria-label={`Cancel booking ${b.id}`}
                    >
                      Cancel
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-3"
        >
          <AnimatePresence mode="wait">
            {confirmed ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-3xl border border-ember bg-bark p-8 text-center"
                role="status"
              >
                <p aria-hidden="true" className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ember text-2xl font-bold text-coal">
                  ✓
                </p>
                <h3 className="mt-4 font-display text-3xl text-cream">Table reserved</h3>
                <p className="mt-2 text-sand">
                  {confirmed.name}, your table for {confirmed.party} is set for {confirmed.date} at {confirmed.time}.
                </p>
                <p className="mx-auto mt-4 inline-block rounded-full bg-card px-5 py-2 font-mono text-sm tracking-widest text-ember">
                  {confirmed.id}
                </p>
                <p className="mt-2 text-xs text-sand">We will text {confirmed.phone} if anything changes.</p>
                <button
                  onClick={() => setConfirmed(null)}
                  className="mt-6 rounded-full bg-ember px-8 py-3 text-sm font-bold uppercase tracking-widest text-coal hover:bg-cream"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                noValidate
                className="rounded-3xl bg-bark p-6 md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="bk-date" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sand">
                      Date
                    </label>
                    <input id="bk-date" type="date" min={todayISO()} value={form.date} onChange={set('date')} className={inputCls(errors.date)} aria-invalid={!!errors.date} aria-describedby={errors.date ? 'err-date' : undefined} />
                    {errors.date && <p id="err-date" role="alert" className="mt-1 text-xs text-red-300">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="bk-time" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sand">
                      Time
                    </label>
                    <select id="bk-time" value={form.time} onChange={set('time')} className={inputCls(errors.time)} aria-invalid={!!errors.time} aria-describedby={errors.time ? 'err-time' : undefined}>
                      <option value="">Select a time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.time && <p id="err-time" role="alert" className="mt-1 text-xs text-red-300">{errors.time}</p>}
                  </div>
                  <div>
                    <label htmlFor="bk-party" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sand">
                      Party size
                    </label>
                    <input id="bk-party" type="number" min="1" max="12" value={form.party} onChange={set('party')} className={inputCls(errors.party)} aria-invalid={!!errors.party} aria-describedby={errors.party ? 'err-party' : undefined} />
                    {errors.party && <p id="err-party" role="alert" className="mt-1 text-xs text-red-300">{errors.party}</p>}
                  </div>
                  <div>
                    <label htmlFor="bk-name" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sand">
                      Full name
                    </label>
                    <input id="bk-name" type="text" autoComplete="name" placeholder="Jordan Ellis" value={form.name} onChange={set('name')} className={inputCls(errors.name)} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} />
                    {errors.name && <p id="err-name" role="alert" className="mt-1 text-xs text-red-300">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="bk-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sand">
                      Phone
                    </label>
                    <input id="bk-phone" type="tel" autoComplete="tel" placeholder="(555) 000 1234" value={form.phone} onChange={set('phone')} className={inputCls(errors.phone)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'err-phone' : undefined} />
                    {errors.phone && <p id="err-phone" role="alert" className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="bk-notes" className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-sand">
                      Notes <span className="font-normal normal-case">(optional)</span>
                    </label>
                    <input id="bk-notes" type="text" placeholder="Window seat, birthday..." value={form.notes} onChange={set('notes')} className={inputCls(false)} />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full rounded-full bg-ember py-4 text-sm font-bold uppercase tracking-widest text-coal hover:bg-cream"
                >
                  Confirm reservation
                </motion.button>
                <p className="mt-3 text-center text-xs text-sand">Saved to this device only. Nothing leaves your browser.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
