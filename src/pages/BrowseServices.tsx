
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Clock, 
  Shield, 
  Heart,
  Grid3X3,
  List,
  ArrowLeft,
  ChevronDown,
  X
} from "lucide-react";

const BrowseServices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Mock data for services
  const services = [
    {
      id: 1,
      title: "Professional House Cleaning",
      provider: "CleanCo Services",
      category: "Home Services",
      location: "New York, NY",
      price: "$80-120",
      rating: 4.9,
      reviewCount: 156,
      image: "/placeholder.svg",
      isVerified: true,
      responseTime: "1 hour",
      tags: ["Deep Cleaning", "Eco-Friendly", "Insured"]
    },
    {
      id: 2,
      title: "Personal Math Tutor",
      provider: "Sarah Johnson",
      category: "Education",
      location: "Los Angeles, CA",
      price: "$45/hour",
      rating: 4.8,
      reviewCount: 89,
      image: "/placeholder.svg",
      isVerified: true,
      responseTime: "30 mins",
      tags: ["Algebra", "Calculus", "Online Available"]
    },
    {
      id: 3,
      title: "Emergency Plumbing Repair",
      provider: "Quick Fix Plumbers",
      category: "Home Services",
      location: "Chicago, IL",
      price: "$100-200",
      rating: 4.7,
      reviewCount: 234,
      image: "/placeholder.svg",
      isVerified: true,
      responseTime: "15 mins",
      tags: ["24/7 Available", "Licensed", "Emergency"]
    },
    {
      id: 4,
      title: "Wedding Photography",
      provider: "Capture Moments Studio",
      category: "Creative Services",
      location: "Miami, FL",
      price: "$1,200-2,500",
      rating: 4.9,
      reviewCount: 67,
      image: "/placeholder.svg",
      isVerified: true,
      responseTime: "2 hours",
      tags: ["Portfolio Available", "Full Day", "Editing Included"]
    },
    {
      id: 5,
      title: "Logo & Brand Design",
      provider: "Creative Minds Agency",
      category: "Creative Services",
      location: "Austin, TX",
      price: "$300-800",
      rating: 4.8,
      reviewCount: 145,
      image: "/placeholder.svg",
      isVerified: true,
      responseTime: "1 hour",
      tags: ["Revisions Included", "Commercial Rights", "Fast Delivery"]
    },
    {
      id: 6,
      title: "Personal Chef Service",
      provider: "Gourmet at Home",
      category: "Food & Catering",
      location: "San Francisco, CA",
      price: "$150-300",
      rating: 4.9,
      reviewCount: 78,
      image: "/placeholder.svg",
      isVerified: true,
      responseTime: "45 mins",
      tags: ["Dietary Accommodations", "Grocery Shopping", "Clean Up"]
    }
  ];

  const categories = [
    "All Categories",
    "Home Services", 
    "Business Services",
    "Creative Services",
    "Education",
    "Automotive",
    "Beauty & Wellness",
    "Food & Catering",
    "Repair & Maintenance"
  ];

  const sortOptions = [
    "Relevance",
    "Price: Low to High",
    "Price: High to Low", 
    "Highest Rated",
    "Most Reviews",
    "Newest"
  ];

  const filterCategories = [
    {
      name: "Availability",
      options: ["Available Now", "Same Day", "Within 24 Hours", "This Week"]
    },
    {
      name: "Service Type",
      options: ["In-Person", "Remote/Online", "Mobile Service", "At Your Location"]
    },
    {
      name: "Features",
      options: ["Verified Provider", "Instant Booking", "Free Consultation", "Money Back Guarantee"]
    }
  ];

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setPriceRange([0, 1000]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 group">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>
              
              
            </div>

            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <div className="mb-6">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for any service (e.g., house cleaning, tutoring, plumbing...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>

            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2 ml-auto">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-3">Price Range</h4>
                    <div className="space-y-3">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={1000}
                        step={10}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}+</span>
                      </div>
                    </div>
                  </div>

                  {/* Filter Categories */}
                  {filterCategories.map((category) => (
                    <div key={category.name}>
                      <h4 className="font-medium mb-3">{category.name}</h4>
                      <div className="space-y-2">
                        {category.options.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox
                              id={option}
                              checked={selectedFilters.includes(option)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedFilters([...selectedFilters, option]);
                                } else {
                                  setSelectedFilters(selectedFilters.filter(f => f !== option));
                                }
                              }}
                            />
                            <label htmlFor={option} className="text-sm text-gray-700 cursor-pointer">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Active Filters */}
          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                  {filter}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-red-500" 
                    onClick={() => removeFilter(filter)}
                  />
                </Badge>
              ))}
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {services.length} Services Available
          </h2>
          <p className="text-gray-600">
            Showing results for all categories
          </p>
        </div>

        {/* Services Grid/List */}
        <div className={`${
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-6"
        }`}>
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className={`${viewMode === "list" ? "flex" : ""}`}>
                {/* Service Image */}
                <div className={`${viewMode === "list" ? "w-48 flex-shrink-0" : "w-full h-48"} bg-gray-200 rounded-t-lg ${viewMode === "list" ? "rounded-l-lg rounded-tr-none" : ""} overflow-hidden relative`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white p-2">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  {service.isVerified && (
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-green-500 text-white">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Service Details */}
                <div className="flex-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold hover:text-blue-600 transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          by {service.provider}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-blue-600">{service.price}</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {/* Rating and Location */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{service.rating}</span>
                            <span className="text-gray-500">({service.reviewCount})</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span>{service.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Response Time */}
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Responds in {service.responseTime}</span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {service.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          View Details
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Contact Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrowseServices;
