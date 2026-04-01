import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Plus, 
  Heart, 
  Clock, 
  MapPin, 
  Star, 
  Truck,
  Calendar,
  Award,
  Users,
  Utensils
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('donor');

  const donorStats = {
    totalDonations: 45,
    mealsDonated: 280,
    points: 1250,
    rank: 15
  };

  const recentDonations = [
    {
      id: 1,
      type: 'Surplus Food',
      items: 'Fresh vegetables & fruits',
      quantity: '15 kg',
      status: 'Delivered',
      date: '2 hours ago',
      points: 50,
      image: 'https://images.unsplash.com/photo-1690293319115-7c444db81c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBzdXJwbHVzJTIwZm9vZHxlbnwxfHx8fDE3NTc0Mzk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      type: 'Leftover Food',
      items: 'Home-cooked meals',
      quantity: '8 portions',
      status: 'In Transit',
      date: '5 hours ago',
      points: 35,
      image: 'https://images.unsplash.com/photo-1627955280978-f54fff2f316a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFsJTIwcHJlcGFyYXRpb24lMjBsZWZ0b3ZlciUyMGZvb2R8ZW58MXx8fHwxNzU3NDM5NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const nearbyFood = [
    {
      id: 1,
      donor: 'Sunrise Restaurant',
      items: 'Pasta & Salad',
      quantity: '12 portions',
      distance: '0.8 km',
      available: '30 min',
      image: 'https://images.unsplash.com/photo-1627955280978-f54fff2f316a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFsJTIwcHJlcGFyYXRpb24lMjBsZWZ0b3ZlciUyMGZvb2R8ZW58MXx8fHwxNzU3NDM5NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      donor: 'Green Market',
      items: 'Fresh Produce',
      quantity: '20 kg',
      distance: '1.2 km',
      available: '1 hour',
      image: 'https://images.unsplash.com/photo-1690293319115-7c444db81c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBzdXJwbHVzJTIwZm9vZHxlbnwxfHx8fDE3NTc0Mzk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl">Welcome back!</h1>
            <p className="text-muted-foreground">Manage your food sharing activities</p>
          </div>
          
          {/* Tab Switcher */}
          <div className="flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('donor')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'donor' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Heart className="h-4 w-4 mr-2 inline" />
              Donor
            </button>
            <button
              onClick={() => setActiveTab('recipient')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'recipient' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Utensils className="h-4 w-4 mr-2 inline" />
              Recipient
            </button>
          </div>
        </div>

        {activeTab === 'donor' ? (
          <>
            {/* Donor Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Total Donations</p>
                      <p className="text-3xl">{donorStats.totalDonations}</p>
                    </div>
                    <Heart className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Meals Donated</p>
                      <p className="text-3xl">{donorStats.mealsDonated}</p>
                    </div>
                    <Utensils className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Points Earned</p>
                      <p className="text-3xl">{donorStats.points}</p>
                    </div>
                    <Star className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100">Leaderboard Rank</p>
                      <p className="text-3xl">#{donorStats.rank}</p>
                    </div>
                    <Award className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Add Donation */}
              <Card className="hover:shadow-xl transition-all cursor-pointer group" onClick={() => onNavigate('donate')}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="h-6 w-6 mr-2 text-green-500 group-hover:scale-110 transition-transform" />
                    Add New Donation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Share surplus food with those in need</p>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                    Start Donating
                  </Button>
                </CardContent>
              </Card>

              {/* Progress to Next Level */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 mr-2 text-yellow-500" />
                    Progress to Gold Badge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Current: {donorStats.points} points</span>
                      <span>Target: 1500 points</span>
                    </div>
                    <Progress value={(donorStats.points / 1500) * 100} className="h-2" />
                    <p className="text-sm text-muted-foreground">250 points to go!</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Donations */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDonations.map((donation) => (
                    <div key={donation.id} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="relative">
                        <ImageWithFallback
                          src={donation.image}
                          alt={donation.items}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <Badge 
                          variant={donation.status === 'Delivered' ? 'default' : 'secondary'}
                          className="absolute -top-2 -right-2 text-xs"
                        >
                          {donation.status}
                        </Badge>
                      </div>
                      
                      <div className="flex-1">
                        <h4>{donation.items}</h4>
                        <p className="text-sm text-muted-foreground">{donation.type} • {donation.quantity}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{donation.date}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-yellow-600">
                          <Star className="h-4 w-4 fill-current" />
                          <span>+{donation.points}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            {/* Recipient View */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Nearby Food */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-blue-500" />
                    Nearby Available Food
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {nearbyFood.map((food) => (
                      <div key={food.id} className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-accent transition-colors cursor-pointer">
                        <ImageWithFallback
                          src={food.image}
                          alt={food.items}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        
                        <div className="flex-1">
                          <h4>{food.items}</h4>
                          <p className="text-sm text-muted-foreground">{food.donor}</p>
                          <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                            <span>{food.quantity}</span>
                            <span>• {food.distance} away</span>
                            <span>• Available for {food.available}</span>
                          </div>
                        </div>
                        
                        <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                          Request
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-6">
                <Card className="hover:shadow-xl transition-all cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="h-6 w-6 mr-2 text-green-500 group-hover:scale-110 transition-transform" />
                      Request Pickup
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Schedule a pickup for available food near you</p>
                    <Button variant="outline" className="w-full">
                      Schedule Pickup
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-6 w-6 mr-2 text-blue-500 group-hover:scale-110 transition-transform" />
                      Delivery Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">View your upcoming food deliveries</p>
                    <Button variant="outline" className="w-full">
                      View Schedule
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all cursor-pointer group">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-6 w-6 mr-2 text-red-500 group-hover:scale-110 transition-transform" />
                      Feedback
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Share your experience and help improve our service</p>
                    <Button variant="outline" className="w-full">
                      Give Feedback
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}