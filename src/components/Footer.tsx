import React from 'react';
import { ChefHat, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logoImage from 'figma:asset/f82f1778cc1c43618bf5955e8fc32c7d74762934.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Donate Food', page: 'donate' },
    { label: 'Leaderboard', page: 'leaderboard' },
    { label: 'Campaigns', page: 'campaigns' }
  ];

  const legalLinks = [
    { label: 'Terms of Service', page: 'terms' },
    { label: 'Privacy Policy', page: 'privacy' },
    { label: 'Cookie Policy', page: 'cookies' },
    { label: 'Contact Us', page: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/20 to-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div 
              className="flex items-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onNavigate('home')}
            >
              <img 
                src={logoImage} 
                alt="Annapurna Sharingspoon" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <p className="text-muted-foreground text-sm">
              Connecting surplus food with those in need. Together, we fight hunger and reduce waste in our community.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>help@annapurnasharing.org</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 96934XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>DBUU, Dehradun</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Food Donation</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Meal Delivery</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Community Kitchen</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Volunteer Program</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Corporate Partnership</li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="text-sm mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:text-white transition-all hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2026 Annapurna Sharingspoon. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Made with pyaar</span>
              <div className="text-red-500 animate-pulse">❤️</div>
              <span>for a better community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}