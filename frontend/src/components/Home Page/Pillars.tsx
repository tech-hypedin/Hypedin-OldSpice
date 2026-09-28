function Pillars() {
  const pillars = [
    {
      icon: '📦',
      title: 'Product Drop',
      desc: 'Get the exclusive Old Spice roll-on kit delivered straight to your door to fuel your content creation.',
    },
    {
      icon: '🎬',
      title: 'Craft & Film',
      desc: 'Showcase your creativity by producing high-energy Reels that highlight the legendary Old Spice swagger.',
    },
    {
      icon: '🚀',
      title: 'Publish & Scale',
      desc: 'Post your content on Instagram, tag the campaign handles, and drive maximum reach and engagement.',
    },
    {
      icon: '🏆',
      title: 'Compete & Win',
      desc: 'Climb the creator leaderboard based on your content performance and claim your share of the cash rewards.',
    }
  ];

  return (
    <section id="mission" className="py-24 bg-background border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2">
            Campaign Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-secondary uppercase tracking-tight text-neutral-950 leading-tight">
            Creator Directive, <br />
            <span className="text-primary">Made Unstoppable.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-600 font-normal leading-relaxed">
            The Old Spice Creator Contest by HYPEDIN gives you total creative freedom. Receive your product kit, produce standout content, and turn your views into real prize earnings.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-neutral-200 bg-background hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold uppercase text-neutral-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary">
                <span>Phase 0{idx + 1}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pillars;