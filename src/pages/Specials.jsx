import SmartImage from '../components/SmartImage'
import PageTitle from '../components/PageTitle'
import { specials } from '../data'

export default function Specials() {
  return (
    <section className="content-section top-page-section">
      <div className="container">
        <PageTitle eyebrow="Specials" title="Popular menu favourites" />
        <div className="card-grid three-up compact-cards stagger-grid">
          {specials.map((item, index) => (
            <article className={`food-card label-card fade-rise delay-${(index % 3) + 1}`} key={item.title}>
              <div className="image-frame tall responsive-frame">
                <SmartImage src={item.image} alt={item.title} kind={item.kind} />
              </div>
              <div className="card-copy minimal-copy">
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
