import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Search, 
  Users, 
  MessageSquare, 
  CreditCard, 
  Shield, 
  Star,
  CheckCircle,
  Clock,
  Award,
  Target,
  Zap,
  Heart,
  UserCheck,
  FileText,
  Headphones
} from "lucide-react";

const HowItWorks = () => {
  const customerSteps = [
    {
      step: 1,
      title: "Search & Discover",
      description: "Use our powerful search and filters to find the perfect service provider for your needs",
      icon: Search,
      details: [
        "Search by service type, location, or keyword",
        "Filter by price range, availability, and ratings",
        "Browse by categories and subcategories",
        "View detailed provider profiles"
      ]
    },
    {
      step: 2,
      title: "Compare & Review",
      description: "Compare providers, read reviews, and check portfolios to make an informed decision",
      icon: Users,
      details: [
        "Compare multiple providers side-by-side",
        "Read verified customer reviews",
        "View work portfolios and examples",
        "Check credentials and certifications"
      ]
    },
    {
      step: 3,
      title: "Connect & Communicate",
      description: "Reach out to providers, discuss your needs, and get quotes",
      icon: MessageSquare,
      details: [
        "Send messages directly to providers",
        "Schedule consultations or meetings",
        "Get detailed quotes and estimates",
        "Ask questions about the service"
      ]
    },
    {
      step: 4,
      title: "Book & Pay Securely",
      description: "Book your service and pay safely through our secure platform",
      icon: CreditCard,
      details: [
        "Secure payment processing",
        "Multiple payment options",
        "Service booking confirmation",
        "Transaction protection"
      ]
    },
    {
      step: 5,
      title: "Get Service & Review",
      description: "Receive your service and share your experience",
      icon: Star,
      details: [
        "Get high-quality service delivery",
        "Track service progress",
        "Leave reviews and ratings",
        "Build long-term relationships"
      ]
    }
  ];

  const providerSteps = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Sign up and create a comprehensive business profile",
      icon: UserCheck,
      details: [
        "Complete business information",
        "Upload certifications and licenses",
        "Add portfolio and work examples",
        "Set your service areas"
      ]
    },
    {
      step: 2,
      title: "Get Verified",
      description: "Complete our verification process to build trust",
      icon: Shield,
      details: [
        "Background check process",
        "Document verification",
        "Reference checks",
        "Professional credentials review"
      ]
    },
    {
      step: 3,
      title: "Set Your Services",
      description: "Define what you offer and set your pricing",
      icon: FileText,
      details: [
        "List your services and specialties",
        "Set competitive pricing",
        "Define your availability",
        "Create service packages"
      ]
    },
    {
      step: 4,
      title: "Receive Inquiries",
      description: "Get contacted by potential customers",
      icon: MessageSquare,
      details: [
        "Receive service requests",
        "Respond to customer inquiries",
        "Provide quotes and estimates",
        "Schedule consultations"
      ]
    },
    {
      step: 5,
      title: "Deliver & Get Paid",
      description: "Complete services and receive secure payments",
      icon: CreditCard,
      details: [
        "Deliver quality services",
        "Get paid securely and on time",
        "Build your reputation",
        "Grow your business"
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Providers",
      description: "Every service provider goes through our rigorous verification process including background checks and credential verification.",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get responses from providers within minutes to hours, not days. Most providers respond within 1-2 hours.",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "All services come with our satisfaction guarantee. If you're not happy, we'll make it right or refund your money.",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Perfect Match",
      description: "Our AI-powered matching system helps you find the best providers for your specific needs and budget.",
      color: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Book many services instantly without waiting for approval. Get confirmation and start planning immediately.",
      color: "text-yellow-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer support team is available around the clock to help with any questions or issues.",
      color: "text-indigo-600"
    }
  ];

  const safetyFeatures = [
    "Identity verification for all providers",
    "Background checks and reference verification",
    "Secure payment processing with buyer protection",
    "Insurance coverage for eligible services",
    "Dispute resolution and mediation services",
    "24/7 customer support and monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 group">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-heading font-bold gradient-text">
                  ACE WORLD
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button className="btn-primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
            How ACE WORLD Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connecting service providers with customers has never been easier. 
            Here's how our platform works for both sides of the marketplace.
          </p>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">For Customers</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Finding Services Made Simple
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get the help you need in just a few clicks. Our streamlined process makes it easy to find, book, and pay for services.
            </p>
          </div>

          <div className="space-y-8">
            {customerSteps.map((step, index) => (
              <Card key={step.step} className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs">
                          Step {step.step}
                        </Badge>
                        <h3 className="text-xl font-heading font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {detail}
                            </span>
                          </div>
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

      {/* For Providers */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">For Service Providers</Badge>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Grow Your Business
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of professionals who are building successful businesses on our platform. Start earning more today.
            </p>
          </div>

          <div className="space-y-8">
            {providerSteps.map((step, index) => (
              <Card key={step.step} className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-xs">
                          Step {step.step}
                        </Badge>
                        <h3 className="text-xl font-heading font-semibold">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {detail}
                            </span>
                          </div>
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

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose ACE WORLD?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've built the most trusted and efficient platform for connecting service providers with customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${feature.color} bg-current bg-opacity-10`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Safety & Security First
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your safety and security are our top priorities. We've implemented comprehensive measures to protect all users.
            </p>
          </div>

          <Card className="card-elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and successful service providers on ACE WORLD.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Find Services
              </Button>
            </Link>
            <Link to="/provider-register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Become a Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;