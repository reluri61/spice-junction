import PageTitle from '../components/PageTitle'
import SmartImage from '../components/SmartImage'

export default function About() {
  return (
    <section className="content-section top-page-section">
      <div className="container split-grid modern-split">
        <div>
          <PageTitle eyebrow="About" title="Classic look. Traditional feel." />
          <div className="feature-stack compact-stack">
            <article className="feature-card"><span className="dot" /><p>Serving Indian classic flavors with a perfect blend of tradition and quality.</p></article>
            <article className="feature-card"><span className="dot" /><p>Fresh ingredients, rich taste, and a truly satisfying dining experience.</p></article>
            <article className="feature-card"><span className="dot" /><p>Where every meal feels special and memorable.</p></article>
          </div>
        </div>
        <div className="story-photo-frame shorter-frame">
          <SmartImage src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80" alt="Restaurant ambience" kind="interior" />
        </div>
      </div>
    </section>
  )
}
