import './App.css'
import { LanguageProvider } from './context/LanguageContext.jsx'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Experience from './components/Experience'
import Services from './components/Services'
import Itinerary from './components/Itinerary'
import Location from './components/Location'
import Footer from './components/Footer'

function AppContent() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Experience />
        <Services />
        <Itinerary />
        <Location />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
