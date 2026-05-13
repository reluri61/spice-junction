export default function PageTitle({ eyebrow, title, action }) {
  return (
    <div className="section-head compact-head">
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2>{title}</h2>
      </div>
      {action || null}
    </div>
  )
}
