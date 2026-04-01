import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FoodCategories } from './components/FoodCategories';
import { Dashboard } from './components/Dashboard';
import { LoginPages } from './components/LoginPages';
import { Footer } from './components/Footer';
import { ImpactStories } from './components/ImpactStories';
import { FoodShowcase } from './components/FoodShowcase';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { 
  Trophy, 
  Crown, 
  Medal, 
  Star, 
  Users, 
  Heart,
  Target,
  Lightbulb,
  Calendar,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  // Mock data for leaderboard
  const leaderboardData = [
    { rank: 1, name: 'Sarah Johnson', donations: 89, points: 4520, badge: 'Gold', avatar: '👩‍🍳' },
    { rank: 2, name: 'Michael Chen', donations: 76, points: 3980, badge: 'Gold', avatar: '👨‍🍳' },
    { rank: 3, name: 'Emma Davis', donations: 68, points: 3540, badge: 'Silver', avatar: '👩‍💼' },
    { rank: 4, name: 'James Wilson', donations: 54, points: 2890, badge: 'Silver', avatar: '👨‍💼' },
    { rank: 5, name: 'Lisa Anderson', donations: 47, points: 2430, badge: 'Bronze', avatar: '👩‍🔬' }
  ];

  // Mock data for campaigns
  const campaigns = [
    {
      id: 1,
      title: 'Holiday Meal Drive',
      description: 'Help us provide warm meals to 500 families this holiday season.',
      progress: 75,
      target: '500 families',
      current: '375 families',
      image: 'https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjBjaGFyaXR5JTIwaGVscGluZ3xlbnwxfHx8fDE3NTc0Mzk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'Fresh Produce Initiative',
      description: 'Connecting local farms with community kitchens to reduce waste.',
      progress: 60,
      target: '1000 kg',
      current: '600 kg',
      image: 'https://images.unsplash.com/photo-1690293319115-7c444db81c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBzdXJwbHVzJTIwZm9vZHxlbnwxfHx8fDE3NTc0Mzk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      title: 'Community Kitchen Expansion',
      description: 'Building new community kitchens to serve more neighborhoods.',
      progress: 45,
      target: '5 new kitchens',
      current: '2 completed',
      image: 'https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYmFuayUyMHZvbHVudGVlcnMlMjBzZXJ2aW5nJTIwbWVhbHN8ZW58MXx8fHwxNzU3NDQwNjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      title: 'Zero Waste Restaurant Program',
      description: 'Partnering with restaurants to achieve zero food waste goals.',
      progress: 80,
      target: '50 restaurants',
      current: '40 partners',
      image: 'https://images.unsplash.com/photo-1628697002958-ffab0ce12130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwYmFrZXJ5JTIwZG9uYXRpb258ZW58MXx8fHwxNzU3NDQwNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <FoodCategories onNavigate={handleNavigate} />
            <FoodShowcase />
            <ImpactStories />
            
            {/* About Section */}
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl mb-4">About Annapurna Sharingspoon</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    We're building a community where no food goes to waste and no one goes hungry.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="text-center hover:shadow-xl transition-all transform hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl mb-3">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To eliminate food waste and hunger by connecting surplus food with those who need it most in our community.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-xl transition-all transform hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Lightbulb className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl mb-3">Our Vision</h3>
                      <p className="text-muted-foreground">
                        A world where technology bridges the gap between food surplus and food insecurity, creating sustainable communities.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-xl transition-all transform hover:scale-105 group">
                    <CardContent className="p-8">
                      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl mb-3">How It Works</h3>
                      <p className="text-muted-foreground">
                        Donors list surplus food, recipients request what they need, and our delivery partners ensure safe, efficient distribution.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </>
        );

      case 'leaderboard':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl mb-4">Community Leaderboard</h1>
                <p className="text-xl text-muted-foreground">
                  Celebrating our top food sharing heroes
                </p>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
                    Top Donors This Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaderboardData.map((user) => (
                      <div key={user.rank} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            user.rank === 1 ? 'bg-yellow-500' : 
                            user.rank === 2 ? 'bg-gray-400' : 
                            user.rank === 3 ? 'bg-amber-600' : 'bg-muted'
                          }`}>
                            {user.rank <= 3 ? (
                              <Crown className="h-4 w-4 text-white" />
                            ) : (
                              <span className="text-sm">{user.rank}</span>
                            )}
                          </div>
                          <div className="text-2xl">{user.avatar}</div>
                        </div>
                        
                        <div className="flex-1">
                          <h4>{user.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {user.donations} donations • {user.points} points
                          </p>
                        </div>
                        
                        <Badge variant={
                          user.badge === 'Gold' ? 'default' : 
                          user.badge === 'Silver' ? 'secondary' : 'outline'
                        }>
                          {user.badge}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'campaigns':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl mb-4">Community Campaigns</h1>
                <p className="text-xl text-muted-foreground">
                  Join our initiatives to make a bigger impact
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="hover:shadow-xl transition-all">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge className="mb-2">Active Campaign</Badge>
                        <h3 className="text-xl">{campaign.title}</h3>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">{campaign.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Progress: {campaign.current}</span>
                          <span>Goal: {campaign.target}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full h-2 transition-all"
                            style={{ width: `${campaign.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-muted-foreground">{campaign.progress}% Complete</p>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                        Join Campaign
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 'donate':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl mb-4">Donate Food</h1>
                <p className="text-xl text-muted-foreground">
                  Share your surplus food with those in need
                </p>
              </div>
              <FoodCategories onNavigate={handleNavigate} />
              <FoodShowcase />
            </div>
          </div>
        );

      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;

      case 'customer-login':
      case 'delivery-login':
      case 'admin-login':
        return <LoginPages page={currentPage} onNavigate={handleNavigate} />;

      case 'admin-dashboard':
        return (
          <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h1 className="text-4xl mb-4">Admin Dashboard</h1>
                <p className="text-xl text-muted-foreground">
                  Manage platform operations and analytics
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">Total Users</p>
                        <p className="text-3xl">2,847</p>
                      </div>
                      <Users className="h-8 w-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100">Active Donations</p>
                        <p className="text-3xl">156</p>
                      </div>
                      <Heart className="h-8 w-8 text-green-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100">This Month</p>
                        <p className="text-3xl">1,284</p>
                      </div>
                      <Calendar className="h-8 w-8 text-purple-200" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Donations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Donation management interface would be here</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">User management interface would be here</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl mb-4">Page Not Found</h1>
              <Button onClick={() => handleNavigate('home')}>
                Go Home
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}