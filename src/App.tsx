import { Hero } from './components/Hero'
import { PixelRow } from './components/PixelRow'
import { Terminal } from './components/Terminal'
import { Status } from './components/Status'
import { Work } from './components/Work'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="mx-auto flex max-w-[680px] flex-col gap-14 px-6 py-16">
      <Hero />
      <PixelRow />
      <Terminal />
      <Status />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
