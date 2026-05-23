import { Helmet } from 'react-helmet-async'
import { content } from '../content'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import SpheresSection from '../components/sections/SpheresSection'
import TechnologiesSection from '../components/sections/TechnologiesSection'
import PartnersSection from '../components/sections/PartnersSection'
import SeminarsSection from '../components/sections/SeminarsSection'
import ContactsSection from '../components/sections/ContactsSection'

export default function MainPage() {
  return (
    <>
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection         id="hero" />
        <SpheresSection      id="spheres" />
        <TechnologiesSection id="technologies" />
        <PartnersSection     id="partners" />
        <SeminarsSection     id="seminars" />
        <ContactsSection     id="contacts" />
      </main>
      <Footer />
    </>
  )
}
