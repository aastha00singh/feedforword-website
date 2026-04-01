import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Heart, Users, Utensils } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border shadow-lg">
                <Heart className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-sm">Fight Hunger. Stop Waste.</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl leading-tight">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Share Food,
                </span>
                <br />
                <span className="text-foreground">Share Love</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Connect surplus food with those in need. Every meal shared is a step towards ending hunger and reducing waste in our community.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => onNavigate('donate')}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all group"
              >
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('about')}
                className="border-2 hover:bg-accent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all">
                  <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl">1,200+</div>
                  <div className="text-xs text-muted-foreground">Active Donors</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all">
                  <Utensils className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl">15K+</div>
                  <div className="text-xs text-muted-foreground">Meals Shared</div>
                </div>
              </div>
              
              <div className="text-center group cursor-pointer">
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transform group-hover:scale-105 transition-all">
                  <Heart className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl">800+</div>
                  <div className="text-xs text-muted-foreground">Lives Impacted</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative group">
              {/* 3D Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-700 delay-75"></div>
              
              {/* Main Image */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb24lMjBjaGFyaXR5JTIwaGVscGluZ3xlbnwxfHx8fDE3NTc0Mzk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Food donation and sharing"
                  className="w-full h-96 object-cover"
                />
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm">+50 Meals</div>
                      <div className="text-xs text-muted-foreground">Today</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce delay-500">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm">25 Families</div>
                      <div className="text-xs text-muted-foreground">Fed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}