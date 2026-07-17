"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthenticateSkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
      {/* Glow Blobs and Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float-delay-2 z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side stacked images */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:w-1/3 h-[400px] md:h-[500px]"
          >
            {/* Main stack cards */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%] transform -rotate-12 hover:-rotate-6 transition-all duration-300 z-10 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100">
              <Image
                src="/images/homepage/skills_1.png"
                alt="Professional working at night"
                width={350}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 left-[10%] w-[80%] h-[80%] transform -rotate-6 hover:rotate-0 transition-all duration-300 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-150">
              <Image
                src="/images/homepage/skills_2.png"
                alt="Professional in tech environment"
                width={350}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 top-1/3 bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-3 z-20 transform hover:scale-105 transition-all">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">✓</div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">Assessments</p>
                <p className="text-xs text-slate-800 font-extrabold">100% Authenticated</p>
              </div>
            </div>
          </motion.div>

          {/* Center content */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/3 text-center my-8 md:my-0 z-20 flex flex-col items-center"
          >
            <span className="text-[#f73e5d] font-bold text-sm tracking-wider uppercase bg-[#f73e5d]/10 px-4 py-1.5 rounded-full mb-4">
              Next-Gen Recruitment
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#00418d] mb-6 leading-tight tracking-tight">
              Authenticate <span className="bg-gradient-to-r from-[#00418d] to-[#f73e5d] bg-clip-text text-transparent">Skills</span>,
              <br />
              Simplify <span className="bg-gradient-to-r from-[#f73e5d] to-[#f6c648] bg-clip-text text-transparent">Hiring</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6">
              SkillKwiz ensures professionals are evaluated accurately in their
              chosen fields. Our secure testing centers provide authenticated
              skill assessments, giving you instant access to verified
              reports—eliminating the need for lengthy technical interviews.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00418d] to-[#f73e5d] rounded-full"></div>
          </motion.div>

          {/* Right side stacked images */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full md:w-1/3 h-[400px] md:h-[500px]"
          >
            {/* Main stack cards */}
            <div className="absolute top-0 right-0 w-[80%] h-[80%] transform rotate-9 hover:rotate-3 transition-all duration-300 z-10 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100">
              <Image
                src="/images/homepage/skills_3.png"
                alt="Professional at workstation"
                width={350}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 right-[10%] w-[80%] h-[80%] transform rotate-6 hover:rotate-0 transition-all duration-300 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-150">
              <Image
                src="/images/homepage/skills_4.png"
                alt="Business professional looking at digital interface"
                width={350}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-4 bottom-1/3 bg-white/90 backdrop-blur-md border border-slate-200/50 shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-3 z-20 transform hover:scale-105 transition-all">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">⚡</div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase">Results</p>
                <p className="text-xs text-slate-800 font-extrabold">Instant AI Report</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
