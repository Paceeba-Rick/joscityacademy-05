"use client"

import { SinglePageNavigation } from "@/components/single-page-navigation"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Users,
  Target,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Shield,
  Heart,
  Zap,
  Youtube,
  Video,
  Cloud,
  Facebook,
  Instagram,
  Calendar,
} from "lucide-react"

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
        <div className="absolute inset-0 bg-[url('/hero-team-celebration.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              JOS CITY SOCCER <span className="metallic-gold-text">ACADEMY</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Developing champions on and off the field through professional training, character building, and a passion
              for excellence. Located in the heart of Accra, Ghana.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3"
                onClick={() => scrollToSection("contact")}
              >
                Start Your Journey
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 bg-white/10 border-foreground text-foreground hover:bg-foreground hover:text-background"
                onClick={() => scrollToSection("gallery")}
              >
                Watch Our Story
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">150+</div>
                <div className="text-foreground">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
                <div className="text-foreground">Expert Coaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">5</div>
                <div className="text-foreground">Age Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">5</div>
                <div className="text-foreground">Years Excellence</div>
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
                <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
                  From Malibu FC to <strong>JOS CITY SOCCER ACADEMY</strong>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Founded in 2020 as Malibu FC and rebranded to <strong>JOS CITY SOCCER ACADEMY</strong> in 2025, we are
                  located in Adenta Amrahia, Accra, Ghana. Our academy provides comprehensive soccer training for young
                  athletes aged 10-20 years, with accommodation facilities and field-based learning that focuses on
                  practical skills development.
                </p>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Under the leadership of CEO Mr. Joseph Addai, Deputy CEO and Brand Director Akua Nhyiradom Boahen, and
                  Head of Marketing Owen Abrefa Busia, we've created a unique environment where everything happens on
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
                  alt="JOS CITY SOCCER ACADEMY team group photo showing players in yellow and white jerseys"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
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
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                      <program.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{program.title}</h3>
                    <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent border-accent/20">
                      {program.age}
                    </Badge>
                    <p className="text-muted-foreground mb-4 text-pretty">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
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
                Our professional light blue uniform represents the pride and identity of
                <strong> JOS CITY SOCCER ACADEMY</strong>, worn by all our players across different age categories.
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
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 max-w-2xl mx-auto">
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
                Meet the dedicated leadership team behind <strong>JOS CITY SOCCER ACADEMY</strong>'s success and growth
                in Ghana's soccer development landscape.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Joseph Addai",
                role: "Chief Executive Officer",
                experience: "Businessman & Academy Founder",
                credentials:
                  "Visionary leader driving soccer development in Ghana. Member of African Football Agent Association",
                image: "/joseph-addai.jpeg",
              },
              {
                name: "Akua Nhyiradom Boahen",
                role: "Deputy CEO & Brand Director",
                experience: "Brand Development & Strategic Leadership",
                credentials: "Expert in academy branding and strategic growth",
                image: "/akua-boahen-new.jpeg",
              },
              {
                name: "Owen Abrefa Busia",
                role: "Head of Marketing",
                experience: "Marketing & Community Outreach",
                credentials: "Specialist in sports marketing and community engagement",
                image: "/owen-abrefa-busia-new.jpeg",
              },
              {
                name: "Mr. Daniel Osei Bonsu",
                role: "Administrator",
                experience: "Operations & Administrative Management",
                credentials: "Overseeing academy operations and administrative excellence",
                image: "/administrator-daniel-osei-bonsu-new.png",
              },
              {
                name: "Dauda Jawara (Giovanni Trapattoni)",
                role: "Head Coach",
                experience: "CAF/UEFA Licensed Coach",
                credentials:
                  "Former head coach Real Madrid Foundation Egypt, El Gouna Egypt, Al Bairat club Luxor Egypt",
                image: "/coach-dauda-jawara.jpeg",
              },
              {
                name: "Kwadwo Ohene Samba",
                role: "Coach",
                experience: "Youth Development Specialist",
                credentials:
                  "Former player for Okwawu United Bright Future. Dedicated to nurturing young talent and technical skill development",
                image: "/coach-kwadwo-ohene-samba.jpeg",
              },
            ].map((leader, index) => (
              <ScrollAnimation key={leader.name} delay={index * 100}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-40 h-40 rounded-full mx-auto mb-4 object-cover object-top"
                    />
                    <h3 className="text-xl font-bold text-card-foreground mb-1">{leader.name}</h3>
                    <p className="text-accent font-medium mb-2">{leader.role}</p>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-max">
            {/* International coaching excellence - featured prominently */}
            <ScrollAnimation delay={0}>
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/international-coach-training.jpeg"
                  alt="International coach training young player with agility cones on grass field"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">International Coaching Standards</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Full team lineup - showcasing squad depth */}
            <ScrollAnimation delay={50}>
              <div className="col-span-1 row-span-2 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/full-team-lineup-photo.jpeg"
                  alt="Complete team lineup in black and gold jerseys with goalkeeper in blue"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Full Squad</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Team celebration moment */}
            <ScrollAnimation delay={100}>
              <div className="col-span-2 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/team-celebration-huddle.jpeg"
                  alt="Players in team celebration huddle on artificial turf"
                  className="w-full h-full object-cover aspect-[3/2]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Team Unity</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Individual player development */}
            <ScrollAnimation delay={150}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/individual-player-portrait.jpeg"
                  alt="Young player in black and gold academy jersey on field"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Rising Talent</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Match day preparations - wide format */}
            <ScrollAnimation delay={200}>
              <div className="col-span-3 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/match-day-entrance.jpeg"
                  alt="Players walking onto field in various team jerseys for match preparation"
                  className="w-full h-full object-cover aspect-[3/2]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Match Day Excellence</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Coaching staff leadership */}
            <ScrollAnimation delay={250}>
              <div className="col-span-2 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/coaching-staff-group.jpeg"
                  alt="Coaching staff group photo on artificial turf field under blue sky"
                  className="w-full h-full object-cover aspect-[3/2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Leadership Team</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Community engagement */}
            <ScrollAnimation delay={300}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/community-coaching-ghana.jpeg"
                  alt="Community coaches in Ghana national team jerseys with MAN-UP caps"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Community Outreach</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={350}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/young-girls-ac-milan-jerseys.jpeg"
                  alt="Two young girls in AC Milan jerseys showcasing female participation"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Future Stars</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Medium images */}
            <ScrollAnimation delay={100}>
              <div className="col-span-1 row-span-2 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/ghana-player-portrait.jpeg"
                  alt="Young player in Ghana national team jersey giving thumbs up"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/players-yellow-black-thumbs-up.jpeg"
                  alt="Two players in yellow and black striped jerseys giving thumbs up"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={175}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/players-different-jerseys-thumbs-up.jpeg"
                  alt="Players in different team jerseys giving thumbs up"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Team Spirit</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/players-celebrating-red-jerseys.jpeg"
                  alt="Players celebrating on field in red and black jerseys"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={225}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/goalkeeper-ghana-jersey-portrait.jpeg"
                  alt="Young goalkeeper in Ghana national team jersey on dirt field"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Goalkeeper Training</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={250}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/ghana-player-thumbs-up.jpeg"
                  alt="Young player in red Ghana jersey with thumbs up"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            {/* Wide panoramic image - adjusted for 3 columns */}
            <ScrollAnimation delay={300}>
              <div className="col-span-3 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/ghana-team-training-run.jpeg"
                  alt="Group of players in red Ghana jerseys running during training"
                  className="w-full h-full object-cover aspect-[2/2]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Training Excellence</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={325}>
              <div className="col-span-2 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/team-red-checkered-jerseys.jpeg"
                  alt="Team photo with players in red and black checkered jerseys"
                  className="w-full h-full object-cover aspect-[3/2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Academy Squad</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Coaching moment - adjusted for 3 columns */}
            <ScrollAnimation delay={350}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/coach-player-mentorship-moment.jpeg"
                  alt="Coach in blue tracksuit mentoring player in yellow jersey"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Mentorship</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Smaller accent images */}
            <ScrollAnimation delay={400}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/team-red-jerseys-dirt-field.jpeg"
                  alt="Team photo with players in red jerseys on dirt field"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={450}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/players-teal-jerseys-break.jpeg"
                  alt="Players in teal jerseys taking a break during training"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={500}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/academy-players-different-jerseys.jpeg"
                  alt="Academy players in different team jerseys"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            {/* Community moment - adjusted for 3 columns */}
            <ScrollAnimation delay={550}>
              <div className="col-span-2 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/player-woman-stadium-seats.jpeg"
                  alt="Player in yellow Ghana jersey with woman in stadium seats"
                  className="w-full h-full object-cover aspect-[3/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Community</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Continue with remaining photos in 3-column layout */}
            <ScrollAnimation delay={600}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/night-match-celebration.jpeg"
                  alt="Player celebrating during night match"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={650}>
              <div className="col-span-3 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/large-group-academy-photo.jpeg"
                  alt="Large group photo of academy players"
                  className="w-full h-full object-cover aspect-[3/2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Academy Family</p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Adding back more original photos in 3-column layout */}
            <ScrollAnimation delay={700}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/team-photo-red-jerseys.jpeg"
                  alt="Team photo with players in red jerseys"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={750}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/players-bench-orange-jerseys.jpeg"
                  alt="Players on bench in orange jerseys"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={800}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/players-yellow-black-jerseys.jpeg"
                  alt="Players in yellow and black jerseys"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={850}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/young-girl-player.jpeg"
                  alt="Young female player in academy jersey"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={900}>
              <div className="col-span-2 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/players-white-jerseys-training.jpeg"
                  alt="Players in white jerseys during training"
                  className="w-full h-full object-cover aspect-[3/2]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Training Session</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={950}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/players-stadium-seats.jpeg"
                  alt="Players and staff in colorful stadium seats"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={1000}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/night-celebration-victory.jpeg"
                  alt="Night celebration victory moment"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={1050}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/team-black-white-jerseys.jpeg"
                  alt="Team in black and white striped jerseys"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={1100}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/ghana-football-association-event.jpeg"
                  alt="Ghana Football Association event"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={1150}>
              <div className="col-span-1 relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <img
                  src="/goalkeeper-training-session.jpeg"
                  alt="Goalkeeper during training session"
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Special Occasions Section */}
      <section id="occasions" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Occasions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Celebrating memorable moments that define our academy's journey and
                community spirit.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Competitive Match */}
            <ScrollAnimation delay={0}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/competitive-match-action.jpeg"
                    alt="Competitive Match Action"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Regional Tournament</h3>
                  <p className="text-muted-foreground text-pretty mb-4">
                    Intense match action as our players in signature black and gold jerseys compete against regional
                    rivals, showcasing the competitive spirit and technical skills developed at{" "}
                    <strong>JOS CITY SOCCER ACADEMY</strong>.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>September 2024</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* International Exchange */}
            <ScrollAnimation delay={100}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/international-player-exchange-new.jpeg"
                    alt="International Player Exchange"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">International Friendship</h3>
                  <p className="text-muted-foreground text-pretty mb-4">
                    Building global connections as our academy player meets with international visitors, fostering
                    cultural exchange and expanding opportunities for our talented youth.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>October 2024</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Professional Training */}
            <ScrollAnimation delay={200}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/professional-training-camp.jpeg"
                    alt="Professional Training Camp"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Elite Training Camp</h3>
                  <p className="text-muted-foreground text-pretty mb-4">
                    High-level training sessions in professional stadium facilities, where our players experience
                    elite-level conditioning and tactical development under expert coaching guidance.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>June 2025</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Follow Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Stay connected with <strong>JOS CITY SOCCER ACADEMY</strong> through our social media channels and
                access our training resources.
              </p>
            </div>
          </ScrollAnimation>

          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {" "}
            {/* Added flex-wrap for better mobile layout */}
            <ScrollAnimation delay={100}>
              <a
                href="https://youtube.com/@JosephAddo-qm4hp?si=38psFBBmCOa0ui0L"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Youtube className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">YouTube</h3>
                  <p className="text-sm text-muted-foreground">Training Videos</p>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation delay={150}>
              {" "}
              {/* Added Facebook social media link */}
              <a
                href="https://www.facebook.com/share/16vMMehBej/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Facebook className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                    Facebook
                  </h3>
                  <p className="text-sm text-muted-foreground">Updates & News</p>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              {" "}
              {/* Updated delay for Instagram */}
              <a
                href="https://www.instagram.com/reel/DNobKs9oeNy/?igsh=MTZqcDdhb2JyaW1iaA=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-accent/5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Instagram className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-card-foreground group-hover:text-accent transition-colors">
                    Instagram
                  </h3>
                  <p className="text-sm text-muted-foreground">Behind the Scenes</p>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation delay={250}>
              {" "}
              {/* Updated delay for TikTok */}
              <a
                href="https://www.tiktok.com/@joeaddai7/video/7486533495741877509?_r=1&u_code=e6gg36kacfac77&preview_pb=0&sharer_language=en&_d=e6gg2dakhb9dal&share_item_id=7486533495741877509&source=h5_m&timestamp=1756765532&utm_source=whatsapp&tt_from=whatsapp&enable_checksum=1&utm_medium=ios&share_link_id=15F4F62A-1F5B-427A-88FA-D71D3EB98DEA&user_id=7203910536991032326&sec_user_id=MS4wLjABAAAAPiE6BIez0KkQAqAN4rY2xa3uiwWUbwmpwkXIB7hROOranlAKQNQlrxbRa7zrSRM_&social_share_type=0&ug_btm=b8727,b2878&utm_campaign=client_share&link_reflow_popup_iteration_sharer=%7B%22dynamic_cover%22:1,%22click_empty_to_play%22:1,%22profile_clickable%22:1,%22follow_to_play_duration%22:-1%7D"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-accent/5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Video className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-card-foreground group-hover:text-accent transition-colors">TikTok</h3>
                  <p className="text-sm text-muted-foreground">Daily Highlights</p>
                </div>
              </a>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              {" "}
              {/* Updated delay for Dropbox */}
              <a
                href="https://www.dropbox.com/scl/fi/4fiivrjmruyw75n8z0noi/ALFC-U17S-VS-MALIBU-FC-17.06.23.m4v?dl=0&rlkey=x26zm9j3e3ay4rxg8xjxcs0g9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Cloud className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">Dropbox</h3>
                  <p className="text-sm text-muted-foreground">Resources & Files</p>
                </div>
              </a>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground text-pretty max-w-xl mx-auto">
                Follow us for exclusive behind-the-scenes content, training tips, match highlights, and academy updates
                from Ghana's premier soccer academy.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Sponsors</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Proud to be supported by leading organizations who believe in developing Ghana's future soccer stars
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center">
                <img
                  src="/sponsor-ebisbank.jpeg"
                  alt="EBISBANK - Financial Partner"
                  className="w-full h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">EBISBANK</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center">
                <img
                  src="/sponsor-stp.jpeg"
                  alt="Stipps Pharmacy - Healthcare Partner"
                  className="w-full h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">Stipps Pharmacy</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center">
                <img
                  src="/sponsor-eyeball.jpeg"
                  alt="EYEBALL - Media Partner"
                  className="w-full h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">EYEBALL</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center">
                <img
                  src="/sponsor-macandy-pharmacy.jpeg"
                  alt="MACANDY PHARMACY - Healthcare Partner"
                  className="w-full h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">Macandy Pharmacy</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center">
                <img
                  src="/sponsor-star-kleo.jpeg"
                  alt="STAR KLEO - Premium Partner"
                  className="w-full h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">Star Kleo</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full max-w-xs text-center">
                <img
                  src="/sponsor-mudi-africa.jpeg"
                  alt="MUDI Africa - Strategic Partner"
                  className="w-full h-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700">MUDI Africa</p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Interested in partnering with <strong>JOS CITY SOCCER ACADEMY</strong>?
                <a href="mailto:info.joscitysoccer@gmail.com" className="text-primary hover:underline ml-1">
                  Contact us
                </a>
              </p>
            </div>
          </ScrollAnimation>
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
                part of the <strong>JOS CITY SOCCER ACADEMY</strong> family.
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
                      <p className="text-muted-foreground">+233 244 223 047</p>
                      <p className="text-muted-foreground">+233 243 974 062</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-card-foreground">Email</h4>
                      <p className="text-muted-foreground">info.joscitysoccer@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-card-foreground">Training Hours</h4>
                      <p className="text-muted-foreground">Tue-Fri:</p>
                      <p className="text-muted-foreground">Morning: 6:00 AM - 10:00 AM</p>
                      <p className="text-muted-foreground">Evening: 3:00 PM - 6:00 PM</p>
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
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3">
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
                <img src="/jos-city-logo.jpeg" alt="JOS CITY SOCCER ACADEMY Logo" className="w-8 h-8 object-contain" />
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
                <li>+233 244 223 047</li>
                <li>info.joscitysoccer@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>
              &copy; 2025 <strong>JOS CITY SOCCER ACADEMY</strong>. All rights reserved.
            </p>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>
              Developer - <strong>Ceeba</strong> (0594473819)
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
