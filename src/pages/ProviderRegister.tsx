import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  Building, 
  MapPin, 
  ArrowLeft, 
  CheckCircle, 
  Upload, 
  CreditCard, 
  Shield, 
  Star,
  Award,
  Clock,
  DollarSign,
  FileText,
  Calendar,
  X
} from "lucide-react";

const ProviderRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessAddress: "",
    website: "",
    
    // Service Details
    serviceCategory: "",
    subCategories: [] as string[],
    serviceDescription: "",
    serviceAreas: [] as string[],
    
    // Pricing & Availability
    basePrice: "",
    pricingType: "",
    availability: {
      monday: { available: false, hours: "" },
      tuesday: { available: false, hours: "" },
      wednesday: { available: false, hours: "" },
      thursday: { available: false, hours: "" },
      friday: { available: false, hours: "" },
      saturday: { available: false, hours: "" },
      sunday: { available: false, hours: "" }
    },
    
    // Verification Documents
    businessLicense: null as File | null,
    insurance: null as File | null,
    certifications: [] as File[],
    
    // Portfolio
    portfolioImages: [] as File[],
    portfolioDescription: "",
    
    // Background Check
    backgroundCheck: false,
    references: [
      { name: "", phone: "", email: "", relationship: "" },
      { name: "", phone: "", email: "", relationship: "" },
      { name: "", phone: "", email: "", relationship: "" }
    ]
  });
  
  const { toast } = useToast();

  const serviceCategories = [
    { 
      name: "Home Services", 
      subcategories: ["Cleaning", "Plumbing", "Electrical", "HVAC", "Landscaping", "Pest Control"] 
    },
    { 
      name: "Business Services", 
      subcategories: ["Consulting", "Legal", "Accounting", "Marketing", "IT Support", "HR Services"] 
    },
    { 
      name: "Creative Services", 
      subcategories: ["Graphic Design", "Photography", "Video Production", "Web Design", "Content Writing", "Music"] 
    },
    { 
      name: "Education & Training", 
      subcategories: ["Tutoring", "Music Lessons", "Language Learning", "Professional Training", "Coaching", "Workshops"] 
    },
    { 
      name: "Health & Wellness", 
      subcategories: ["Personal Training", "Massage Therapy", "Nutrition", "Mental Health", "Yoga", "Alternative Medicine"] 
    },
    { 
      name: "Automotive", 
      subcategories: ["Car Repair", "Auto Detailing", "Towing", "Mobile Mechanic", "Car Rental", "Driving Lessons"] 
    },
    { 
      name: "Beauty & Personal Care", 
      subcategories: ["Hair Styling", "Makeup", "Skincare", "Nail Care", "Barbering", "Spa Services"] 
    },
    { 
      name: "Event Services", 
      subcategories: ["Event Planning", "Catering", "DJ Services", "Photography", "Floral Design", "Venue Rental"] 
    },
    { 
      name: "Tech Services", 
      subcategories: ["App Development", "Website Creation", "IT Support", "Data Recovery", "Software Training", "Cybersecurity"] 
    },
    { 
      name: "Pet Services", 
      subcategories: ["Pet Grooming", "Dog Walking", "Pet Sitting", "Veterinary Care", "Pet Training", "Pet Transportation"] 
    }
  ];

  const pricingTypes = [
    "Hourly Rate",
    "Fixed Price",
    "Per Project",
    "Monthly Subscription",
    "Per Visit",
    "Custom Quote"
  ];

  const steps = [
    { number: 1, title: "Basic Information", description: "Tell us about your business" },
    { number: 2, title: "Service Details", description: "What services do you offer?" },
    { number: 3, title: "Pricing & Availability", description: "Set your rates and schedule" },
    { number: 4, title: "Verification", description: "Upload required documents" },
    { number: 5, title: "Portfolio", description: "Show your work" },
    { number: 6, title: "Background Check", description: "Final verification step" }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Provider registration:", formData);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24-48 hours.",
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="businessName"
                    placeholder="Your Business Name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="contactPerson"
                    placeholder="Your Full Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Business Email *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="business@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Business Phone *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessAddress">Business Address *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-muted-foreground h-4 w-4" />
                <Textarea
                  id="businessAddress"
                  placeholder="Complete business address"
                  value={formData.businessAddress}
                  onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                  className="pl-10 min-h-[80px]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website (Optional)</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://yourwebsite.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="serviceCategory">Primary Service Category *</Label>
              <Select
                value={formData.serviceCategory}
                onValueChange={(value) => setFormData({ ...formData, serviceCategory: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your primary service category" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {formData.serviceCategory && (
              <div className="space-y-2">
                <Label>Service Specializations *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceCategories
                    .find(cat => cat.name === formData.serviceCategory)
                    ?.subcategories.map((sub) => (
                      <div key={sub} className="flex items-center space-x-2">
                        <Checkbox
                          id={sub}
                          checked={formData.subCategories.includes(sub)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                subCategories: [...formData.subCategories, sub]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                subCategories: formData.subCategories.filter(item => item !== sub)
                              });
                            }
                          }}
                        />
                        <Label htmlFor={sub} className="text-sm">{sub}</Label>
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="serviceDescription">Service Description *</Label>
              <Textarea
                id="serviceDescription"
                placeholder="Describe your services in detail. What makes you unique?"
                value={formData.serviceDescription}
                onChange={(e) => setFormData({ ...formData, serviceDescription: e.target.value })}
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Service Areas *</Label>
              <div className="flex flex-wrap gap-2">
                {formData.serviceAreas.map((area, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {area}
                    <X 
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => setFormData({
                        ...formData,
                        serviceAreas: formData.serviceAreas.filter((_, i) => i !== index)
                      })}
                    />
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter city or zip code"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const value = e.currentTarget.value.trim();
                      if (value && !formData.serviceAreas.includes(value)) {
                        setFormData({
                          ...formData,
                          serviceAreas: [...formData.serviceAreas, value]
                        });
                        e.currentTarget.value = '';
                      }
                    }
                  }}
                />
                <Button type="button" variant="outline">Add Area</Button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="basePrice">Base Price *</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="basePrice"
                    placeholder="50"
                    value={formData.basePrice}
                    onChange={(e) => setFormData({ ...formData, basePrice: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricingType">Pricing Type *</Label>
                <Select
                  value={formData.pricingType}
                  onValueChange={(value) => setFormData({ ...formData, pricingType: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select pricing type" />
                  </SelectTrigger>
                  <SelectContent>
                    {pricingTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Availability Schedule *</Label>
              {Object.entries(formData.availability).map(([day, schedule]) => (
                <div key={day} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={day}
                      checked={schedule.available}
                      onCheckedChange={(checked) => {
                        setFormData({
                          ...formData,
                          availability: {
                            ...formData.availability,
                            [day]: { ...schedule, available: checked as boolean }
                          }
                        });
                      }}
                    />
                    <Label htmlFor={day} className="w-24 capitalize">{day}</Label>
                  </div>
                  {schedule.available && (
                    <Input
                      placeholder="9:00 AM - 5:00 PM"
                      value={schedule.hours}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          availability: {
                            ...formData.availability,
                            [day]: { ...schedule, hours: e.target.value }
                          }
                        });
                      }}
                      className="flex-1"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Verification Documents</h3>
              <p className="text-muted-foreground">Upload required documents to verify your business</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessLicense">Business License *</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload your business license or registration
                  </p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="insurance">Insurance Certificate *</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload your liability insurance certificate
                  </p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="certifications">Professional Certifications (Optional)</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload any relevant certifications or licenses
                  </p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Portfolio & Work Examples</h3>
              <p className="text-muted-foreground">Show potential clients your best work</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="portfolioImages">Portfolio Images</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Upload up to 10 images of your work
                  </p>
                  <Button variant="outline" size="sm">
                    Choose Images
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolioDescription">Portfolio Description</Label>
                <Textarea
                  id="portfolioDescription"
                  placeholder="Describe your work experience, notable projects, and achievements"
                  value={formData.portfolioDescription}
                  onChange={(e) => setFormData({ ...formData, portfolioDescription: e.target.value })}
                  className="min-h-[120px]"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Background Check & References</h3>
              <p className="text-muted-foreground">Final step to complete your verification</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="backgroundCheck"
                  checked={formData.backgroundCheck}
                  onCheckedChange={(checked) => setFormData({ ...formData, backgroundCheck: checked as boolean })}
                />
                <Label htmlFor="backgroundCheck" className="text-sm">
                  I consent to a background check (Required for verification)
                </Label>
              </div>

              <div className="space-y-4">
                <Label>Professional References</Label>
                <p className="text-sm text-muted-foreground">
                  Provide 3 professional references who can vouch for your work quality
                </p>
                
                {formData.references.map((reference, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`ref-name-${index}`}>Reference Name *</Label>
                        <Input
                          id={`ref-name-${index}`}
                          placeholder="Full Name"
                          value={reference.name}
                          onChange={(e) => {
                            const newReferences = [...formData.references];
                            newReferences[index] = { ...reference, name: e.target.value };
                            setFormData({ ...formData, references: newReferences });
                          }}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`ref-relationship-${index}`}>Relationship *</Label>
                        <Input
                          id={`ref-relationship-${index}`}
                          placeholder="Former Client, Colleague, etc."
                          value={reference.relationship}
                          onChange={(e) => {
                            const newReferences = [...formData.references];
                            newReferences[index] = { ...reference, relationship: e.target.value };
                            setFormData({ ...formData, references: newReferences });
                          }}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`ref-phone-${index}`}>Phone Number *</Label>
                        <Input
                          id={`ref-phone-${index}`}
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={reference.phone}
                          onChange={(e) => {
                            const newReferences = [...formData.references];
                            newReferences[index] = { ...reference, phone: e.target.value };
                            setFormData({ ...formData, references: newReferences });
                          }}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`ref-email-${index}`}>Email Address *</Label>
                        <Input
                          id={`ref-email-${index}`}
                          type="email"
                          placeholder="reference@example.com"
                          value={reference.email}
                          onChange={(e) => {
                            const newReferences = [...formData.references];
                            newReferences[index] = { ...reference, email: e.target.value };
                            setFormData({ ...formData, references: newReferences });
                          }}
                          required
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold gradient-text mb-2">
              Become a Service Provider
            </h1>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals earning money doing what they love
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}
              </span>
              <span className="text-sm font-medium">
                {Math.round((currentStep / steps.length) * 100)}% Complete
              </span>
            </div>
            <Progress value={(currentStep / steps.length) * 100} className="mb-4" />
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                    step.number === currentStep 
                      ? 'bg-primary text-primary-foreground' 
                      : step.number < currentStep 
                        ? 'bg-green-500 text-white' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.number < currentStep ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <span className="text-xs font-medium">{step.number}</span>
                    )}
                  </div>
                  <div className="text-xs font-medium">{step.title}</div>
                  <div className="text-xs text-muted-foreground hidden lg:block">{step.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Form Content */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">
              {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription>
              {steps[currentStep - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          {currentStep === steps.length ? (
            <Button 
              onClick={handleSubmit}
              className="btn-primary"
            >
              Submit Application
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              className="btn-primary"
            >
              Next Step
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProviderRegister;