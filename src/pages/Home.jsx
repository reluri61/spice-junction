import SmartImage from '../components/SmartImage'
import { heroImages, contactInfo, restaurantDetails } from '../data'

export default function Home() {
  return (
    <>
      <section className="restaurant-hero">
        <SmartImage src={heroImages[1].image} alt="Spice Junction signature Indian dish" kind={heroImages[1].kind} />
        <div className="restaurant-hero-shade" />
        <div className="floating-offer-wrap" aria-label="Opening week exclusive offer">
          <div className="floating-offer-card fade-rise delay-1">
            <span>Opening Week Exclusive Offer</span>
            <strong>Eat anything for $9.99</strong>
            <p>Limited-time dine-in special at Spice Junction.</p>
          </div>
        </div>
        <div className="container restaurant-hero-content fade-rise delay-1">
          <h1>{restaurantDetails.name}</h1>
          <p>{restaurantDetails.tagline}</p>
        </div>
      </section>

      <section className="visit-strip">
        <div className="container visit-strip-grid">
          <a className="visit-strip-card" href={contactInfo.mapUrl} target="_blank" rel="noreferrer">
            <span>Visit</span>
            <strong>{contactInfo.address}</strong>
          </a>
          <a className="visit-strip-card" href={`tel:${contactInfo.phoneLabel.replace(/[^\d+]/g, '')}`}>
            <span>Call</span>
            <strong>{contactInfo.phoneLabel}</strong>
          </a>
          <div className="visit-strip-card">
            <span>Hours</span>
            <strong>{restaurantDetails.hours.join(' · ')}</strong>
          </div>
        </div>
      </section>

    </>
  )
}
