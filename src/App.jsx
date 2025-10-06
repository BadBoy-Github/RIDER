import Contact from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Review from "./components/Review"


const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Features />
      <Review />
      <Contact />
      <Footer />
    </div>
  )
}

export default App