import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Target, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Develop Champions at <span className="text-primary">Jos City Soccer Academy</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Professional soccer training for young athletes. Build skills, character, and confidence through expert
                coaching and proven methodologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Watch Training Videos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Expert Coaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Trophies Won</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Championship Training</h3>
                  <p className="text-sm text-muted-foreground">Professional techniques used by winning teams</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border mt-8">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Team Building</h3>
                  <p className="text-sm text-muted-foreground">Develop leadership and teamwork skills</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border -mt-4">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Skill Development</h3>
                  <p className="text-sm text-muted-foreground">Personalized training for every player</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">Excellence</h3>
                  <p className="text-sm text-muted-foreground">Commitment to the highest standards</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
