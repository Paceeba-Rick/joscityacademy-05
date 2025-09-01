import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">JC</span>
              </div>
              <span className="font-bold text-xl">Jos City Soccer</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Building champions on and off the field through professional soccer training, character development, and a
              commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary-foreground/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary-foreground/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary-foreground/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary-foreground/10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/coaches"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Coaches
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Little Kickers (Ages 4-6)
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Youth Development (Ages 7-12)
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Competitive Academy (Ages 13-17)
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Elite Performance (Ages 16+)
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Goalkeeper Academy
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Summer Camps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  Jos City Sports Complex
                  <br />
                  Rayfield, Jos, Plateau State
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  +234 803 123 4567
                  <br />
                  +234 806 987 6543
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">info@joscitysoccer.com</div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-sm">
                  Mon-Fri: 3:00 PM - 8:00 PM
                  <br />
                  Sat-Sun: 8:00 AM - 6:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-secondary-foreground/80 text-sm">
              Subscribe to our newsletter for the latest news, events, and program updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/80 text-sm">
              © 2024 Jos City Soccer Academy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
