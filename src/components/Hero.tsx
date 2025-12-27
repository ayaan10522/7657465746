import { ChevronRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#074724] to-[#1a3a2d]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#CAA64A] rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#CAA64A] rounded-full blur-3xl animate-float animation-delay-300" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#CAA64A] bg-opacity-20 rounded-full text-[#CAA64A] mb-6">
              <span className="w-2 h-2 bg-[#CAA64A] rounded-full animate-pulse" />
              <span className="text-sm font-medium">Admissions Open 2024-25</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Excellence with <span className="text-[#CAA64A]">Values</span>,
              <br />
              <span className="text-[#CAA64A]">Success</span> with Character
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              A complete K-12 Muslim school with Pre-School, Grades 1-10 (English & Gujarati Medium), 11–12 Science (English & Gujarati), and a Special Girls' School, with Morning and Noon shifts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#admissions"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-[#0F6F3A] text-white hover:bg-[#074724] transition-colors shadow-lg hover:shadow-xl border border-[#074724]"
              >
                Apply for Admission
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#virtual-tour"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-transparent text-white border-2 border-white/20 hover:border-white/40 transition-colors group"
              >
                <span className="mr-2">Take a Virtual Tour</span>
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Play className="h-4 w-4" />
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { number: '25+', label: 'Years of Excellence' },
                { number: '2000+', label: 'Students Enrolled' },
                { number: '100%', label: 'Parent Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#CAA64A] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="relative z-10 bg-[rgba(255,255,255,0.05)] backdrop-blur-lg rounded-3xl p-2 border border-[rgba(255,255,255,0.1)] shadow-2xl">
              <img 
                src="/images/hero-image.jpg" 
                alt="Students at Crescent School" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#CAA64A] text-[#0A1D14] px-4 py-2 rounded-xl font-bold text-sm">
                🏆 Best School Award 2023
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#CAA64A] rounded-full opacity-20 blur-xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0F6F3A] rounded-full opacity-20 blur-xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-school-gold transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default Hero;
