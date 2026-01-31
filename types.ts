
export interface Package {
  id: number;
  name: string;
  duration: string;
  guests: string;
  flavors: string;
  features: string[];
  price: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: number;
  author: string;
  text: string;
  role: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}
