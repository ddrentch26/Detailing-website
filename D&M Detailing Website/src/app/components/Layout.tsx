import { Outlet, Link, useLocation } from "react-router";
import { Car } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <Car className="h-8 w-8" />
              <span className="font-semibold text-xl">Apex Precision</span>
            </Link>
            
            <nav className="flex gap-8">
              <Link
                to="/"
                className={`hover:text-accent transition-colors ${
                  isActive("/") ? "text-accent" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/our-work"
                className={`hover:text-accent transition-colors ${
                  isActive("/our-work") ? "text-accent" : ""
                }`}
              >
                Our Work
              </Link>
              <Link
                to="/booking"
                className={`hover:text-accent transition-colors ${
                  isActive("/booking") ? "text-accent" : ""
                }`}
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className={`hover:text-accent transition-colors ${
                  isActive("/contact") ? "text-accent" : ""
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2026 Apex Precision. All rights reserved.</p>
          <p className="text-sm text-primary-foreground/80">Proudly Serving the Greater Toronto Area</p>
        </div>
      </footer>
    </div>
  );
}