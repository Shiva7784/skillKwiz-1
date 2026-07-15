"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Assessments in Secure Centers",
      backgroundImage: "/images/homepage/Carousel/skill_assessment_light.png",
    },
    {
      title: "Say Goodbye to Technical Interviews!",
      backgroundImage: "/images/homepage/Carousel/Pick - Laptop.jpg",
    },
    {
      title: "Candidate Authentication Eliminating Fraud",
      backgroundImage: "/images/homepage/Carousel/Secure Center.jpg",
    },
    {
      title: "The World's Largest Skill Assessment Library",
      backgroundImage: "/images/homepage/Carousel/Skill Library.jpg",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="min-h-screen bg-white">
      {/* Slideshow Banner starting under transparent fixed header */}
      <div className="w-full h-screen overflow-hidden relative z-10">
        <div className="w-full h-full">
          <div className="relative overflow-hidden bg-white h-full w-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.backgroundImage}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/45"></div>
                </div>

                {/* Content */}
                <div className="relative h-full w-full z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                  <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center bg-[#f73e5d] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-opacity-90 transition-all text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Slider Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-[#f73e5d] w-10" : "bg-white/50 w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="bg-white relative z-20">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
