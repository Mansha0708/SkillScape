import React from 'react';
import { Mic, MapPin, Star, Users, Building2, ArrowRight, Phone, Globe2, Shield, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-radial from-navy-600 via-navy-800 to-navy-950">
        <div className="absolute inset-0 bg-navy-950/40"></div>
        <nav className="relative container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">SkillScape</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-white/90 hover:text-white transition-colors">How it Works</a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="relative container mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Connect Local Skills with Local Needs
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Empowering communities through AI-powered skill matching. Connect with opportunities that matter, right in your neighborhood.
              </p>
              <div className="flex space-x-4">
                <button className="group bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition duration-300 flex items-center">
                  Find Work
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300 flex items-center">
                  Hire Talent
                  <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-lg blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80" 
                  alt="Local workers" 
                  className="relative rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-navy-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Why Choose SkillScape</h2>
          <p className="text-white/90 text-center mb-16 max-w-2xl mx-auto">Discover how our platform revolutionizes local skill matching and creates opportunities for everyone.</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-xl bg-navy-800 hover:bg-navy-700 transition-colors duration-300">
              <div className="bg-white/5 p-4 rounded-lg inline-block mb-6 group-hover:bg-white/10 transition-colors">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Voice-Enabled Onboarding</h3>
              <p className="text-white/80">Easy registration process with voice support in multiple languages, making technology accessible to everyone.</p>
            </div>
            <div className="group p-8 rounded-xl bg-navy-800 hover:bg-navy-700 transition-colors duration-300">
              <div className="bg-white/5 p-4 rounded-lg inline-block mb-6 group-hover:bg-white/10 transition-colors">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Hyperlocal Matching</h3>
              <p className="text-white/80">Connect with opportunities and talent in your immediate vicinity, reducing travel time and costs.</p>
            </div>
            <div className="group p-8 rounded-xl bg-navy-800 hover:bg-navy-700 transition-colors duration-300">
              <div className="bg-white/5 p-4 rounded-lg inline-block mb-6 group-hover:bg-white/10 transition-colors">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Trust-Based Rating</h3>
              <p className="text-white/80">Build your reputation through our transparent feedback system, creating trust within the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-navy-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">How It Works</h2>
          <p className="text-white/90 text-center mb-16 max-w-2xl mx-auto">Get started in three simple steps and begin your journey to success.</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-12 group">
                <div className="flex items-center mb-4">
                  <div className="bg-white/5 rounded-lg p-3 mr-4 group-hover:bg-white/10 transition-colors">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Create Your Profile</h3>
                </div>
                <p className="text-white/80 ml-16">Register using our voice-enabled system in your preferred language, making it easy for everyone to join.</p>
              </div>
              <div className="mb-12 group">
                <div className="flex items-center mb-4">
                  <div className="bg-white/5 rounded-lg p-3 mr-4 group-hover:bg-white/10 transition-colors">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Find Local Opportunities</h3>
                </div>
                <p className="text-white/80 ml-16">Get matched with nearby gigs that match your skills and preferences.</p>
              </div>
              <div className="group">
                <div className="flex items-center mb-4">
                  <div className="bg-white/5 rounded-lg p-3 mr-4 group-hover:bg-white/10 transition-colors">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Build Your Reputation</h3>
                </div>
                <p className="text-white/80 ml-16">Earn ratings and build trust within the community through quality work.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                alt="Mobile app demonstration" 
                className="relative rounded-lg shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-24 bg-navy-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">For Businesses</h2>
          <p className="text-white/90 text-center mb-16 max-w-2xl mx-auto">Scale your operations with our enterprise solutions designed for business growth.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl bg-navy-800 hover:bg-navy-700 transition-all duration-300 hover:-translate-y-1">
              <Building2 className="h-12 w-12 text-white mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Premium Listings</h3>
              <p className="text-white/80 mb-6">Get priority access to top talent in your area with enhanced visibility.</p>
              <a href="#contact" className="text-white/90 flex items-center group-hover:text-white">
                Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="group p-8 rounded-xl bg-navy-800 hover:bg-navy-700 transition-all duration-300 hover:-translate-y-1">
              <Users className="h-12 w-12 text-white mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">B2B Licensing</h3>
              <p className="text-white/80 mb-6">Integrate our platform with your existing systems for seamless operations.</p>
              <a href="#contact" className="text-white/90 flex items-center group-hover:text-white">
                Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="group p-8 rounded-xl bg-navy-800 hover:bg-navy-700 transition-all duration-300 hover:-translate-y-1">
              <Phone className="h-12 w-12 text-white mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Custom Solutions</h3>
              <p className="text-white/80 mb-6">Tailored solutions designed specifically for your business needs.</p>
              <a href="#contact" className="text-white/90 flex items-center group-hover:text-white">
                Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-navy-950">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Get Started Today</h2>
            <p className="text-white/90 mb-8">
              Join thousands of skilled professionals and businesses already using SkillScape to grow and succeed.
            </p>
            <button className="group bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition duration-300 flex items-center mx-auto">
              Contact Us
              <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-12 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Globe2 className="h-8 w-8 text-white" />
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">SkillScape</span>
              </div>
              <p className="text-white/80 max-w-sm">
                Empowering local communities through AI-powered skill matching and opportunity creation.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Platform</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">How it Works</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/80">
            <p>&copy; 2025 SkillScape. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
