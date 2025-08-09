import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Wrench, Home, Building, Hammer, Paintbrush, Zap, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MillersWorkbenchLanding() {
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "General Repairs",
      description: "From fixing squeaky doors to patching drywall, we handle all your repair needs.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Home Maintenance",
      description: "Regular maintenance services to keep your property in top condition.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Commercial Services",
      description: "Reliable maintenance and repair solutions for commercial properties.",
    },
  ]

const galleryImages = [
  { src: "/1080532174732353325.jpg.jpeg", alt: "Project 1", title: "Doorway before" },
  { src: "/3872173665481281836.jpg.jpeg", alt: "Project 3", title: "Threshhold before" },
  { src: "/5790510563146666926.jpg.jpeg", alt: "Project 5", title: "Tile before" },
  { src: "/1201144807087180276.jpg.jpeg", alt: "Project 2", title: "Doorway after" },
  { src: "/4486469222648322826.jpg.jpeg", alt: "Project 4", title: "Threshhold after" },
  { src: "/9194451627806113901.jpg.jpeg", alt: "Project 6", title: "Tile after" },
]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Miller's Workbench</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
                Gallery
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
            <Link href="tel:+18014949558" legacyBehavior>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Trusted Local Handyman</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Quality Work, <span className="text-blue-600">Straightforward Service</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional handyman services for residential and commercial properties. Jerry Miller brings years of
                experience and a commitment to getting the job done right.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="h-5 w-5 mr-2" />
                  <Link href="mailto:jerry@millerswb.com">
                    Get Free Quote
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="#services">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/MWLogo.png?height=500&width=600"
                alt="Jerry Miller working on a home repair project"
                width={600}
                height={500}
                className="rounded-lg glow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Jerry Miller, owner of Miller's Workbench"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Miller's Workbench & Jerry Miller</h2>
              <p className="text-lg text-gray-600 mb-6">
                We offer comprehensive repair and maintenance services for residential and commercial properties. Count
                on straightforward, quality work to address your needs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Jerry Miller founded Miller's Workbench with a simple philosophy: provide honest, reliable handyman services
                that homeowners and business owners can trust. With years of experience in the trade, Jerry takes pride
                in delivering quality workmanship and building lasting relationships with clients throughout the region.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Highly</div>
                  <div className="text-gray-600">Knowledgeable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Handyman Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From minor repairs to major maintenance projects, Miller's Workbench provides comprehensive solutions for both
              residential and commercial properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Before & After Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the difference Miller's Workbench can make! Each project below shows a before and after transformation.
            </p>
          </div>
          <div className="space-y-12">
            {/* Each before/after pair */}
            {[0, 1, 2].map((pairIdx) => (
              <div key={pairIdx} className="grid md:grid-cols-2 gap-8 items-center">
                {/* Before */}
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={galleryImages[pairIdx].src}
                    alt={galleryImages[pairIdx].alt}
                    width={400}
                    height={500}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-white">
                    <h3 className="font-semibold">Before</h3>
                  </div>
                </div>
                {/* After */}
                <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={galleryImages[pairIdx+3].src}
                    alt={galleryImages[pairIdx+3].alt}
                    width={400}
                    height={500}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-900 bg-opacity-60 p-4 text-white">
                    <h3 className="font-semibold">After</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to get started on your next project? Contact Jerry Miller today for a free consultation and quote.
              We're here to help with all your handyman needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call for immediate assistance</p>
                <Link href="tel:+18014949558" className="text-blue-600 font-semibold text-lg hover:underline">
                  (801) 494-9558
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us your project details</p>
                <Link
                  href="mailto:jerry@millerswb.com"
                  className="text-blue-600 font-semibold text-lg hover:underline"
                >
                  jerry@millerswb.com
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
                <p className="text-gray-600 mb-4">We proudly serve</p>
                <p className="text-blue-600 font-semibold text-lg">
                  Wasatch County
                  <br />& Summit County
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Miller's Workbench</span>
              </div>
              <p className="text-gray-400">
                Professional handyman services you can trust. Quality work, straightforward service.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (801) 494-9558
                </p>
                <p className="text-gray-400 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  jerry@millerswb.com
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Miller's Workbench. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
