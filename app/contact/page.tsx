import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, MessageSquare, UserPlus, Calendar } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-primary border-primary">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Contact Jos City Soccer Academy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Ready to start your soccer journey? Get in touch with us for inquiries, schedule a trial session, or
              register for our programs. We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Jos City Sports Complex
                    <br />
                    Rayfield, Jos, Plateau State
                    <br />
                    Nigeria
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    +234 803 123 4567
                    <br />
                    +234 806 987 6543
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    info@joscitysoccer.com
                    <br />
                    registration@joscitysoccer.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: 3:00 PM - 8:00 PM
                    <br />
                    Sat-Sun: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
                <p className="text-muted-foreground">Have questions about our programs? We'd love to hear from you.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="programs">Program Information</SelectItem>
                      <SelectItem value="trial">Trial Session</SelectItem>
                      <SelectItem value="coaching">Coaching Opportunities</SelectItem>
                      <SelectItem value="facilities">Facility Rental</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Registration Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserPlus className="w-5 h-5 text-accent" />
                  <span>Register Your Child</span>
                </CardTitle>
                <p className="text-muted-foreground">Ready to join? Fill out this form to register for our programs.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="childName">Child's Full Name</Label>
                  <Input id="childName" placeholder="Enter child's full name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="childAge">Age</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 years</SelectItem>
                        <SelectItem value="5">5 years</SelectItem>
                        <SelectItem value="6">6 years</SelectItem>
                        <SelectItem value="7">7 years</SelectItem>
                        <SelectItem value="8">8 years</SelectItem>
                        <SelectItem value="9">9 years</SelectItem>
                        <SelectItem value="10">10 years</SelectItem>
                        <SelectItem value="11">11 years</SelectItem>
                        <SelectItem value="12">12 years</SelectItem>
                        <SelectItem value="13">13 years</SelectItem>
                        <SelectItem value="14">14 years</SelectItem>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="16">16 years</SelectItem>
                        <SelectItem value="17">17 years</SelectItem>
                        <SelectItem value="18+">18+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">Preferred Program</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="little-kickers">Little Kickers (Ages 4-6)</SelectItem>
                      <SelectItem value="youth-development">Youth Development (Ages 7-12)</SelectItem>
                      <SelectItem value="competitive-academy">Competitive Academy (Ages 13-17)</SelectItem>
                      <SelectItem value="elite-performance">Elite Performance (Ages 16+)</SelectItem>
                      <SelectItem value="goalkeeper">Goalkeeper Academy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name</Label>
                  <Input id="parentName" placeholder="Enter parent/guardian name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentEmail">Parent/Guardian Email</Label>
                  <Input id="parentEmail" type="email" placeholder="Enter parent/guardian email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Parent/Guardian Phone</Label>
                  <Input id="parentPhone" type="tel" placeholder="Enter parent/guardian phone" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="medical" />
                    <Label htmlFor="medical" className="text-sm">
                      My child has no medical conditions that would prevent participation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and waiver of liability
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="text-sm">
                      I would like to receive updates about programs and events
                    </Label>
                  </div>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Visit Our Academy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Jos City with easy access and ample parking
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <Card className="bg-card border-border overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-12 h-12 text-primary mx-auto" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Jos City Sports Complex, Rayfield</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">Getting Here</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>By Car:</strong> Take Rayfield Road from Jos city center. The academy is located within
                      the Jos City Sports Complex.
                    </p>
                    <p>
                      <strong>Public Transport:</strong> Take any bus heading to Rayfield and alight at the Sports
                      Complex junction.
                    </p>
                    <p>
                      <strong>Parking:</strong> Free parking available on-site for parents and visitors.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-card-foreground">What to Bring</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Soccer boots or athletic shoes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Comfortable sports clothing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Water bottle</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>Shin guards (for competitive programs)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of young athletes who have already started their journey with Jos City Soccer Academy.
              Contact us today to schedule your free trial session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Trial Session
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +234 803 123 4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
