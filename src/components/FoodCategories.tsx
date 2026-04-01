import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Leaf, 
  Clock, 
  Factory, 
  AlertTriangle,
  Plus
} from 'lucide-react';

interface FoodCategoriesProps {
  onNavigate: (page: string) => void;
}

export function FoodCategories({ onNavigate }: FoodCategoriesProps) {
  const categories = [
    {
      id: 'surplus',
      title: 'Surplus Food',
      description: 'Fresh produce and meals that exceed restaurant/store capacity',
      icon: Leaf,
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1690293319115-7c444db81c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBzdXJwbHVzJTIwZm9vZHxlbnwxfHx8fDE3NTc0Mzk1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '850+',
      gradient: 'from-green-400 to-emerald-600'
    },
    {
      id: 'leftover',
      title: 'Leftover Food',
      description: 'Home-cooked meals and restaurant leftovers in good condition',
      icon: Clock,
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1627955280978-f54fff2f316a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFsJTIwcHJlcGFyYXRpb24lMjBsZWZ0b3ZlciUyMGZvb2R8ZW58MXx8fHwxNzU3NDM5NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '420+',
      gradient: 'from-blue-400 to-cyan-600'
    },
    {
      id: 'preprocessing',
      title: 'Pre-processing Food',
      description: 'Raw ingredients and supplies ready for meal preparation',
      icon: Factory,
      color: 'bg-purple-500',
      image: 'https://images.unsplash.com/photo-1649140208632-1edeb77d7bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwd2FzdGUlMjBwcmV2ZW50aW9ufGVufDF8fHx8MTc1NzQzOTUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '320+',
      gradient: 'from-purple-400 to-indigo-600'
    },
    {
      id: 'perished',
      title: 'Near-Expiry Food',
      description: 'Items approaching expiry but still safe for consumption',
      icon: AlertTriangle,
      color: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1711261727644-cb7d5f163a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBraXRjaGVuJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NTc0Mzk1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '180+',
      gradient: 'from-orange-400 to-red-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Food Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the type of food you want to donate and help reduce waste while feeding those in need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border-0 bg-white"
                onClick={() => onNavigate('donate')}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`${category.color} p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Count Badge */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {category.count} Available
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    {category.title}
                    <Plus className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-90 transition-all" />
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </CardContent>

                {/* 3D Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Quick Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer group"
               onClick={() => onNavigate('donate')}>
            <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform" />
            <span>Start Donating</span>
          </div>
        </div>
      </div>
    </section>
  );
}