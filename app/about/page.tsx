import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Target, Heart, Award, Clock } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-primary border-primary">
              About Jos City Soccer Academy
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Building Champions On and Off the Field
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              For over 8 years, we've been dedicated to developing young soccer talent through professional training,
              character building, and a commitment to excellence that extends beyond the game.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide world-class soccer training that develops not just skilled players, but confident,
                  disciplined, and team-oriented young people who excel in all areas of life.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the premier soccer academy in Nigeria, recognized for producing exceptional players who compete
                  at the highest levels while maintaining strong character and academic excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <p className="text-sm text-muted-foreground">Trophies Won</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <p className="text-sm text-muted-foreground">Students Trained</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <p className="text-sm text-muted-foreground">Expert Coaches</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary">8</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Jos City Soccer Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in everything we do, from training to character development.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Teamwork</h3>
              <p className="text-muted-foreground">
                Success comes through collaboration, mutual support, and working together toward common goals.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Discipline</h3>
              <p className="text-muted-foreground">
                Consistent practice, dedication, and commitment to improvement both on and off the field.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Respect</h3>
              <p className="text-muted-foreground">
                Treating teammates, opponents, coaches, and officials with dignity and sportsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to becoming Jos City's premier soccer academy
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2016 by former professional player Coach Emmanuel Adamu, Jos City Soccer Academy began with a
                simple vision: to provide young athletes in Jos with access to world-class soccer training and
                mentorship.
              </p>

              <p>
                What started as weekend training sessions for 20 local children has grown into a comprehensive academy
                serving over 500 students across multiple age groups. Our success stems from our unwavering commitment
                to developing the whole player - technically, tactically, physically, and mentally.
              </p>

              <p>
                Today, our graduates compete in top-tier academies across Nigeria and internationally. More importantly,
                they carry with them the values of discipline, teamwork, and excellence that will serve them throughout
                their lives, whether they pursue professional soccer or other endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
