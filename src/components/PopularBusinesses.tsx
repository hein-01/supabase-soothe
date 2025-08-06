import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Bookmark, CheckCircle, Check, X } from 'lucide-react';

interface Business {
  id: number;
  image: string;
  name: string;
  location: string;
  rating: number;
  isVerified: boolean;
  onlineShopUrl: string;
  facebookUrl: string;
  cashOnDelivery: boolean;
  pickupInStore: boolean;
  bankDigitalPayments: boolean;
  nextDayDelivery: boolean;
}

const PopularBusinesses = () => {
  // Sample business data with placeholder images from the provided list
  const businesses: Business[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      name: "Tech Solutions Pro",
      location: "Central District",
      rating: 5,
      isVerified: true,
      onlineShopUrl: "#shop1",
      facebookUrl: "#facebook1",
      cashOnDelivery: true,
      pickupInStore: false,
      bankDigitalPayments: true,
      nextDayDelivery: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      name: "Code Masters",
      location: "Tsim Sha Tsui",
      rating: 4,
      isVerified: true,
      onlineShopUrl: "#shop2",
      facebookUrl: "#facebook2",
      cashOnDelivery: false,
      pickupInStore: true,
      bankDigitalPayments: true,
      nextDayDelivery: true
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop",
      name: "Digital Workspace",
      location: "Wan Chai",
      rating: 5,
      isVerified: false,
      onlineShopUrl: "#shop3",
      facebookUrl: "#facebook3",
      cashOnDelivery: true,
      pickupInStore: false,
      bankDigitalPayments: false,
      nextDayDelivery: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
      name: "Business Hub",
      location: "Causeway Bay",
      rating: 4,
      isVerified: true,
      onlineShopUrl: "#shop4",
      facebookUrl: "#facebook4",
      cashOnDelivery: true,
      pickupInStore: true,
      bankDigitalPayments: true,
      nextDayDelivery: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
      name: "Creative Agency",
      location: "Sheung Wan",
      rating: 5,
      isVerified: true,
      onlineShopUrl: "#shop5",
      facebookUrl: "#facebook5",
      cashOnDelivery: false,
      pickupInStore: false,
      bankDigitalPayments: true,
      nextDayDelivery: true
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=200&fit=crop",
      name: "Modern Office",
      location: "Admiralty",
      rating: 4,
      isVerified: false,
      onlineShopUrl: "#shop6",
      facebookUrl: "#facebook6",
      cashOnDelivery: true,
      pickupInStore: true,
      bankDigitalPayments: false,
      nextDayDelivery: false
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      name: "Professional Services",
      location: "Mong Kok",
      rating: 5,
      isVerified: true,
      onlineShopUrl: "#shop7",
      facebookUrl: "#facebook7",
      cashOnDelivery: false,
      pickupInStore: true,
      bankDigitalPayments: true,
      nextDayDelivery: false
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
      name: "Collaboration Center",
      location: "Jordan",
      rating: 4,
      isVerified: true,
      onlineShopUrl: "#shop8",
      facebookUrl: "#facebook8",
      cashOnDelivery: true,
      pickupInStore: false,
      bankDigitalPayments: true,
      nextDayDelivery: true
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop",
      name: "Web Development Co",
      location: "Yau Ma Tei",
      rating: 5,
      isVerified: false,
      onlineShopUrl: "#shop9",
      facebookUrl: "#facebook9",
      cashOnDelivery: false,
      pickupInStore: false,
      bankDigitalPayments: false,
      nextDayDelivery: false
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=200&fit=crop",
      name: "Corporate Tower",
      location: "Central",
      rating: 4,
      isVerified: true,
      onlineShopUrl: "#shop10",
      facebookUrl: "#facebook10",
      cashOnDelivery: true,
      pickupInStore: true,
      bankDigitalPayments: true,
      nextDayDelivery: true
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=400&h=200&fit=crop",
      name: "Business Plaza",
      location: "Fortress Hill",
      rating: 5,
      isVerified: true,
      onlineShopUrl: "#shop11",
      facebookUrl: "#facebook11",
      cashOnDelivery: false,
      pickupInStore: true,
      bankDigitalPayments: true,
      nextDayDelivery: false
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=200&fit=crop",
      name: "Innovation Hub",
      location: "Quarry Bay",
      rating: 4,
      isVerified: false,
      onlineShopUrl: "#shop12",
      facebookUrl: "#facebook12",
      cashOnDelivery: true,
      pickupInStore: false,
      bankDigitalPayments: false,
      nextDayDelivery: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-3 h-3 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-1 md:px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Popular Businesses</h2>
        
        <div className="flex flex-wrap justify-center">
          {businesses.map((business) => (
            <div key={business.id} className="hover:-translate-y-1 transition-transform duration-300 mx-[2px] md:mx-[10px] mb-4">
              <Card className="w-[165px] h-[455px] flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-[165px] h-[165px] object-cover rounded-t-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 p-1 h-auto w-auto bg-white/80 hover:bg-white"
                >
                  <Bookmark className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
              
              <CardContent className="flex-1 p-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    {renderStars(business.rating)}
                  </div>
                  
                  <h3 className="font-semibold text-sm text-foreground leading-tight line-clamp-2">
                    {business.name}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    {business.location}
                  </p>
                  
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-purple-600" />
                    <span className="text-xs text-purple-600 font-medium">Verified</span>
                  </div>
                  
                  {/* Payment and Delivery Options */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${business.cashOnDelivery ? 'bg-green-500' : 'bg-gray-400'}`}>
                        {business.cashOnDelivery ? 
                          <Check className="w-2 h-2 text-white" /> : 
                          <X className="w-2 h-2 text-white" />
                        }
                      </div>
                      <span className="text-xs text-muted-foreground">Cash on Delivery</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${business.pickupInStore ? 'bg-green-500' : 'bg-gray-400'}`}>
                        {business.pickupInStore ? 
                          <Check className="w-2 h-2 text-white" /> : 
                          <X className="w-2 h-2 text-white" />
                        }
                      </div>
                      <span className="text-xs text-muted-foreground">Pickup In-Store</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${business.bankDigitalPayments ? 'bg-green-500' : 'bg-gray-400'}`}>
                        {business.bankDigitalPayments ? 
                          <Check className="w-2 h-2 text-white" /> : 
                          <X className="w-2 h-2 text-white" />
                        }
                      </div>
                      <span className="text-xs text-muted-foreground">Digital Payments</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${business.nextDayDelivery ? 'bg-green-500' : 'bg-gray-400'}`}>
                        {business.nextDayDelivery ? 
                          <Check className="w-2 h-2 text-white" /> : 
                          <X className="w-2 h-2 text-white" />
                        }
                      </div>
                      <span className="text-xs text-muted-foreground">Next-Day Delivery</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-2">
                  <Button 
                    className="w-full h-8 text-xs bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open(business.onlineShopUrl, '_blank')}
                  >
                    Go To Online Shop
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-8 text-xs border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => window.open(business.facebookUrl, '_blank')}
                  >
                    See Products Catalog
                  </Button>
                </div>
              </CardContent>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBusinesses;