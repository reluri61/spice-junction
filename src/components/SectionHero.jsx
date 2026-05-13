export default function SectionHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner compact-hero">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
