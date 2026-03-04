import './App.css'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Experience from './components/Experience'
import Location from './components/Location'
import Footer from './components/Footer'

function AppContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Experience />
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
