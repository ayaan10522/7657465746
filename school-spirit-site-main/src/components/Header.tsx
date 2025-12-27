import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "Shifts", href: "#shifts" },
    { name: "Admissions", href: "#admissions" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#074724] text-[#dfe9e4] text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <div>📍 Sarkhej Rd, Near Shahin Tiles Factory, Behind Amber Tower, Al Asbab Society, Makarba, Ahmedabad, Gujarat 380055 • 📞 +91 9824266676 • ✉️ crescentschoolhd@yahoo.co.in</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-[rgba(0,0,0,0.2)] backdrop-blur-md border-b border-[rgba(255,255,255,0.15)] shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Crescent School" 
              className="h-14 w-14 rounded-xl object-cover border-2 border-[#CAA64A]" 
            />
            <div>
              <h1 className="font-bold text-xl text-[#CAA64A] group-hover:text-[#e6c15f] transition-colors">Crescent School</h1>
              <p className="text-xs text-[#b0c0b8]">Excellence with Values</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#CAA64A] transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2.5 text-sm font-medium text-white hover:bg-[rgba(255,255,255,0.1)] hover:text-[#CAA64A] rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#admissions"
                className="ml-2 px-5 py-2.5 bg-[#0F6F3A] text-white rounded-xl text-sm font-medium hover:bg-[#074724] transition-colors shadow-md border border-[#074724]"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A1D14] border-t border-[rgba(255,255,255,0.15)] shadow-lg">
              <div className="px-4 py-3 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 text-sm font-medium text-white hover:bg-[rgba(255,255,255,0.05)] hover:text-[#CAA64A] rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#admissions"
                  className="block px-4 py-3 text-sm font-medium text-center bg-[#0F6F3A] text-white rounded-lg hover:bg-[#074724] transition-colors mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
