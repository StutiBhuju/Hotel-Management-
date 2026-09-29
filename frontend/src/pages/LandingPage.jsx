import React from 'react'
import Navbar from '../components/Landing/Navbar'
import HeroSection from '../components/Landing/HeroSection'
import FeaturedRooms from '../components/Landing/FeaturedRooms'
import HotelExperience from '../components/Landing/HotelExperience'
import WhyChooseUs from '../components/Landing/WhyChooseUs'
import LocationSection from '../components/Landing/LocationSection'
import CTASection from '../components/Landing/CTASection'
import Footer from '../components/Landing/Footer'

const LandingPage = () => {
  return (
  <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />
        <FeaturedRooms />
        <HotelExperience />
        <WhyChooseUs />
        <LocationSection />
        <CTASection />
        <Footer />

        {/* More sections will come here */}
      </main>
    </div>
  )
}

export default LandingPage