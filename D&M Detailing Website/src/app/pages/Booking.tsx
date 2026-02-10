import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const services = [
  {
    id: "exterior",
    name: "Exterior Detailing",
    price: "$120",
    description: "Full exterior wash, clay bar, polish, and wax",
  },
  {
    id: "interior",
    name: "Interior Detailing",
    price: "$150",
    description: "Deep clean, vacuum, leather treatment, odor removal",
  },
  {
    id: "full",
    name: "Full Detail Package",
    price: "$250",
    description: "Complete interior and exterior detailing",
  },
];

export function Booking() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send data to a backend
    alert(
      `Booking request submitted!\nService: ${selectedService}\nDate: ${date?.toLocaleDateString()}\nName: ${formData.name}`
    );
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Book Your Service</h1>
          <p className="text-xl text-muted-foreground">
            Choose your service and preferred date
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Service Selection */}
          <div>
            <h2 className="text-2xl mb-6">Select a Service</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`p-6 cursor-pointer transition-all ${
                    selectedService === service.id
                      ? "border-accent border-2 bg-accent/10"
                      : "hover:border-accent/50"
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <h3 className="text-xl mb-2">{service.name}</h3>
                  <p className="text-2xl text-accent mb-2">{service.price}</p>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <h2 className="text-2xl mb-6">Choose a Date</h2>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                className="rounded-lg border border-border bg-card p-4"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl mb-6">Your Information</h2>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
              <p className="text-sm text-foreground">
                <strong>GTA Mobile Service:</strong> We bring our premium detailing service to your location throughout the Greater Toronto Area! Please provide your postal code so we can confirm we service your area.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2 bg-card border border-border"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-2 bg-card border border-border"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-2 bg-card border border-border"
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  id="postalCode"
                  required
                  value={formData.postalCode}
                  onChange={(e) =>
                    setFormData({ ...formData, postalCode: e.target.value })
                  }
                  className="mt-2 bg-card border border-border"
                />
              </div>
              <div>
                <Label htmlFor="notes">Special Requests</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="mt-2 bg-card border border-border"
                  placeholder="Any special requests or concerns?"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              className="bg-accent text-accent-foreground hover:opacity-90 px-12 py-6 text-lg"
              disabled={!selectedService || !date}
            >
              Confirm Booking
            </Button>
          </div>

          {/* Business Hours */}
          <div className="text-center pt-4 pb-2">
            <p className="text-sm text-muted-foreground">
              <strong>Operating Hours:</strong> Monday - Saturday, 10 AM - 7 PM
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}