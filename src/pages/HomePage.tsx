import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HomeSkillQuiz } from '../components/home/HomeSkillQuiz';
import { ShopBySkill } from '../components/home/ShopBySkill';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { ShopByExam } from '../components/home/ShopByExam';
import { HomeCourses } from '../components/home/HomeCourses';
import { HomeBundles } from '../components/home/HomeBundles';
import { LimitedDropSection } from '../components/home/LimitedDropSection';
import { HomeCommunity } from '../components/home/HomeCommunity';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CampaignBanners } from '../components/home/CampaignBanners';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. "What's holding you back?" Skill Quiz Section */}
      <HomeSkillQuiz />

      {/* 5. Shop by Skill ("Shop Your Weakness") */}
      <ShopBySkill />

      {/* 6. Featured Merchandise Store Products */}
      <FeaturedProducts />

      {/* 7. Shop by Exam ("Engineered for your Exam") */}
      <ShopByExam />

      {/* 8. SkillSutra Courses with Merch Integration */}
      <HomeCourses />

      {/* 9. Complete Your System / Bundles */}
      <HomeBundles />

      {/* 10. Limited Drop with Countdown Timer */}
      <LimitedDropSection />

      {/* 11. Community / 30-Day Challenge */}
      <HomeCommunity />

      {/* 12. Student Testimonials / Social Proof */}
      <TestimonialsSection />

      {/* 13. Seasonal Campaign Banners */}
      <CampaignBanners />
    </div>
  );
};
