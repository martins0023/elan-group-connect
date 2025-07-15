import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Users, 
  Heart, 
  Globe, 
  Target, 
  Award, 
  TrendingUp,
  Shield,
  Zap,
  Star,
  CheckCircle,
  Building,
  Clock,
  DollarSign
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50K+",
      label: "Active Providers",
      description: "Verified professionals ready to serve"
    },
    {
      icon: Star,
      number: "1M+",
      label: "Services Completed",
      description: "Successful transactions and counting"
    },
    {
      icon: Globe,
      number: "200+",
      label: "Cities Covered",
      description: "Serving communities nationwide"
    },
    {
      icon: TrendingUp,
      number: "4.9★",
      label: "Average Rating",
      description: "Customer satisfaction guaranteed"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best possible experience for our customers. Your satisfaction is our success."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We maintain the highest standards of safety and security through rigorous verification processes and comprehensive background checks."
    },
    {
      icon: Target,
      title: "Quality Excellence",
      description: "We're committed to connecting you with only the best service providers who meet our strict quality standards and deliver exceptional results."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously improve our platform with cutting-edge technology to make finding and booking services faster and easier."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're building a community where service providers can thrive and customers can find exactly what they need, when they need it."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Quality services should be accessible to everyone, everywhere. We're making that vision a reality across all communities."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Former tech executive with 15+ years in marketplace platforms",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Engineering leader focused on building scalable, secure platforms",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      description: "Operations expert ensuring smooth provider onboarding and quality",
      image: "/placeholder.svg"
    },
    {
      name: "David Kim",
      role: "Head of Customer Experience",
      description: "Customer advocate dedicated to exceptional user experiences",
      image: "/placeholder.svg"
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "ACE WORLD was founded with a vision to revolutionize how people find and book services"
    },
    {
      year: "2022",
      title: "First 1,000 Providers",
      description: "Reached our first major milestone with 1,000 verified service providers"
    },
    {
      year: "2023",
      title: "Nationwide Expansion",
      description: "Expanded to serve customers and providers in over 200 cities"
    },
    {
      year: "2024",
      title: "1 Million Services",
      description: "Celebrated our 1 millionth successful service booking"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Find and book services in minutes, not hours"
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Competitive rates with transparent pricing"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Every provider is vetted and verified"
    },
    {
      icon: Building,
      title: "Local Focus",
      description: "Support local businesses in your community"
    }
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
                <span className="text-md font-heading font-bold gradient-text">
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
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
            Connecting Communities
            <br />
            Through Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            ACE WORLD is revolutionizing how people find, book, and pay for services. 
            We're building a world where quality service is accessible to everyone, everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button size="lg" className="btn-primary">
                Explore Services
              </Button>
            </Link>
            <Link to="/provider-register">
              <Button size="lg" variant="outline">
                Join as Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-elevated text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-heading font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-1">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're on a mission to make quality services accessible to everyone while empowering service providers to build successful businesses.
            </p>
          </div>

          <Card className="card-elevated">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">
                    Transforming the Service Economy
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We believe that finding and booking services should be as easy as ordering food or booking a ride. 
                    That's why we've created a platform that puts the power back in the hands of both customers and service providers.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <benefit.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm">
                            {benefit.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {benefit.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-primary rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <Globe className="h-16 w-16 mx-auto mb-4" />
                      <h4 className="text-xl font-heading font-bold mb-2">
                        Global Impact
                      </h4>
                      <p className="text-blue-100 text-sm">
                        Serving millions of customers worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These core values guide everything we do and shape how we build our platform and serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From a simple idea to a thriving platform connecting thousands of service providers with millions of customers.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1">
                    <Card className={`card-elevated ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <CardContent className="p-6">
                        <div className="text-primary font-heading font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-heading font-semibold mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're a diverse team of passionate individuals committed to building the future of service marketplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Join the ACE WORLD Community
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for services or want to offer your skills, ACE WORLD is the place to connect, grow, and succeed.
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

export default About;
