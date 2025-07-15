import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Building, 
  CheckCircle,
  X
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "register";
  userType?: "customer" | "provider";
}

const AuthModal = ({ isOpen, onClose, defaultTab = "login", userType = "customer" }: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [selectedUserType, setSelectedUserType] = useState(userType);
  const { toast } = useToast();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [registerData, setRegisterData] = useState({
    // Customer fields
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    
    // Provider fields
    businessName: "",
    contactPerson: "",
    businessEmail: "",
    businessPhone: "",
    businessPassword: "",
    businessConfirmPassword: "",
    
    // Common
    acceptTerms: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginData, "User Type:", selectedUserType);
    
    toast({
      title: "Login Successful!",
      description: `Welcome back to ACE WORLD!`,
    });
    
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedUserType === "customer") {
      if (registerData.password !== registerData.confirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "Please make sure your passwords match.",
          variant: "destructive"
        });
        return;
      }
    } else {
      if (registerData.businessPassword !== registerData.businessConfirmPassword) {
        toast({
          title: "Password Mismatch",
          description: "Please make sure your passwords match.",
          variant: "destructive"
        });
        return;
      }
    }
    
    if (!registerData.acceptTerms) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }
    
    console.log("Register:", registerData, "User Type:", selectedUserType);
    
    toast({
      title: "Registration Successful!",
      description: selectedUserType === "customer" 
        ? "Welcome to ACE WORLD! You can now start booking services."
        : "Welcome to ACE WORLD! Your provider application is being reviewed.",
    });
    
    onClose();
  };

  const resetForm = () => {
    setLoginData({
      email: "",
      password: "",
      rememberMe: false
    });
    setRegisterData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      businessName: "",
      contactPerson: "",
      businessEmail: "",
      businessPhone: "",
      businessPassword: "",
      businessConfirmPassword: "",
      acceptTerms: false
    });
    setShowPassword(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-heading font-bold">
              {activeTab === "login" ? "Welcome Back" : "Join ACE WORLD"}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="py-4">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "register")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="register">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">I am a:</Label>
                <div className="flex gap-2">
                  <Button
                    variant={selectedUserType === "customer" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedUserType("customer")}
                    className="flex-1"
                  >
                    Customer
                  </Button>
                  <Button
                    variant={selectedUserType === "provider" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedUserType("provider")}
                    className="flex-1"
                  >
                    Provider
                  </Button>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">
                    {selectedUserType === "customer" ? "Email" : "Business Email"}
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder={selectedUserType === "customer" ? "Enter your email" : "Enter your business email"}
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember-me"
                      checked={loginData.rememberMe}
                      onChange={(e) => setLoginData({ ...loginData, rememberMe: e.target.checked })}
                      className="rounded"
                    />
                    <Label htmlFor="remember-me" className="text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Button variant="ghost" size="sm" className="text-sm text-primary hover:text-primary/80">
                    Forgot password?
                  </Button>
                </div>

                <Button type="submit" className="w-full btn-primary">
                  Sign In as {selectedUserType === "customer" ? "Customer" : "Provider"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">I want to:</Label>
                <div className="flex gap-2">
                  <Button
                    variant={selectedUserType === "customer" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedUserType("customer")}
                    className="flex-1"
                  >
                    Find Services
                  </Button>
                  <Button
                    variant={selectedUserType === "provider" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedUserType("provider")}
                    className="flex-1"
                  >
                    Offer Services
                  </Button>
                </div>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                {selectedUserType === "customer" ? (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={registerData.firstName}
                            onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            value={registerData.lastName}
                            onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={registerData.email}
                          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={registerData.phone}
                          onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create password"
                            value={registerData.password}
                            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm password"
                          value={registerData.confirmPassword}
                          onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business Name</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="businessName"
                          placeholder="Your Business Name"
                          value={registerData.businessName}
                          onChange={(e) => setRegisterData({ ...registerData, businessName: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="contactPerson"
                          placeholder="Your Full Name"
                          value={registerData.contactPerson}
                          onChange={(e) => setRegisterData({ ...registerData, contactPerson: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessEmail">Business Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="businessEmail"
                          type="email"
                          placeholder="business@example.com"
                          value={registerData.businessEmail}
                          onChange={(e) => setRegisterData({ ...registerData, businessEmail: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessPhone">Business Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="businessPhone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={registerData.businessPhone}
                          onChange={(e) => setRegisterData({ ...registerData, businessPhone: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="businessPassword">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="businessPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create password"
                            value={registerData.businessPassword}
                            onChange={(e) => setRegisterData({ ...registerData, businessPassword: e.target.value })}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessConfirmPassword">Confirm Password</Label>
                        <Input
                          id="businessConfirmPassword"
                          type="password"
                          placeholder="Confirm password"
                          value={registerData.businessConfirmPassword}
                          onChange={(e) => setRegisterData({ ...registerData, businessConfirmPassword: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={registerData.acceptTerms}
                    onChange={(e) => setRegisterData({ ...registerData, acceptTerms: e.target.checked })}
                    required
                    className="rounded"
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Button variant="link" className="h-auto p-0 text-sm text-primary">
                      Terms of Service
                    </Button>{" "}
                    and{" "}
                    <Button variant="link" className="h-auto p-0 text-sm text-primary">
                      Privacy Policy
                    </Button>
                  </Label>
                </div>

                <Button type="submit" className="w-full btn-primary">
                  Create {selectedUserType === "customer" ? "Customer" : "Provider"} Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;