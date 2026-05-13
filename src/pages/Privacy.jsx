import PageTitle from '../components/PageTitle'
import { contactInfo } from '../data'

export default function Privacy() {
  return (
    <section className="content-section top-page-section legal-page">
      <div className="container legal-container">
        <PageTitle eyebrow="Legal" title="Privacy Policy" />
        <div className="legal-card">
          <p>Spice Junction respects customer privacy. This policy explains how basic customer information may be used when someone contacts us or places an order.</p>
          <h3>Information We Collect</h3>
          <p>When you contact us, we may receive your name, phone number, order details, delivery address, and messages shared through call or WhatsApp.</p>
          <h3>How We Use Information</h3>
          <p>Customer details are used only to confirm orders, provide updates, support pickup or delivery, respond to questions, and improve customer service.</p>
          <h3>Sharing of Information</h3>
          <p>We do not sell customer information. Details may only be shared with delivery or service partners when needed to complete an order.</p>
          <h3>External Links</h3>
          <p>This website may open WhatsApp, phone dialer, maps, or other third-party services. Their own privacy policies may apply.</p>
          <h3>Contact</h3>
          <p>For privacy-related questions, please contact Spice Junction at {contactInfo.phoneLabel} or visit us at {contactInfo.address}.</p>
        </div>
      </div>
    </section>
  )
}
