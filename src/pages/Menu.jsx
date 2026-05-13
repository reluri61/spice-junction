import PageTitle from '../components/PageTitle'

export default function Menu() {
  return (
    <section className="content-section top-page-section menu-page-shell">
      <div className="container">
        <PageTitle eyebrow="Menu" title="Choose a category" />

        <div className="menu-category-button-grid">
          <a className="menu-category-button fade-rise delay-1" href="#breakfast">
            <span>Morning bites</span>
            <strong>Breakfast</strong>
          </a>
          <a className="menu-category-button fade-rise delay-2" href="#street-food">
            <span>Snacks and starters</span>
            <strong>Street Food</strong>
          </a>
          <a className="menu-category-button fade-rise delay-3" href="#main-course">
            <span>Pulavs, Biryanis & Appetizers</span>
            <strong>Main Course</strong>
          </a>
          <a className="menu-category-button fade-rise delay-1" href="#beverages-sweets">
            <span>Drinks and desserts</span>
            <strong>Beverages &amp; Sweets</strong>
          </a>
        </div>
      </div>
    </section>
  )
}
