import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Heart, Users, Utensils, Star } from 'lucide-react';

export function ImpactStories() {
  const stories = [
    {
      id: 1,
      title: 'Sunrise Bakery\'s Daily Donation',
      story: 'Every evening, Sunrise Bakery donates fresh bread and pastries that would otherwise go unsold. Through Annapurna Sharingspoon, they\'ve helped feed over 200 families in the past month.',
      donor: 'Avni Saxena, Bakery Owner',
      impact: '240 families fed',
      foodSaved: '85 kg bread daily',
      image: 'https://images.unsplash.com/photo-1628697002958-ffab0ce12130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwYmFrZXJ5JTIwZG9uYXRpb258ZW58MXx8fHwxNzU3NDQwNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Business Partner'
    },
    {
      id: 2,
      title: 'Community Kitchen Success',
      story: 'Our volunteer-run community kitchen serves warm meals to homeless individuals and struggling families. Thanks to food donations through the platform, we can provide nutritious meals daily.',
      donor: 'Neelu, Community Volunteer',
      impact: '150 meals daily',
      foodSaved: '50 kg surplus daily',
      image: 'https://images.unsplash.com/photo-1711261727644-cb7d5f163a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzb3VwJTIwa2l0Y2hlbiUyMGZlZWRpbmd8ZW58MXx8fHwxNzU3NDQwNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Community Hero'
    },
    {
      id: 3,
      title: 'Restaurant Recovery Program',
      story: 'Green Bistro partnered with us to donate excess prepared meals. Instead of throwing away perfectly good food, they now help feed local shelters and food banks.',
      donor: 'Tushar Varshney, Restaurant Manager',
      impact: '300+ meals rescued',
      foodSaved: '120 kg monthly',
      image: 'https://images.unsplash.com/photo-1693970717381-0d53d39d71ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHdhc3RlJTIwcmVkdWN0aW9ufGVufDF8fHx8MTc1NzQ0MDcwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Food Rescue'
    }
  ];

  const testimonials = [
    {
      quote: "This platform has transformed how we think about food waste. We're not just reducing waste, we're creating hope.",
      author: "Aastha Singh",
      role: "Food Bank Coordinator",
      avatar: "👨‍💼"
    },
    {
      quote: "Knowing that our surplus food feeds families in need gives our work deeper meaning. It's beautiful to see community care in action.",
      author: "Riddhima Kar",
      role: "Restaurant Owner",
      avatar: "👩‍🍳"
    },
    {
      quote: "My children and I have been recipients of these generous donations. It's helped us through difficult times with dignity and nutrition.",
      author: "Heema",
      role: "Community Member",
      avatar: "👩‍👧‍👦"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Real Impact Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our community is making a difference, one meal at a time
          </p>
        </div>

        {/* Impact Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story) => (
            <Card key={story.id} className="hover:shadow-xl transition-all transform hover:scale-105 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-600">
                  {story.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{story.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {story.story}
                </p>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-50 rounded-lg p-3">
                    <Users className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="text-sm">{story.impact}</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <Utensils className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm">{story.foodSaved}</div>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>— {story.donor}</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-2">What Our Community Says</h3>
            <p className="text-muted-foreground">Voices from donors, volunteers, and recipients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <Quote className="h-8 w-8 text-green-500 mx-auto mb-4" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-4">Join Our Impact</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Every donation, no matter how small, creates ripples of positive change in our community. 
              Start your journey of giving today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
                <Heart className="h-4 w-4 mr-2 inline" />
                Start Donating
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
