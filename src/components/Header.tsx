import React, { useState } from 'react';
import { Button } from './ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, ChefHat, Users, Trophy, Heart, User } from 'lucide-react';
import logoImage from 'figma:asset/f82f1778cc1c43618bf5955e8fc32c7d74762934.png';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: ChefHat },
    { id: 'donate', label: 'Donate Food', icon: Heart },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'campaigns', label: 'Campaigns', icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer hover:scale-105 transition-transform"
          onClick={() => onNavigate('home')}
        >
          <img 
            src={logoImage} 
            alt="Annapurna Sharingspoon" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all hover:bg-accent hover:scale-105 ${
                  currentPage === item.id ? 'bg-accent' : ''
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Login Button */}
        <div className="hidden md:flex items-center space-x-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-48">
                    <button
                      onClick={() => onNavigate('customer-login')}
                      className="w-full text-left px-3 py-2 rounded hover:bg-accent"
                    >
                      Customer Login
                    </button>
                    <button
                      onClick={() => onNavigate('delivery-login')}
                      className="w-full text-left px-3 py-2 rounded hover:bg-accent"
                    >
                      Delivery Partner
                    </button>
                    <button
                      onClick={() => onNavigate('admin-login')}
                      className="w-full text-left px-3 py-2 rounded hover:bg-accent"
                    >
                      Admin Login
                    </button>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent text-left"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="border-t pt-4 space-y-2">
                <button
                  onClick={() => {
                    onNavigate('customer-login');
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent"
                >
                  Customer Login
                </button>
                <button
                  onClick={() => {
                    onNavigate('delivery-login');
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent"
                >
                  Delivery Partner
                </button>
                <button
                  onClick={() => {
                    onNavigate('admin-login');
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-accent"
                >
                  Admin Login
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}