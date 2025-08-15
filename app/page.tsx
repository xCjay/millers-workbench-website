import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  Home,
  Building,
  Hammer,
  Paintbrush,
  Droplets,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PHONE, PHONE_DISPLAY, EMAIL, EMAIL_MAILTO } from "@/lib/contact"

export default function MillersWorkbenchLanding() {
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "The Small Stuff",
      description: "Those little repairs that drive you crazy but big contractors won't bother with.",
      examples: "Squeaky doors, loose handles, minor drywall patches",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Touch-ups & Painting",
      description: "From single walls to whole rooms - we make it look like it was always perfect.",
      examples: "Accent walls, trim work, cabinet refinishing",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Drywall Repair",
      description: "Clean, seamless fixes for holes, dents, and cracks — ready for paint.",
      examples: "Patching holes, texture matching, corner bead repairs",
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Plumbing Problems",
      description: "Drips, clogs, and quirks - we'll get your water flowing right again.",
      examples: "Faucet repairs, toilet fixes, minor pipe work",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Home Maintenance",
      description: "Regular care to keep your place comfortable and problem-free.",
      examples: "Seasonal prep, preventive fixes, general upkeep",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Care",
      description: "Small business spaces deserve attention to detail too.",
      examples: "Office repairs, retail touch-ups, workspace improvements",
    },
  ]

  const beforeAfterProjects = [
    {
      before: "/damaged-kitchen-cabinet.png",
      after: "/restored-kitchen-cabinet.png",
      title: "Kitchen Cabinet Revival",
      description: "Brought these tired cabinets back to life with careful sanding and refinishing",
    },
    {
      before: "/cracked-bathroom-tile-before-repair.png",
      after: "/repaired-bathroom-tiles.png",
      title: "Bathroom Tile Rescue",
      description: "From cracked and stained to fresh and clean in just one day",
    },
    {
      before: "/weathered-deck-before-staining.png",
      after: "/stained-deck.png",
      title: "Deck Transformation",
      description: "Weather damage restored with proper prep and quality stain",
    },
    {
      before: "/cluttered-office-before.png",
      after: "/repaired-organized-office.png",
      title: "Office Space Makeover",
      description: "Small repairs and organization made this workspace shine",
    },
    {
      before: "/old-electrical-outlet.png",
      after: "/placeholder-rau0s.png",
      title: "Electrical Upgrade",
      description: "Modern convenience, safely installed with attention to detail",
    },
    {
      before: "/faded-interior-wall.png",
      after: "/freshly-painted-wall.png",
      title: "Interior Refresh",
      description: "Sometimes all you need is the right color and careful application",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 to-orange-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-100 p-3 rounded-xl shadow-md">
                <Wrench className="h-7 w-7 text-amber-800" />
              </div>
              <div>
                <span className="text-2xl font-bold text-amber-100 tracking-wide">Miller's Workbench</span>
                <div className="text-xs text-amber-200 font-medium">millerswb.com</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-amber-100 hover:text-white transition-colors font-medium text-lg relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#services"
                className="text-amber-100 hover:text-white transition-colors font-medium text-lg relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#before-after"
                className="text-amber-100 hover:text-white transition-colors font-medium text-lg relative group"
              >
                Before & After
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#contact"
                className="text-amber-100 hover:text-white transition-colors font-medium text-lg relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-300 transition-all group-hover:w-full"></span>
              </Link>
            </nav>
            <Link
              href={`tel:${PHONE}`}
              className="inline-flex items-center bg-amber-600 hover:bg-amber-500 text-white shadow-lg font-semibold px-3 py-2 rounded"
              aria-label="Call Jerry"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Jerry
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-amber-100/20 to-orange-100/20"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 border-0 px-4 py-2 text-sm font-semibold shadow-lg">
                ⚒️ The Work Big Contractors Won't Touch
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 mb-8 leading-tight">
                We Handle the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Small Stuff
                </span>{" "}
                That Matters
              </h1>
              <p className="text-xl text-amber-800 mb-10 leading-relaxed font-medium">
                You know those projects that have been bugging you for months? The ones that are "too small" for
                the big guys? That's exactly what we love to do. Jerry Miller and Miller's Workbench - where no job is
                too small and every detail matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl font-semibold text-lg px-8 py-4 rounded-lg"
                  aria-label="Call Jerry"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Let's Chat About Your Project
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-600 text-amber-800 hover:bg-amber-100 bg-white/80 backdrop-blur-sm shadow-lg font-semibold text-lg px-8 py-4"
                >
                  See Our Work
                  <ArrowRight className="h-5 w-5 ml-3" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl p-8 shadow-2xl transform rotate-2">
                <div className="bg-white rounded-2xl p-4 shadow-lg transform -rotate-2">
                  <Image
                    src="/jerry-miller-woodworking.png"
                    alt="Jerry Miller working on a detailed project in his workshop"
                    width={600}
                    height={500}
                    className="rounded-xl shadow-md"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
                <Star className="h-4 w-4 inline mr-1" />
                Licensed & Insured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl p-8 shadow-2xl transform -rotate-2">
                <div className="bg-white rounded-2xl p-4 shadow-lg transform rotate-2">
                  <Image
                    src="/jerry-miller-workshop.png"
                    alt="Jerry Miller in his workshop surrounded by tools and completed projects"
                    width={600}
                    height={500}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-8 leading-tight">
                Meet Jerry & Miller's Workbench
              </h2>
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-2xl mb-8 border-l-4 border-amber-600">
                <p className="text-lg text-amber-800 leading-relaxed font-medium italic">
                  "We offer comprehensive repair and maintenance services for residential and commercial properties.
                  Count on straightforward, quality work to address your needs - especially the ones others won't take
                  on."
                </p>
              </div>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                Here's the thing - I actually <em className="font-semibold text-amber-900">enjoy</em> the small
                projects. That squeaky door that's been driving you nuts? The outlet that never worked quite right? The
                touch-up paint job that's been on your list for six months? That's my sweet spot.
              </p>
              <p className="text-lg text-amber-800 mb-8 leading-relaxed">
                I'm Jerry Miller, and I started Miller's Workbench because I believe every home and business deserves
                someone who cares about the details. We do it with the same care and professionalism you'd expect from any major project.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl shadow-lg border border-amber-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
                  <div className="text-amber-800 font-semibold">Years of Experience</div>
                </div>
                <div className="text-center bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-2xl shadow-lg border border-amber-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">Highly</div>
                  <div className="text-amber-800 font-semibold">Knowledgeable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">What We Love to Fix</h2>
            <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed font-medium">
              From the tiny annoyances to the medium-sized headaches, we handle the projects that make your space work
              better and feel more like home. No job too small, no detail too minor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 bg-white border-2 border-amber-200 hover:border-amber-400 transform hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-2xl w-fit mb-6">
                    <div className="text-orange-600">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 mb-4">{service.title}</h3>
                  <p className="text-amber-700 leading-relaxed mb-4 font-medium">{service.description}</p>
                  <div className="text-sm text-amber-600 font-medium">
                    <CheckCircle className="h-4 w-4 inline mr-2" />
                    {service.examples}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="before-after" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">Before & After: See the Difference</h2>
            <p className="text-xl text-amber-800 max-w-4xl mx-auto leading-relaxed font-medium">
              Sometimes a picture really is worth a thousand words. Here's how we've helped our neighbors transform
              their spaces, one small project at a time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {beforeAfterProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white border-2 border-amber-200 hover:border-amber-400 transform hover:-translate-y-2"
              >
                <div className="grid grid-cols-2 h-48">
                  <div className="relative overflow-hidden">
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
                      Before
                    </div>
                    <Image
                      src={project.before || "/placeholder.svg"}
                      alt={`Before: ${project.title}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
                      After
                    </div>
                    <Image
                      src={project.after || "/placeholder.svg"}
                      alt={`After: ${project.title}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-amber-900 mb-3 text-lg">{project.title}</h3>
                  <p className="text-amber-700 leading-relaxed font-medium">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-amber-800 via-orange-800 to-red-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-amber-100/10"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed font-medium">
              Got a project that's been bugging you? Let's talk about it. No project too small, no question too simple.
              Jerry's here to help make your space work better.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center bg-white shadow-2xl border-0 transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <Phone className="h-12 w-12 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Give Jerry a Call</h3>
                <p className="text-amber-700 mb-6 font-medium">Let's chat about your project</p>
                <Link
                  href={`tel:${PHONE}`}
                  className="text-amber-600 font-bold text-2xl hover:underline hover:text-amber-700 transition-colors"
                >
                  {PHONE_DISPLAY}
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center bg-white shadow-2xl border-0 transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <Mail className="h-12 w-12 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Send an Email</h3>
                <p className="text-amber-700 mb-6 font-medium">Photos and details welcome</p>
                <Link
                  href={EMAIL_MAILTO}
                  className="text-amber-600 font-bold text-xl hover:underline hover:text-amber-700 transition-colors"
                >
                  {EMAIL}
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center bg-white shadow-2xl border-0 transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-10">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <MapPin className="h-12 w-12 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Service Area</h3>
                <p className="text-amber-700 mb-6 font-medium">We proudly serve</p>
                <p className="text-amber-600 font-bold text-xl">
                  Summit
                  <br />& Wasatch Counties
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 to-orange-900 text-amber-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-amber-100 p-3 rounded-xl shadow-md">
                  <Wrench className="h-6 w-6 text-amber-800" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">Miller's Workbench</span>
                  <div className="text-sm text-amber-200">millerswb.com</div>
                </div>
              </div>
              <p className="text-amber-200 leading-relaxed font-medium">
                We do the work that big contractors won't touch. Professional craftsmanship for every project, no matter
                how small.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-amber-200 hover:text-white transition-colors font-medium">
                    About Jerry
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-amber-200 hover:text-white transition-colors font-medium">
                    What We Fix
                  </Link>
                </li>
                <li>
                  <Link href="#before-after" className="text-amber-200 hover:text-white transition-colors font-medium">
                    Before & After
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-amber-200 hover:text-white transition-colors font-medium">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contact Jerry</h4>
              <div className="space-y-4">
                <Link href={`tel:${PHONE}`} className="text-amber-200 flex items-center font-medium hover:underline">
                  <Phone className="h-5 w-5 mr-3" />
                  {PHONE_DISPLAY}
                </Link>
                <Link href={EMAIL_MAILTO} className="text-amber-200 flex items-center font-medium hover:underline">
                  <Mail className="h-5 w-5 mr-3" />
                  {EMAIL}
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-12 pt-8 text-center">
            <p className="text-amber-200 font-medium">
              &copy; {new Date().getFullYear()} Miller's Workbench. All rights reserved. | Licensed & Insured |
              millerswb.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
