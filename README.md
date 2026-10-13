# Ember and Oak · Restaurant Table Booking Template

A warm dark themed restaurant website template with a complete table booking flow. Built with Vite + React + Tailwind CSS + Framer Motion.

## Features

1. **Hero** — hours and location badge, reserve call to action, auto rotating signature dishes carousel with manual controls
2. **Menu** — category tabs (Starters, Mains, Desserts, Drinks) rendered from local data with prices and animated transitions
3. **Booking form** — date, time slot, party size, name, phone plus optional notes. Inline validation, confirmation state with reference code, bookings persist in `localStorage` with cancel support
4. **Story** — gallery grid, chef story card and guest reviews
5. **Visit + footer** — address, contact, opening hours, map placeholder block ready for an iframe embed, footer nav

## Run

```bash
npm install && npm run dev
```

Build for production:

```bash
npm install && npm run build
```

## Customize

- **Name, address, hours, menu, reviews:** edit `src/data/site.js`. Everything on the page reads from this one file.
- **Accent color:** the single solid accent is `ember` (`#e0782f`). Change it in `tailwind.config.js` under `theme.extend.colors`.
- **Theme:** background tones are `coal`, `bark` and `card` in the same config file.
- **Time slots:** edit the `timeSlots` array in `src/data/site.js`.
- **Map:** replace the placeholder block in `src/components/Contact.jsx` with a maps iframe.
- **Storage:** bookings are stored under the `emberandoak_reservations` key (see `STORAGE_KEY` in `src/data/site.js`).

## Assumptions

- All restaurant content is fictional demo data; gallery tiles are solid color blocks so the template works fully offline with zero image assets.
- Bookings save to the visitor browser only (`localStorage`); there is no backend. Wire the `onSubmit` handler in `BookingForm.jsx` to an API when ready.
- Phone validation accepts any number with at least 7 digits to support international formats.
