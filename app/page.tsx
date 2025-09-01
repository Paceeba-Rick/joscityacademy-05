"use client"

import { SinglePageNavigation } from "@/components/single-page-navigation"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Star, MapPin, Phone, Mail, Clock, Award, Shield, Heart, Zap } from "lucide-react"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Account for fixed navigation header
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <SinglePageNavigation />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10"
      >
        <div className="absolute inset-0 bg-[url('/soccer-field-aerial.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Jos City Soccer <span className="text-primary">Academy</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Developing champions on and off the field through professional training, character building, and a passion
              for excellence. Located in the heart of Accra, Ghana.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-transparent"
                onClick={() => scrollToSection("gallery")}
              >
                Watch Our Story
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">150+</div>
                <div className="text-muted-foreground">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">8+</div>
                <div className="text-muted-foreground">Expert Coaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">5</div>
                <div className="text-muted-foreground">Age Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">5</div>
                <div className="text-muted-foreground">Years Excellence</div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
                  From Malibu FC to Jos City Soccer Academy
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Founded in 2020 as Malibu FC and rebranded to Jos City Soccer Academy in 2025, we are located in
                  Adenta Amrahia, Accra, Ghana. Our academy provides comprehensive soccer training for young athletes
                  aged 10-20 years, with accommodation facilities and field-based learning that focuses on practical
                  skills development.
                </p>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Under the leadership of Mr. Joseph Addai CEO of the Academy, Deputy CEO and Brand Director Akua Nhyiradom Boahen, and
                  Head of Marketing, Owen Abrefa Busia, we've created a unique environment where everything happens on
                  the field - no formal classroom lessons, just pure soccer development.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-6 w-6 text-primary" />
                    <span className="text-card-foreground">Field-Based Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-primary" />
                    <span className="text-card-foreground">Player Accommodation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6 text-primary" />
                    <span className="text-card-foreground">Ages 10-20 Years</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-primary" />
                    <span className="text-card-foreground">Ghana's Premier Academy</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection("programs")}>
                  Learn More About Us
                </Button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="relative">
                <img
                  src="/rebrand-team-group-photo.jpeg"
                  alt="Jos City Soccer Academy team group photo showing players in yellow and white jerseys"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">2025</div>
                  <div className="text-sm">Rebranded Year</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Age Category Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive soccer programs designed for different age groups, all conducted on-field with practical
                training methods and accommodation facilities available.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Under 10 (U10)",
                age: "Ages 10 years",
                description: "Foundation building with focus on basic skills, ball control, and love for the game.",
                features: [
                  "Basic ball skills",
                  "Coordination development",
                  "Team play introduction",
                  "Fun-based learning",
                ],
                icon: Heart,
              },
              {
                title: "Under 13 (U13)",
                age: "Ages 11-13 years",
                description: "Skill development phase with emphasis on technique and tactical understanding.",
                features: ["Technical skills", "Tactical awareness", "Physical development", "Character building"],
                icon: Shield,
              },
              {
                title: "Under 15 (U15)",
                age: "Ages 14-15 years",
                description: "Advanced training with competitive focus and leadership development.",
                features: ["Advanced tactics", "Leadership skills", "Competition preparation", "Mental strength"],
                icon: Target,
              },
              {
                title: "Under 17 (U17)",
                age: "Ages 16-17 years",
                description: "Pre-professional training with high-level competition and scouting opportunities.",
                features: [
                  "Professional preparation",
                  "High-level competition",
                  "Scouting exposure",
                  "Career guidance",
                ],
                icon: Zap,
              },
              {
                title: "Under 20 (U20)",
                age: "Ages 18-20 years",
                description: "Elite level training for players transitioning to professional soccer.",
                features: ["Elite training", "Professional pathways", "Advanced conditioning", "Career development"],
                icon: Award,
              },
            ].map((program, index) => (
              <ScrollAnimation key={program.title} delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{program.title}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {program.age}
                    </Badge>
                    <p className="text-muted-foreground mb-4 text-pretty">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Official Kit Section */}
      <section id="kit" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Official Academy Kit</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our professional light blue uniform represents the pride and identity of Jos City Soccer Academy, worn
                by all our players across different age categories.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="text-center">
                <img
                  src="/academy-jersey-back.jpeg"
                  alt="Jos City FC official jersey back view with number 17"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-6"
                />
                <h3 className="text-xl font-bold text-card-foreground mb-2">Official Jersey</h3>
                <p className="text-muted-foreground text-pretty">
                  Light blue jersey with navy numbering and "JOS CITY FC" branding, representing our academy's
                  professional standards.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <img
                  src="/academy-shorts.jpeg"
                  alt="Jos City FC official shorts with number 17 and academy logo"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-6"
                />
                <h3 className="text-xl font-bold text-card-foreground mb-2">Official Shorts</h3>
                <p className="text-muted-foreground text-pretty">
                  Matching light blue shorts featuring player numbers and the official Jos City Football Club crest with
                  our founding year.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400}>
            <div className="text-center mt-12">
              <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-bold text-card-foreground mb-2">Uniform Standards</h4>
                <p className="text-muted-foreground text-pretty">
                  All players receive their official kit upon enrollment, maintaining our professional appearance and
                  team unity across all age categories from U10 to U20.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="coaches" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Our Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Meet the dedicated leadership team behind Jos City Soccer Academy's success and growth in Ghana's soccer
                development landscape.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Joseph Addai",
                role: "Chief Executive Officer",
                experience: "Businessman & Academy Founder",
                credentials: "Visionary leader driving soccer development in Ghana",
                image: "/joseph-addai.jpeg",
              },
              {
                name: "Akua Nhyiradom Boahen",
                role: "Deputy CEO & Brand Director",
                experience: "Brand Development & Strategic Leadership",
                credentials: "Expert in academy branding and strategic growth",
                image: "/akua-boahen.jpeg",
              },
              {
                name: "Owen Abrefa Busia",
                role: "Head of Marketing",
                experience: "Marketing & Community Outreach",
                credentials: "Specialist in sports marketing and community engagement",
                image: "/owen.png",
              },
            ].map((leader, index) => (
              <ScrollAnimation key={leader.name} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-card-foreground mb-1">{leader.name}</h3>
                    <p className="text-primary font-medium mb-2">{leader.role}</p>
                    <p className="text-sm text-muted-foreground mb-2">{leader.experience}</p>
                    <p className="text-xs text-muted-foreground">{leader.credentials}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academy in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Capturing the energy, passion, and dedication that defines our soccer academy community in Ghana.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: "/academy-players-different-jerseys.jpeg", alt: "Academy players in different team jerseys" },
              { src: "/night-match-celebration.jpeg", alt: "Player celebrating during night match" },
              { src: "/team-photo-red-jerseys.jpeg", alt: "Team photo with players in red jerseys" },
              { src: "/players-bench-orange-jerseys.jpeg", alt: "Players on bench in orange jerseys" },
              { src: "/players-yellow-black-jerseys.jpeg", alt: "Players in yellow and black striped jerseys" },
              { src: "/young-girl-player.jpeg", alt: "Young female player at the academy" },
              { src: "/players-white-jerseys-training.jpeg", alt: "Players in white jerseys during training" },
              { src: "/large-group-academy-photo.jpeg", alt: "Large group photo of academy players" },
              { src: "/players-stadium-seats.jpeg", alt: "Players and staff relaxing in colorful stadium seats" },
              { src: "/night-celebration-victory.jpeg", alt: "Victory celebration during night match" },
              { src: "/team-black-white-jerseys.jpeg", alt: "Team photo with black and white striped jerseys" },
              {
                src: "/ghana-football-association-event.jpeg",
                alt: "Academy representatives at Ghana Football Association event",
              },
            ].map((image, index) => (
              <ScrollAnimation key={index} delay={index * 50}>
                <div className="relative overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer group">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Join Our Academy</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Ready to start your soccer journey in Ghana's premier academy? Get in touch with us today and become
                part of the Jos City Soccer Academy family.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-card-foreground">Location</h4>
                      <p className="text-muted-foreground">Adenta Amrahia, Accra, Ghana, West Africa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-card-foreground">Phone</h4>
                      <p className="text-muted-foreground">+233 201 000 109</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-card-foreground">Email</h4>
                      <p className="text-muted-foreground">info@joscitysoccer.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-card-foreground">Training Hours</h4>
                      <p className="text-muted-foreground">Teusday-Friday:</p>
                      <p className="text-muted-foreground"> Morning 6:00AM - 10:00 AM</p>
                      <p className="text-muted-foreground">Evening 3:00PM - 6:00PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-card-foreground">Accommodation</h4>
                      <p className="text-muted-foreground">Residential facilities available for players</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-6">Register Now</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" className="bg-input" />
                      <Input placeholder="Last Name" className="bg-input" />
                    </div>
                    <Input placeholder="Email Address" type="email" className="bg-input" />
                    <Input placeholder="Phone Number" type="tel" className="bg-input" />
                    <select className="w-full p-3 rounded-md border bg-input text-foreground">
                      <option value="">Select Age Category</option>
                      <option value="u10">Under 10 (Age 10)</option>
                      <option value="u13">Under 13 (Ages 11-13)</option>
                      <option value="u15">Under 15 (Ages 14-15)</option>
                      <option value="u17">Under 17 (Ages 16-17)</option>
                      <option value="u20">Under 20 (Ages 18-20)</option>
                    </select>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="accommodation" className="rounded" />
                      <label htmlFor="accommodation" className="text-sm text-muted-foreground">
                        I'm interested in accommodation facilities
                      </label>
                    </div>
                    <Textarea
                      placeholder="Tell us about your soccer experience and goals..."
                      className="bg-input"
                      rows={4}
                    />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                      Register for Training
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/jos-city-logo.jpeg" alt="Jos City Soccer Academy Logo" className="w-8 h-8 object-contain" />
                <span className="font-bold text-lg">Jos City Soccer</span>
              </div>
              <p className="text-sm text-background/80 text-pretty">
                Ghana's premier soccer academy developing champions through field-based training and character building
                since 2020.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection("about")} className="text-background/80 hover:text-background">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("programs")}
                    className="text-background/80 hover:text-background"
                  >
                    Programs
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("kit")} className="text-background/80 hover:text-background">
                    Official Kit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("coaches")}
                    className="text-background/80 hover:text-background"
                  >
                    Leadership
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-background/80 hover:text-background"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Age Categories</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Under 10 (Age 10)</li>
                <li>Under 13 (Ages 11-13)</li>
                <li>Under 15 (Ages 14-15)</li>
                <li>Under 17 (Ages 16-17)</li>
                <li>Under 20 (Ages 18-20)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Adenta Amrahia, Accra</li>
                <li>Ghana, West Africa</li>
                <li>+233 201 000 109</li>
                <li>info@joscitysoccer.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2025 Jos City Soccer Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
