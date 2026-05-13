import PageTitle from '../components/PageTitle'
import { contactInfo } from '../data'

const contactItems = [
  { label: 'Phone', value: contactInfo.phoneLabel },
  { label: 'WhatsApp', value: contactInfo.whatsappLabel },
  { label: 'Address', value: contactInfo.address },
]

const quickActions = [
  {
    title: 'Call Now',
    href: `tel:${contactInfo.phoneLabel.replace(/[^\d+]/g, '')}`,
    icon: '📞',
  },
  {
    title: 'WhatsApp',
    href: contactInfo.whatsapp,
    icon: '💬',
    external: true,
  },
  {
    title: 'View Location',
    href: 'https://maps.google.com/?q=1713+Park+Ave,+South+Plainfield,+NJ+07080',
    icon: '📍',
    external: true,
  },
]

export default function Contact() {
  return (
    <section className="content-section top-page-section contact-page-stable premium-contact-page">
      <div className="container">
        <PageTitle eyebrow="Contact" title="Visit Spice Junction" />

        <div className="contact-shell premium-contact-shell">
          <article className="info-panel compact contact-main-card clean-contact-card premium-glass-card animated-contact-card">
            <span className="contact-pill">Open for dine-in and takeout</span>
            <h2>Get in touch</h2>
            <p className="contact-copy">
              Connect with Spice Junction for menu details, table information, and quick updates.
              Check the contact details and use the quick action buttons for instant support.
            </p>

            <div className="contact-detail-list text-info-list restored-info-list">
              {contactItems.map((item) => (
                <div key={item.label} className="contact-detail-item glass-detail-item animated-contact-card">
                  <span className="detail-label">{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </article>

          <div className="premium-contact-right">
            <div className="contact-action-panel premium-glass-card animated-contact-card">
              <h3>Quick actions</h3>
              <div className="contact-action-grid premium-action-grid">
                {quickActions.map((item) => (
                  <a
                    key={item.title}
                    className="primary-btn premium-action-button"
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                  >
                    <span className="action-icon" aria-hidden="true">{item.icon}</span>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="premium-map-wrap premium-glass-card animated-contact-card">
              <div className="map-head">
                <span className="visit-card-kicker">Find us easily</span>
                <strong>{contactInfo.address}</strong>
              </div>
              <div className="map-embed-shell">
                <iframe
                  title="Spice Junction location"
                  src="https://www.google.com/maps?q=1713+Park+Ave,+South+Plainfield,+NJ+07080&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <a
          className="floating-whatsapp-button"
          href={contactInfo.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Open WhatsApp chat"
        >
          <span aria-hidden="true">💬</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  )
}
