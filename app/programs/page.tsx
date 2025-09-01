import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Trophy, Target, Calendar, MapPin } from "lucide-react"
import { Footer } from "@/components/footer"

export default function ProgramsPage() {
  const programs = [
    {
      title: "Little Kickers (Ages 4-6)",
      description: "Introduction to soccer through fun games and basic skill development",
      duration: "45 minutes",
      groupSize: "8-10 players",
      schedule: "Saturdays 9:00 AM",
      price: "₦15,000/month",
      features: ["Basic ball control", "Coordination development", "Social skills", "Fun-focused learning"],
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Youth Development (Ages 7-12)",
      description: "Fundamental skills training with emphasis on technique and teamwork",
      duration: "60 minutes",
      groupSize: "12-15 players",
      schedule: "Tues/Thurs 4:00 PM, Sat 10:00 AM",
      price: "₦25,000/month",
      features: ["Technical skill development", "Small-sided games", "Position awareness", "Character building"],
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Competitive Academy (Ages 13-17)",
      description: "Advanced training for serious players with tournament participation",
      duration: "90 minutes",
      groupSize: "18-22 players",
      schedule: "Mon/Wed/Fri 5:00 PM, Sat 2:00 PM",
      price: "₦40,000/month",
      features: ["Advanced tactics", "Physical conditioning", "Mental preparation", "Tournament play"],
      color: "bg-accent/10 text-accent",
    },
    {
      title: "Elite Performance (Ages 16+)",
      description: "Professional-level training for players seeking scholarships or pro careers",
      duration: "120 minutes",
      groupSize: "16-20 players",
      schedule: "Daily training available",
      price: "₦60,000/month",
      features: ["Professional coaching", "Video analysis", "Strength & conditioning", "College/pro preparation"],
      color: "bg-primary/10 text-primary",
    },
  ]

  const additionalPrograms = [
    {
      title: "Goalkeeper Academy",
      description: "Specialized training for aspiring goalkeepers",
      icon: Target,
      schedule: "Sundays 3:00 PM",
    },
    {
      title: "Summer Camps",
      description: "Intensive week-long training camps during holidays",
      icon: Calendar,
      schedule: "June - August",
    },
    {
      title: "Private Coaching",
      description: "One-on-one sessions for personalized development",
      icon: Users,
      schedule: "By appointment",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-primary border-primary">
              Training Programs
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Programs Designed for Every Player
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              From first touches to professional preparation, our comprehensive programs cater to players of all ages
              and skill levels with expert coaching and proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Core Training Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Age-appropriate training that grows with your child's development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-card-foreground mb-2">{program.title}</CardTitle>
                      <p className="text-muted-foreground">{program.description}</p>
                    </div>
                    <Badge className={program.color}>{program.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Program Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{program.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{program.schedule}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-3">What You'll Learn:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">Enroll Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Specialized Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional training opportunities to enhance your soccer journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalPrograms.map((program, index) => (
              <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{program.title}</h3>
                  <p className="text-muted-foreground">{program.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-primary">
                    <Calendar className="w-4 h-4" />
                    <span>{program.schedule}</span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Facilities */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">World-Class Facilities</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Train on professional-grade fields with modern equipment and facilities designed to maximize player
                development and safety.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Two full-size FIFA-standard grass pitches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Modern changing rooms and shower facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Floodlit training areas for evening sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">Equipment storage and maintenance facilities</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Located in the heart of Jos City</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center space-y-2">
                  <Trophy className="w-8 h-8 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-primary">2</div>
                  <p className="text-sm text-muted-foreground">FIFA Standard Pitches</p>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center space-y-2">
                  <Users className="w-8 h-8 text-accent mx-auto" />
                  <div className="text-2xl font-bold text-accent">500+</div>
                  <p className="text-sm text-muted-foreground">Training Capacity</p>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center space-y-2">
                  <Clock className="w-8 h-8 text-accent mx-auto" />
                  <div className="text-2xl font-bold text-accent">12</div>
                  <p className="text-sm text-muted-foreground">Hours Daily Operation</p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center space-y-2">
                  <Target className="w-8 h-8 text-primary mx-auto" />
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-muted-foreground">Security & Safety</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
