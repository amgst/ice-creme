
import { Package, Testimonial, GalleryImage } from './types';

export const PACKAGES: Package[] = [
  {
    id: 1,
    name: "Petite Scooper",
    duration: "45 Minutes",
    guests: "Up to 50 Guests",
    flavors: "2 Flavors",
    features: ["Endless Gelato", "Professional Scooper", "Eco-friendly Supplies"],
    price: "From $350"
  },
  {
    id: 2,
    name: "Semi Mellow",
    duration: "1 Hour",
    guests: "Up to 75 Guests",
    flavors: "3 Flavors",
    features: ["Endless Gelato", "Professional Scooper", "Custom Menu Signage"],
    price: "From $495"
  },
  {
    id: 3,
    name: "Mellow Scooper",
    duration: "1 Hour",
    guests: "Up to 120 Guests",
    flavors: "4 Flavors",
    features: ["Endless Gelato", "Professional Scooper", "Premium Toppings Station", "Custom Menu Signage"],
    isPopular: true,
    price: "From $650"
  },
  {
    id: 4,
    name: "Grande Scooper",
    duration: "1.5 Hours",
    guests: "Up to 160 Guests",
    flavors: "5 Flavors",
    features: ["Endless Gelato", "Professional Scooper", "Luxury Cart Styling"],
    price: "From $820"
  },
  {
    id: 5,
    name: "Ultimate Scooper",
    duration: "2 Hours",
    guests: "Up to 200 Guests",
    flavors: "6 Flavors",
    features: ["Endless Gelato", "2 Professional Scoopers", "VIP Flavor Selection", "Priority Booking", "Luxury Cart Styling"],
    price: "From $1,100"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    author: "Karl",
    role: "Wedding Client",
    text: "The event went extremely well and I have had nothing but good feedback from every guest. The gelato flavors were excellent and well enjoyed by everyone, and your staff were incredibly friendly and accommodating throughout the entire night."
  },
  {
    id: 2,
    author: "Matthew",
    role: "Corporate Event Manager",
    text: "After ringing several gelato cart providers, we were happy to find Scoopalicious as they offered more flavor choices for the same cost as many others we spoke to. Mariya was very cheerful and extremely helpful. A breeze to work with."
  },
  {
    id: 3,
    author: "Amy",
    role: "Birthday Party Host",
    text: "Thank you so much for the service on Saturday. Everyone loved it, especially the kids. We will definitely keep Scoopalicious in mind for future events!"
  }
];

export const GALLERY: GalleryImage[] = [
  { id: 1, url: "https://picsum.photos/seed/ice1/600/600", alt: "Gelato cup with fresh berries" },
  { id: 2, url: "https://picsum.photos/seed/ice2/600/600", alt: "Waffle cones lined up" },
  { id: 3, url: "https://picsum.photos/seed/ice3/600/600", alt: "Gelato cart in action" },
  { id: 4, url: "https://picsum.photos/seed/ice4/600/600", alt: "Strawberry sorbet" },
  { id: 5, url: "https://picsum.photos/seed/ice5/600/600", alt: "Happy guests eating gelato" },
  { id: 6, url: "https://picsum.photos/seed/ice6/600/600", alt: "Close up of creamy gelato scoop" }
];
