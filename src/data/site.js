export const site = {
  name: 'Ember and Oak',
  tagline: 'Wood fired cooking in the heart of the neighborhood',
  address: '48 Lantern Row, Old Market District',
  phone: '(555) 214 8890',
  email: 'hello@emberandoak.example',
  hoursBadge: 'Open Tue to Sun · 5pm to 11pm',
}

export const hours = [
  { day: 'Tuesday to Thursday', time: '5pm to 10pm' },
  { day: 'Friday and Saturday', time: '5pm to 11pm' },
  { day: 'Sunday', time: '4pm to 9pm' },
  { day: 'Monday', time: 'Closed' },
]

export const categories = ['Starters', 'Mains', 'Desserts', 'Drinks']

export const menu = [
  { id: 's1', category: 'Starters', name: 'Charred Sourdough and Smoked Butter', desc: 'House loaf, oak smoked butter, flaked salt', price: 7 },
  { id: 's2', category: 'Starters', name: 'Roasted Beets and Whipped Goat Cheese', desc: 'Pistachio, honey, sherry glaze', price: 11 },
  { id: 's3', category: 'Starters', name: 'Crispy Calamari, Lemon Aioli', desc: 'Flash fried, parsley, charred lemon', price: 13 },
  { id: 's4', category: 'Starters', name: 'Wild Mushroom Soup', desc: 'Thyme cream, toasted seeds, chive oil', price: 9 },
  { id: 'm1', category: 'Mains', name: 'Oak Fired Ribeye', desc: '28 day aged, bone marrow butter, watercress', price: 32 },
  { id: 'm2', category: 'Mains', name: 'Ember Roast Chicken', desc: 'Half bird, preserved lemon, pan juices', price: 24 },
  { id: 'm3', category: 'Mains', name: 'Cedar Plank Salmon', desc: 'Miso glaze, charred greens, sesame', price: 27 },
  { id: 'm4', category: 'Mains', name: 'Truffle Tagliatelle', desc: 'Hand cut pasta, parmesan cream, chives', price: 21 },
  { id: 'm5', category: 'Mains', name: 'Smoked Short Rib', desc: 'Twelve hour cook, pickled onion, jus', price: 29 },
  { id: 'd1', category: 'Desserts', name: 'Burnt Basque Cheesecake', desc: 'Macerated plums, bay ice cream', price: 10 },
  { id: 'd2', category: 'Desserts', name: 'Dark Chocolate Torte', desc: 'Sea salt, olive oil, cocoa nib', price: 9 },
  { id: 'd3', category: 'Desserts', name: 'Wood Oven Apple Crumble', desc: 'Oat crust, brown butter custard', price: 8 },
  { id: 'k1', category: 'Drinks', name: 'Smoked Old Fashioned', desc: 'Oak smoke, demerara, bitters', price: 13 },
  { id: 'k2', category: 'Drinks', name: 'Blood Orange Spritz', desc: 'Bitter aperitivo, prosecco, rosemary', price: 11 },
  { id: 'k3', category: 'Drinks', name: 'House Red, Nero d’Avola', desc: 'Glass pour, Sicily', price: 9 },
  { id: 'k4', category: 'Drinks', name: 'Cold Brew Tonic', desc: 'Double espresso, tonic, orange peel', price: 6 },
]

export const signatures = [
  { id: 'g1', name: 'Oak Fired Ribeye', note: 'Our most ordered plate', price: 32, initial: 'R', tone: '#e0782f' },
  { id: 'g2', name: 'Ember Roast Chicken', note: 'Brined overnight, finished over coals', price: 24, initial: 'C', tone: '#8fae6a' },
  { id: 'g3', name: 'Smoked Old Fashioned', note: 'Finished with oak smoke at the table', price: 13, initial: 'O', tone: '#c9a24b' },
  { id: 'g4', name: 'Burnt Basque Cheesecake', note: 'Baked daily at noon, gone by nine', price: 10, initial: 'B', tone: '#b96a4b' },
]

export const gallery = [
  { id: 'a', label: 'The open fire kitchen', tone: '#3a2a1d', initial: 'F' },
  { id: 'b', label: 'The dining room at dusk', tone: '#2c3a2a', initial: 'D' },
  { id: 'c', label: 'Fresh bread every afternoon', tone: '#4a3320', initial: 'B' },
  { id: 'd', label: 'The bar and smoke shelf', tone: '#33302a', initial: 'S' },
  { id: 'e', label: 'Garden seating in summer', tone: '#2a3a33', initial: 'G' },
  { id: 'f', label: 'Plating the evening service', tone: '#3d2b33', initial: 'P' },
]

export const reviews = [
  { id: 'r1', name: 'Maya R.', text: 'The ribeye alone is worth the visit. Warm room, kind staff, zero rush.', rating: 5 },
  { id: 'r2', name: 'Daniel K.', text: 'Booked online in a minute. The smoked old fashioned arrived still wisping smoke.', rating: 5 },
  { id: 'r3', name: 'Priya S.', text: 'Cozy, glowing, delicious. The mushroom soup tasted like autumn in a bowl.', rating: 4 },
]

export const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM']

export const STORAGE_KEY = 'emberandoak_reservations'
