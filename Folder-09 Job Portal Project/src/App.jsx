import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/FindYourJobs/Hero'
import Heading from './components/Featured Jobs/Heading'
import Company from './components/Top Companies/Company'
import Main from './components/WhyChooseUS/main'
import Container from './components/Testimonials/Container'
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <div>
      <Navbar/>
      <Hero/>
    </div>

    <div>
      <Heading/>
    </div>

    <div>
      <Company/>
    </div>

    <div>
      <Main />
    </div>

    <div>
      <Container/>
    </div>

    <div>
      <Footer />
    </div>
    </div>
  )
}

export default App
