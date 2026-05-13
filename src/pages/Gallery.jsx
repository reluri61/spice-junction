import PageTitle from '../components/PageTitle'
import SmartImage from '../components/SmartImage'
import { galleryImages } from '../data'

export default function Gallery() {
  return (
    <section className="content-section top-page-section">
      <div className="container">
        <PageTitle eyebrow="Gallery" title="Classic dining and food" />
        <div className="gallery-grid no-caption-grid">
          {galleryImages.map((item, index) => (
            <figure className="gallery-card" key={index}>
              <SmartImage src={item.image} alt="Spice Junction gallery" kind={item.kind} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
