
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Shield, Clock, CheckCircle, Users, Briefcase, Home, Wrench, Camera, GraduationCap, Palette, Car, Scissors, Coffee } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const serviceCategories = [
    { name: "Home Services", icon: Home, count: "150+", examples: ["Cleaning", "Plumbing", "Electrical"] },
    { name: "Business Services", icon: Briefcase, count: "200+", examples: ["Consulting", "Legal", "Accounting"] },
    { name: "Creative Services", icon: Palette, count: "180+", examples: ["Design", "Photography", "Writing"] },
    { name: "Education", icon: GraduationCap, count: "120+", examples: ["Tutoring", "Music Lessons", "Coaching"] },
    { name: "Automotive", icon: Car, count: "80+", examples: ["Repair", "Detailing", "Towing"] },
    { name: "Beauty & Wellness", icon: Scissors, count: "110+", examples: ["Hair Styling", "Massage", "Fitness"] },
    { name: "Food & Catering", icon: Coffee, count: "90+", examples: ["Personal Chef", "Catering", "Baking"] },
    { name: "Repair & Maintenance", icon: Wrench, count: "140+", examples: ["Electronics", "Appliances", "Furniture"] }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Search & Discover",
      description: "Find the perfect service provider for your needs using our advanced search and filters",
      icon: Search
    },
    {
      step: 2,
      title: "Compare & Choose",
      description: "Review profiles, ratings, and pricing to make an informed decision",
      icon: Star
    },
    {
      step: 3,
      title: "Book Securely",
      description: "Book services safely with our secure payment system and get instant confirmation",
      icon: Shield
    }
  ];

  const features = [
    { icon: Shield, title: "Verified Providers", description: "All service providers are thoroughly vetted and verified" },
    { icon: Clock, title: "Quick Booking", description: "Book services in minutes with instant confirmation" },
    { icon: CheckCircle, title: "Quality Guaranteed", description: "Money-back guarantee if you're not satisfied" },
    { icon: Users, title: "24/7 Support", description: "Round-the-clock customer support for all your needs" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ACE WORLD
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/browse" className="text-gray-600 hover:text-blue-600 transition-colors">Browse Services</Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
            </div>

            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost" className="hover:bg-blue-50">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Find Any Service,
              <br />
              <span className="text-gray-800">Anytime, Anywhere</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with verified service providers in your area. From dry cleaning to tutoring, 
              plumbing to graphic design - we've got you covered.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-scale-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="What service do you need? (e.g., house cleaning, tutoring, plumbing...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
              <Button className="absolute right-2 top-2 h-10 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["House Cleaning", "Tutoring", "Plumbing", "Photography", "Graphic Design", "Personal Chef"].map((category) => (
              <Badge key={category} variant="secondary" className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer transition-colors">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Popular Service Categories</h2>
            <p className="text-gray-600 text-lg">Explore services across different categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <Card key={category.name} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 shadow-md">
                <CardHeader className="text-center pb-3">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <category.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{category.count} services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-1">
                    {category.examples.map((example) => (
                      <Badge key={example} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
            <p className="text-gray-600 text-lg">Get the service you need in just a few simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose ACE WORLD?</h2>
            <p className="text-gray-600 text-lg">We make hiring services safe, easy, and reliable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* For Customers */}
            <div className="text-center lg:text-left text-white">
              <h3 className="text-3xl font-bold mb-4">Need a Service?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Find verified professionals in your area. From everyday tasks to specialized services, 
                we connect you with the right people.
              </p>
              <Link to="/browse">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Browse Services
                </Button>
              </Link>
            </div>

            {/* For Providers */}
            <div className="text-center lg:text-left text-white">
              <h3 className="text-3xl font-bold mb-4">Offer Your Services?</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Join thousands of service providers earning money doing what they love. 
                Set your own rates and schedule.
              </p>
              <Link to="/provider-register">
                <Button size="lg" className="bg-orange-400 text-white hover:bg-orange-500">
                  Become a Provider
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">ACE WORLD</span>
              </div>
              <p className="text-gray-400">
                Connecting service providers with customers worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/browse" className="hover:text-white transition-colors">Browse Services</Link></li>
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/customer-support" className="hover:text-white transition-colors">Customer Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Providers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/provider-register" className="hover:text-white transition-colors">Become a Provider</Link></li>
                <li><Link to="/provider-resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link to="/provider-support" className="hover:text-white transition-colors">Provider Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ACE WORLD by ELAN GROUP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
