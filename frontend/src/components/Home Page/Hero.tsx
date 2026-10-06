import Link from 'next/link';

function Hero() {

  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 bg-background overflow-hidden border-b border-neutral-100 font-['Open_Sans']"
    >
      {/* Inline Font Injection - Independent Google Fonts Load */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              Creator Contest 2026
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-8xl font-bold uppercase text-neutral-950 tracking-tight leading-[1.08]">
              Spray Udega <br />
              <span className="text-primary block mt-1">
                Stick Tikega 
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl">
              Get ready to be part of the Old Spice Creator Contest by HYPEDIN — an exciting opportunity for creators to showcase their creativity, create engaging Reels, and compete for a share of upto ₹4 lakh prize pool.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link 
                href="/apply" 
                className="bg-primary text-background font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-neutral-950 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center"
              >
                Apply Now
              </Link>

              <Link 
                href="#roadmap" 
                className="inline-flex justify-center items-center px-8 py-4 rounded-full border border-neutral-300 text-neutral-800 font-bold text-xs sm:text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300 text-center hover:-translate-y-0.5"
              >
                About the Program
              </Link>
            </div>
          </div>

          {/* Right Column: Reel Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 border-neutral-200/80 bg-neutral-950 shadow-2xl ring-1 ring-black/5 group">

              <video 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                >
                  <source src="/OldSpiceHeroVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;