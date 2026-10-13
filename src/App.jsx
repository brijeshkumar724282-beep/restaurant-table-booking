import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MenuSection from './components/MenuSection.jsx'
import BookingForm from './components/BookingForm.jsx'
import Story from './components/Story.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-coal text-cream">
      <a href="#menu" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <BookingForm />
        <Story />
        <Contact />
      </main>
    </div>
  )
}
