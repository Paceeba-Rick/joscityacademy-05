import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Camera, Play, Trophy, Users } from "lucide-react"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Training Sessions",
      count: 45,
      images: [
        "/soccer-training-session-kids-practicing.png",
        "/youth-soccer-drills-coaching.png",
        "/soccer-academy-training-ground.png",
        "/young-players-soccer-practice.png",
        "/soccer-coach-teaching-technique.png",
        "/kids-soccer-training-cones-drills.png",
      ],
    },
    {
      title: "Matches & Tournaments",
      count: 32,
      images: [
        "/youth-soccer-match-action-shot.png",
        "/soccer-tournament-celebration-kids.png",
        "/young-soccer-players-team-photo.png",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      title: "Academy Events",
      count: 28,
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
    {
      title: "Facilities",
      count: 15,
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
    },
  ]

  const featuredVideos = [
    {
      title: "Academy Training Highlights",
      duration: "3:45",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Tournament Victory 2024",
      duration: "2:30",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Coach Interview Series",
      duration: "5:20",
      thumbnail: "/placeholder.svg?height=200&width=350",
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
              Academy Gallery
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Capturing Moments of Excellence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
              Explore our collection of photos and videos showcasing training sessions, tournaments, achievements, and
              the vibrant community that makes Jos City Soccer Academy special.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">120+</div>
              <div className="text-sm text-muted-foreground">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Featured Videos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our academy in action through these highlight videos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-card-foreground">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of memorable moments
            </p>
          </div>

          <div className="space-y-16">
            {galleryCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                    <Badge variant="secondary" className="text-sm">
                      {category.count} photos
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Camera className="w-4 h-4 mr-2" />
                    View All
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {category.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="aspect-square overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${category.title} ${imageIndex + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Be Part of Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join Jos City Soccer Academy and create your own memorable moments. Every champion's journey starts with a
              single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Trophy className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                <Users className="w-5 h-5 mr-2" />
                Visit Our Academy
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
