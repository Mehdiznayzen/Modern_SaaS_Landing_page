import React from 'react'
import Header from './components/Header'
import { Features, Hero, Pricing, Download, Faq, Footer, Testimonials } from './containers/index'

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  )
}

export default HomePage