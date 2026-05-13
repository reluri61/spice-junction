import PageTitle from '../components/PageTitle'
import { contactInfo } from '../data'

export default function Terms() {
  return (
    <section className="content-section top-page-section legal-page">
      <div className="container legal-container">
        <PageTitle eyebrow="Legal" title="Terms & Conditions" />
        <div className="legal-card">
          <p>Welcome to Spice Junction. By using this website or placing an order through phone, WhatsApp, or any connected ordering method, you agree to the basic terms mentioned below.</p>
          <h3>Orders & Availability</h3>
          <p>Menu items, prices, offers, and availability may change based on restaurant operations, ingredient availability, and business hours. Final order confirmation will be shared by the restaurant team.</p>
          <h3>Payments & Pricing</h3>
          <p>Prices displayed on the website are for customer reference. Taxes, delivery charges, packaging charges, or third-party service charges may apply where relevant.</p>
          <h3>Pickup, Delivery & Cancellations</h3>
          <p>Pickup or delivery timing depends on restaurant workload and location. Once preparation starts, cancellation requests may not be accepted.</p>
          <h3>Food Information</h3>
          <p>Please inform the restaurant about allergies or dietary preferences before confirming the order. Spice Junction will try to assist, but customers are responsible for sharing correct food restrictions.</p>
          <h3>Contact</h3>
          <p>For questions about orders or menu information, please contact Spice Junction at {contactInfo.phoneLabel} or visit us at {contactInfo.address}.</p>
        </div>
      </div>
    </section>
  )
}
