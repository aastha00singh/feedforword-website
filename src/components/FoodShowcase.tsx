import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Clock, 
  MapPin, 
  Users, 
  Leaf,
  ChefHat,
  Heart,
  Star,
  Timer
} from 'lucide-react';

export function FoodShowcase() {
  const availableFood = [
    {
      id: 1,
      title: 'Fresh Artisan Bread',
      description: 'Freshly baked sourdough and whole grain breads from local bakery',
      donor: 'Sunrise Bakery',
      quantity: '24 loaves',
      location: '0.5 km away',
      timeLeft: '2 hours left',
      category: 'Baked Goods',
      rating: 4.9,
      serves: '48 people',
      image: 'https://images.unsplash.com/photo-1628697002958-ffab0ce12130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwYmFrZXJ5JTIwZG9uYXRpb258ZW58MXx8fHwxNzU3NDQwNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Fresh', 'Organic', 'Vegan-Friendly']
    },
    {
      id: 2,
      title: 'Prepared Healthy Meals',
      description: 'Nutritious meals including grilled chicken, rice, and vegetables',
      donor: 'Green Bistro',
      quantity: '15 meals',
      location: '1.2 km away',
      timeLeft: '4 hours left',
      category: 'Ready Meals',
      rating: 4.8,
      serves: '15 people',
      image: 'https://images.unsplash.com/photo-1693970717381-0d53d39d71ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHdhc3RlJTIwcmVkdWN0aW9ufGVufDF8fHx8MTc1NzQ0MDcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Protein-Rich', 'Balanced', 'Restaurant Quality']
    },
    {
      id: 3,
      title: 'Fresh Produce Mix',
      description: 'Seasonal fruits and vegetables, slightly imperfect but perfectly nutritious',
      donor: 'Community Farm',
      quantity: '30 kg',
      location: '2.1 km away',
      timeLeft: '6 hours left',
      category: 'Fresh Produce',
      rating: 4.7,
      serves: '60 people',
      image: 'https://images.unsplash.com/photo-1690293319115-7c444db81c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBzdXJwbHVzJTIwZm9vZHxlbnwxfHx8fDE3NTc0Mzk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Organic', 'Local', 'Vitamin-Rich']
    },
    {
      id: 4,
      title: 'Community Soup Kitchen',
      description: 'Hot soup and warm meals served daily to those in need',
      donor: 'Hope Kitchen',
      quantity: '40 servings',
      location: '0.8 km away',
      timeLeft: 'Now serving',
      category: 'Hot Meals',
      rating: 5.0,
      serves: '40 people',
      image: 'https://images.unsplash.com/photo-1711261727644-cb7d5f163a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzb3VwJTIwa2l0Y2hlbiUyMGZlZWRpbmd8ZW58MXx8fHwxNzU3NDQwNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Hot', 'Comforting', 'Community-Made']
    }
  ];

  const donationStats = [
    {
      icon: Heart,
      label: 'Total Donations Today',
      value: '156',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      label: 'People Fed This Week',
      value: '2,840',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Leaf,
      label: 'Food Waste Prevented',
      value: '1.2 Tons',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: ChefHat,
      label: 'Active Donors',
      value: '89',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {donationStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all transform hover:scale-105">
                <CardContent className="p-6">
                  <div className={`${stat.bgColor} ${stat.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-2xl mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Available Food Near You</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fresh donations ready for pickup or delivery in your community
          </p>
        </div>

        {/* Available Food Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {availableFood.map((food) => (
            <Card key={food.id} className="hover:shadow-xl transition-all transform hover:scale-105 group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={food.image}
                  alt={food.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    {food.category}
                  </Badge>
                  {food.timeLeft === 'Now serving' ? (
                    <Badge className="bg-red-500 hover:bg-red-600 animate-pulse">
                      🔴 Live Now
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-white/90">
                      <Timer className="h-3 w-3 mr-1" />
                      {food.timeLeft}
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs">{food.rating}</span>
                </div>

                {/* Quick Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3" />
                        <span>{food.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-3 w-3" />
                        <span>{food.serves}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl mb-2">{food.title}</h3>
                    <p className="text-muted-foreground text-sm">{food.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="text-muted-foreground">Donated by</p>
                      <p>{food.donor}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">Quantity</p>
                      <p>{food.quantity}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {food.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors text-sm">
                      Request Pickup
                    </button>
                    <button className="border border-green-500 text-green-500 hover:bg-green-50 py-2 px-4 rounded-lg transition-colors text-sm">
                      Get Directions
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">Don't See What You Need?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join our notification system to get alerts when new food donations become available in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
                Enable Notifications
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                Browse All Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}