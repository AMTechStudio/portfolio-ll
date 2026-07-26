import styles from './App.module.css'
import { Navbar } from '@/components/layout/Navbar/Navbar'
import { Hero } from '@/components/sections/Hero/Hero'
import { Projects } from '@/components/sections/Projects/Projects'
import { Footer } from '@/components/layout/Footer/Footer'

function App() {
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  )
}

export default App
