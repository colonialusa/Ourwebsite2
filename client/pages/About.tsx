import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 xl:px-[50px] pt-4 md:pt-6 lg:pt-[30px]">
        <div className="mx-auto max-w-[1820px] h-[60px] md:h-[70px] lg:h-[80px] rounded-[30px] md:rounded-[35px] lg:rounded-[40px] border border-colonial-border bg-white flex items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9178f14664a332d98928a8d74f4bfbf96ad1fa80?width=270" 
              alt="Colonial Consultants Logo" 
              className="h-[40px] md:h-[45px] lg:h-[50px] w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Link to="/" className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors">
              Home
            </Link>
            <Link to="/services" className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors">
              Services
            </Link>
            <Link to="/projects" className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors">
              Projects
            </Link>
            <Link to="/about" className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg bg-colonial-gold/10 text-colonial-navy font-semibold text-sm xl:text-[15px] hover:bg-colonial-gold/20 transition-colors">
              About
            </Link>
            <Link to="/contact" className="px-4 xl:px-6 py-2.5 xl:py-3 rounded-lg text-colonial-gray font-normal text-sm xl:text-[15px] hover:bg-gray-50 transition-colors">
              Contact
            </Link>
          </nav>

          <button className="hidden sm:block px-6 md:px-8 lg:px-10 xl:px-[45px] py-3 md:py-3.5 lg:py-4 rounded-[20px] md:rounded-[22px] lg:rounded-[25px] bg-colonial-navy text-colonial-gold font-semibold text-sm md:text-[15px] hover:bg-colonial-navy/90 transition-colors">
            Get Quote
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-[120px] md:pt-[140px] lg:pt-[160px] pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-colonial-navy to-colonial-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-colonial-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-colonial-purple rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-6 py-3 rounded-[20px] bg-colonial-gold/20 border border-colonial-gold/30">
              <span className="text-colonial-gold font-semibold text-sm">✦ About Colonial Consultants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Simply a Better Experience
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              We don't just design solutions, we redefine possibilities. Our passionate, innovative teams have partnered with clients to turn challenges into bold, practical outcomes since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-colonial-blue font-bold text-sm tracking-[2px] mb-4">OUR STORY</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy mb-6">
                Building Excellence Since 2010
              </h2>
              <div className="space-y-4 text-lg text-colonial-gray leading-relaxed">
                <p>
                  Founded with a vision to transform the engineering consulting landscape, Colonial Consultants has grown from a small team of dedicated professionals into a trusted partner for major projects across multiple industries.
                </p>
                <p>
                  Our journey began with a simple belief: that exceptional engineering requires more than technical expertise—it demands creativity, collaboration, and an unwavering commitment to client success.
                </p>
                <p>
                  Today, we bring together cutting-edge BIM technology, multidisciplinary expertise, and a people-first approach to deliver solutions that don't just meet expectations—they exceed them.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-colonial-blue/5 p-8 rounded-[20px] border border-colonial-border">
                <div className="text-5xl font-bold text-colonial-navy mb-2">500+</div>
                <div className="text-colonial-gray">Projects Completed</div>
              </div>
              <div className="bg-colonial-gold/5 p-8 rounded-[20px] border border-colonial-border">
                <div className="text-5xl font-bold text-colonial-navy mb-2">50+</div>
                <div className="text-colonial-gray">Expert Team Members</div>
              </div>
              <div className="bg-colonial-purple/5 p-8 rounded-[20px] border border-colonial-border">
                <div className="text-5xl font-bold text-colonial-navy mb-2">15+</div>
                <div className="text-colonial-gray">Years Experience</div>
              </div>
              <div className="bg-colonial-green/5 p-8 rounded-[20px] border border-colonial-border">
                <div className="text-5xl font-bold text-colonial-navy mb-2">95%</div>
                <div className="text-colonial-gray">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-colonial-light-bg">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="text-colonial-blue font-bold text-sm tracking-[2px] mb-4">OUR VALUES</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-colonial-gray max-w-3xl mx-auto">
              Our core values shape every project we undertake and every relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-blue/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Excellence</h3>
              <p className="text-colonial-gray leading-relaxed">
                We pursue the highest standards in every aspect of our work, from initial concept through final delivery.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-purple/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Innovation</h3>
              <p className="text-colonial-gray leading-relaxed">
                We embrace cutting-edge technology and creative thinking to solve complex challenges.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-gold/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Collaboration</h3>
              <p className="text-colonial-gray leading-relaxed">
                We believe the best results come from true partnership with our clients and team members.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-green/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Integrity</h3>
              <p className="text-colonial-gray leading-relaxed">
                We operate with transparency, honesty, and unwavering ethical standards in all relationships.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-orange/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Sustainability</h3>
              <p className="text-colonial-gray leading-relaxed">
                We design with the future in mind, prioritizing environmental responsibility and long-term value.
              </p>
            </div>

            {/* Client Focus */}
            <div className="bg-white p-8 rounded-[24px] border border-colonial-border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-colonial-red/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-2xl font-bold text-colonial-navy mb-4">Client Focus</h3>
              <p className="text-colonial-gray leading-relaxed">
                Your success is our success. We tailor our approach to meet your unique needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <div className="text-colonial-blue font-bold text-sm tracking-[2px] mb-4">OUR APPROACH</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-colonial-navy mb-6">
              How We Deliver Excellence
            </h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-colonial-blue text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-colonial-navy mb-3">Discovery & Planning</h3>
                <p className="text-lg text-colonial-gray leading-relaxed">
                  We begin by deeply understanding your vision, constraints, and objectives through collaborative workshops and site analysis.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-colonial-purple text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-colonial-navy mb-3">Design & Engineering</h3>
                <p className="text-lg text-colonial-gray leading-relaxed">
                  Our multidisciplinary teams leverage advanced BIM technology to create innovative, coordinated solutions that optimize every aspect of your project.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-colonial-gold text-colonial-navy rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-colonial-navy mb-3">Collaboration & Coordination</h3>
                <p className="text-lg text-colonial-gray leading-relaxed">
                  We maintain open communication with all stakeholders, conducting clash detection and iterative reviews to ensure seamless execution.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-colonial-green text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-colonial-navy mb-3">Support & Delivery</h3>
                <p className="text-lg text-colonial-gray leading-relaxed">
                  From construction administration to post-occupancy evaluation, we're with you every step of the way to ensure successful project outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-colonial-navy">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Partner with Colonial Consultants for your next project and discover what sets us apart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-10 py-5 rounded-[35px] bg-colonial-gold text-colonial-navy font-semibold text-lg hover:bg-colonial-gold/90 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link 
              to="/projects" 
              className="px-10 py-5 rounded-[35px] border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a252f]">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Colonial Consultants. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
