import { Mail, Phone, MapPin } from "lucide-react";

export function ContactUs() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center mb-4">Contact Us</h1>
        <p className="text-center text-lg mb-2 text-muted-foreground">
          Get in touch with us for any questions or inquiries
        </p>
        <p className="text-center text-md mb-12 text-accent font-semibold">
          Serving the Greater Toronto Area
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl mb-2">Phone</h3>
            <p className="text-muted-foreground">(555) 123-4567</p>
          </div>
          
          <div className="text-center bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl mb-2">Email</h3>
            <p className="text-muted-foreground">info@apexprecision.com</p>
          </div>
          
          <div className="text-center bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl mb-2">Location</h3>
            <p className="text-muted-foreground">123 Auto Street<br />Your City, ST 12345</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <h2 className="text-3xl mb-6 text-center">Send us a Message</h2>
            <form>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-name" className="block mb-2">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="contact-subject" className="block mb-2">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="contact-message" className="block mb-2">Message</label>
                <textarea
                  id="contact-message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
                  placeholder="How can we help you?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}