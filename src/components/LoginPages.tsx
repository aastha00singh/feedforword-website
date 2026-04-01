import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  User, 
  Truck, 
  Shield, 
  Mail, 
  Lock, 
  ArrowLeft,
  Eye,
  EyeOff 
} from 'lucide-react';

interface LoginPagesProps {
  page: string;
  onNavigate: (page: string) => void;
}

export function LoginPages({ page, onNavigate }: LoginPagesProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const getPageConfig = () => {
    switch (page) {
      case 'customer-login':
        return {
          title: 'Customer Portal',
          subtitle: 'Join our community of food sharers',
          icon: User,
          gradient: 'from-blue-500 to-purple-600',
          image: 'https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjBjaGFyaXR5JTIwaGVscGluZ3xlbnwxfHx8fDE3NTc0Mzk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        };
      case 'delivery-login':
        return {
          title: 'Delivery Partner',
          subtitle: 'Help deliver meals to those in need',
          icon: Truck,
          gradient: 'from-green-500 to-emerald-600',
          image: 'https://images.unsplash.com/photo-1711261727644-cb7d5f163a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBraXRjaGVuJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NTc0Mzk1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        };
      case 'admin-login':
        return {
          title: 'Admin Dashboard',
          subtitle: 'Manage the platform and community',
          icon: Shield,
          gradient: 'from-red-500 to-pink-600',
          image: 'https://images.unsplash.com/photo-1649140208632-1edeb77d7bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwd2FzdGUlMjBwcmV2ZW50aW9ufGVufDF8fHx8MTc1NzQzOTUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
        };
      default:
        return {
          title: 'Login',
          subtitle: 'Welcome back',
          icon: User,
          gradient: 'from-blue-500 to-purple-600',
          image: ''
        };
    }
  };

  const config = getPageConfig();
  const Icon = config.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Login attempt:', formData);
    // Navigate to appropriate dashboard
    if (page === 'admin-login') {
      onNavigate('admin-dashboard');
    } else {
      onNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Image */}
        <div className="hidden lg:block relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-700"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700">
              <ImageWithFallback
                src={config.image}
                alt={config.title}
                className="w-full h-96 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${config.gradient} opacity-80`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2">{config.title}</h3>
                  <p className="text-lg opacity-90">{config.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onNavigate('home')}
                  className="hover:bg-accent"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className={`bg-gradient-to-r ${config.gradient} p-3 rounded-full shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div></div>
              </div>
              <CardTitle className="text-2xl">{config.title}</CardTitle>
              <p className="text-muted-foreground">{config.subtitle}</p>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Sign Up</TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className={`w-full bg-gradient-to-r ${config.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
                    >
                      Sign In
                    </Button>
                  </form>
                </TabsContent>

                {/* Register Tab */}
                <TabsContent value="register">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="pl-10 pr-10"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className={`w-full bg-gradient-to-r ${config.gradient} hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all`}
                    >
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                By continuing, you agree to our Terms & Privacy Policy
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}