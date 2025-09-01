import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Award, Users, Star, Mail } from "lucide-react"
import { Footer } from "@/components/footer"

export default function CoachesPage() {
  const headCoaches = [
    {
      name: "Emmanuel Adamu",
      title: "Head Coach & Academy Director",
      experience: "15 years",
      qualifications: ["UEFA B License", "CAF License", "Sports Science Degree"],
      specialties: ["Youth Development", "Tactical Analysis", "Leadership"],
      bio: "Former professional player with Plateau United FC. Founded Jos City Soccer Academy in 2016 with a vision to develop world-class players while building character.",
      achievements: [
        "Led academy to 12 tournament victories",
        "Developed 50+ players for state teams",
        "CAF Youth Coach of the Year 2022",
      ],
      image: "/professional-soccer-coach-headshot.png",
    },
    {
      name: "Sarah Musa",
      title: "Technical Director",
      experience: "12 years",
      qualifications: ["UEFA A License", "Goalkeeper Specialist", "Psychology Degree"],
      specialties: ["Technical Skills", "Mental Preparation", "Goalkeeper Training"],
      bio: "Former Nigerian Women's National Team goalkeeper. Specializes in developing technical skills and mental resilience in young players.",
      achievements: [
        "Trained 3 national team players",
        "Goalkeeper development specialist",
        "Women's football advocate",
      ],
      image: "/female-soccer-coach-professional-headshot.png",
    },
  ]

  const assistantCoaches = [
    {
      name: "David Okoro",
      title: "Youth Development Coach",
      experience: "8 years",
      qualifications: ["CAF C License", "Physical Education Degree"],
      specialties: ["Ages 7-12 Development", "Basic Skills", "Fun Learning"],
      image: "/young-soccer-coach-headshot.png",
    },
    {
      name: "Michael Bello",
      title: "Competitive Team Coach",
      experience: "10 years",
      qualifications: ["UEFA C License", "Sports Management"],
      specialties: ["Tactical Training", "Match Preparation", "Team Strategy"],
      image: "/soccer-coach-tactical-training.png",
    },
    {
      name: "Grace Adebayo",
      title: "Fitness & Conditioning Coach",
      experience: "6 years",
      qualifications: ["Strength & Conditioning Cert", "Sports Medicine"],
      specialties: ["Physical Fitness", "Injury Prevention", "Recovery"],
      image: "/female-fitness-coach-soccer.png",
    },
    {
      name: "Joseph Yakubu",
      title: "Skills Development Coach",
      experience: "9 years",
      qualifications: ["CAF B License", "Futsal Specialist"],
      specialties: ["Ball Control", "1v1 Skills", "Creative Play"],
      image: "/soccer-skills-coach-training.png",
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
              Meet Our Coaches
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Expert Coaches Dedicated to Your Success
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Our experienced coaching staff combines professional playing experience with advanced coaching
              qualifications to provide world-class training and mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Head Coaches */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders who guide our academy's mission and development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {headCoaches.map((coach, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={coach.image || "/placeholder.svg"}
                      alt={coach.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardContent className="p-8 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-1">{coach.name}</h3>
                        <p className="text-primary font-semibold mb-2">{coach.title}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Trophy className="w-4 h-4" />
                            <span>{coach.experience}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{coach.bio}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-card-foreground mb-2">Qualifications</h4>
                          <div className="flex flex-wrap gap-2">
                            {coach.qualifications.map((qual, qualIndex) => (
                              <Badge key={qualIndex} variant="secondary" className="text-xs">
                                {qual}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-card-foreground mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {coach.specialties.map((specialty, specIndex) => (
                              <Badge key={specIndex} className="bg-primary/10 text-primary text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-card-foreground mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {coach.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <Star className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assistant Coaches */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Coaching Staff</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals who work directly with players to develop skills and character
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assistantCoaches.map((coach, index) => (
              <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-1">{coach.name}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{coach.title}</p>
                    <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
                      <Award className="w-3 h-3" />
                      <span>{coach.experience}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold text-card-foreground mb-1">Qualifications</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {coach.qualifications.map((qual, qualIndex) => (
                          <Badge key={qualIndex} variant="outline" className="text-xs">
                            {qual}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-card-foreground mb-1">Specialties</h4>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {coach.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} className="bg-accent/10 text-accent text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Coaches */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Train with the Best?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our coaches are here to help you reach your full potential. Contact us to learn more about our programs
              and schedule a trial session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Users className="w-5 h-5 mr-2" />
                Schedule Trial Session
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                <Mail className="w-5 h-5 mr-2" />
                Contact Coaches
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
