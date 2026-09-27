export type ExamType = 
  | 'CAT / MBA'
  | 'UPSC'
  | 'SSC'
  | 'Banking'
  | 'NEET'
  | 'JEE'
  | 'CLAT'
  | 'Placements'
  | 'All Aspirants';

export type SkillType = 
  | 'Speed'
  | 'Memory'
  | 'Focus'
  | 'Reasoning'
  | 'Communication'
  | 'Decision-Making'
  | 'Productivity';

export type ProductCategory = 
  | 'Apparel'
  | 'Focus'
  | 'Desk'
  | 'Digital'
  | 'Decor'
  | 'Wellness'
  | 'Exam-Day Kits';

export type ProductBadge = 
  | 'BESTSELLER'
  | 'NEW DROP'
  | 'EXAM SEASON'
  | 'DIGITAL'
  | 'LIMITED DROP'
  | 'STAFF PICK';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice: number;
  description: string;
  shortBenefit: string;
  skill: SkillType;
  exams: ExamType[];
  rating: number;
  reviewsCount: number;
  badge?: ProductBadge;
  image: string;
  alternateImage?: string;
  gallery: string[];
  stock: number;
  tags: string[];
  isDigital?: boolean;
  benefits: string[];
  whatsInside: string[];
  howToUse: string;
  reviews: {
    id: string;
    author: string;
    exam: ExamType;
    city: string;
    rating: number;
    title: string;
    comment: string;
    date: string;
    verified: boolean;
  }[];
}

export interface Course {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  price: number;
  originalPrice: number;
  exams: ExamType[];
  skill: SkillType;
  level: string;
  description: string;
  curriculum: string[];
  recommendedProductIds: string[];
  bundleId?: string;
  bundleDiscountPercent?: number;
  rating: number;
  enrolledCount: number;
  image: string;
}

export interface Bundle {
  id: string;
  name: string;
  tagline: string;
  exam: ExamType | 'All Aspirants';
  courseId: string;
  productIds: string[];
  bundlePrice: number;
  originalTotal: number;
  savings: number;
  badge: string;
  description: string;
  image: string;
}

export interface CartItem {
  id: string;
  productId?: string;
  courseId?: string;
  bundleId?: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  type: 'product' | 'course' | 'bundle';
  category?: string;
  selectedSize?: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  scenario: string;
  skillTested: SkillType;
  options: {
    text: string;
    description: string;
    scoreWeight: Record<SkillType, number>;
  }[];
}

export interface SkillProfile {
  speed: number;
  memory: number;
  focus: number;
  reasoning: number;
  communication: number;
  decisionMaking: number;
  overallScore: number;
  weakestSkill: SkillType;
  strongestSkill: SkillType;
  recommendedCourseId: string;
  recommendedProductId: string;
  recommendedBundleId: string;
}

export interface UserProfile {
  name: string;
  email: string;
  exam: ExamType;
  targetYear: string;
  targetSkill: SkillType;
  skillScore: number;
  streak: number;
  xp: number;
  enrolledCourses: {
    courseId: string;
    progress: number;
    currentDay: number;
    totalDays: number;
    nextDrill: string;
  }[];
  wishlist: string[];
  completedDrillsCount: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  shippingAddress: {
    fullName: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  paymentMethod: string;
  trackingNumber: string;
}
