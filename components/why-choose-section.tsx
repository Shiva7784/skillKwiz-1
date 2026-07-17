"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyChooseSection() {
  return (
    <section className="py-24 text-white relative overflow-hidden">
      {/* Main container with blue background and center glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/homepage/why_choose_banner_2.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Deep blue color overlay and a center radial glow block */}
        <div className="absolute inset-0 bg-[#001f4d]/85 mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 to-transparent blur-3xl rounded-full z-0 pointer-events-none"></div>

        {/* Globe animation on background */}
        <div className="absolute inset-0 flex justify-center items-center opacity-30">
          <img
            src="/images/homepage/home_globe.gif"
            alt=""
            className="w-full max-w-4xl h-full object-cover"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight">
          Why Choose{" "}
          <span className="text-white">
            Skill<span className="text-[#f73e5d]">Kwiz</span>
          </span>{" "}
          ?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-slate-300 text-sm md:text-base leading-relaxed">
          Discover our unique value propositions designed to enhance your
          recruitment strategy.
          <br />
          Experience the difference SkillKwiz can make in your organization.
        </p>

        {/* Card container - responsive flexbox layout */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto mb-16 relative z-10 px-4">
          {/* Skill Library Card - Tilted Left */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group bg-slate-950/40 backdrop-blur-md rounded-2xl p-8 text-white max-w-xs w-full md:w-64 flex flex-col justify-between border border-white/10 hover:border-[#f73e5d]/40 transition-all duration-300 transform md:rotate-[-6deg] hover:md:rotate-0 hover:-translate-y-4 hover:scale-105 hover:z-30 hover:shadow-[0_20px_50px_rgba(247,62,93,0.15)] cursor-pointer"
          >
            <div>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f73e5d]/20 to-white/5 rounded-full flex items-center justify-center border border-[#f73e5d]/30 p-2 transition-all duration-300 group-hover:border-[#f73e5d]/60">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/homepage/books.gif"
                      alt=""
                      className="w-12 h-12 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold text-center mb-3 group-hover:text-[#f73e5d] transition-colors">
                Skill Library
              </h3>
              <p className="text-slate-300 text-center text-sm leading-relaxed">
                Access our extensive library of skill assessments covering
                technical, professional, and soft skills for comprehensive
                candidate evaluation.
              </p>
            </div>
          </motion.div>

          {/* Secure Testing Card - Center */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="group bg-slate-950/40 backdrop-blur-md rounded-2xl p-8 text-white max-w-xs w-full md:w-64 flex flex-col justify-between border border-white/10 hover:border-[#3b82f6]/40 transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 hover:z-30 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] cursor-pointer"
          >
            <div>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3b82f6]/20 to-white/5 rounded-full flex items-center justify-center border border-[#3b82f6]/30 p-2 transition-all duration-300 group-hover:border-[#3b82f6]/60">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/homepage/guard.gif"
                      alt=""
                      className="w-12 h-12 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold text-center mb-3 group-hover:text-[#3b82f6] transition-colors">
                Secure Testing
              </h3>
              <p className="text-slate-300 text-center text-sm leading-relaxed">
                Our testing is done in secure content-aware environments.
                Candidates are authenticated through multiple identification
                layers including biometric verification such as facial
                recognition, security numbers, which are then periodically
                validated throughout the test.
              </p>
            </div>
          </motion.div>

          {/* Flexible Pricing Card - Tilted Right */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="group bg-slate-950/40 backdrop-blur-md rounded-2xl p-8 text-white max-w-xs w-full md:w-64 flex flex-col justify-between border border-white/10 hover:border-[#f6c648]/40 transition-all duration-300 transform md:rotate-[6deg] hover:md:rotate-0 hover:-translate-y-4 hover:scale-105 hover:z-30 hover:shadow-[0_20px_50px_rgba(246,198,72,0.15)] cursor-pointer"
          >
            <div>
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#f6c648]/20 to-white/5 rounded-full flex items-center justify-center border border-[#f6c648]/30 p-2 transition-all duration-300 group-hover:border-[#f6c648]/60">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/homepage/dollar.gif"
                      alt=""
                      className="w-12 h-12 object-contain"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-white text-xl font-bold text-center mb-3 group-hover:text-[#f6c648] transition-colors">
                Flexible Pricing
              </h3>
              <p className="text-slate-300 text-center text-sm leading-relaxed">
                Our pricing model is designed to scale with your needs. Pay only
                for what you use with our credit-based system. Larger
                organizations can benefit from our Enterprise plan with unlimited
                testing and custom features.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16 md:mt-12 relative z-20">
          <h3 className="text-2xl font-bold mb-4">
            Join the Talent Revolution
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-sm">
            Take the first step towards transforming your hiring process. Make
            selections in line with our tried and tested platform.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-[#f7d03e] text-black px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
