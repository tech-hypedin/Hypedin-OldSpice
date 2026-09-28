function Rewards() {
  const loot = [
    {
      title: 'Upto ₹4,00,000 Prize Pool',
      category: 'Rewards',
      desc: 'Climb the leaderboard with your content and compete for your share of the massive ₹4 Lakh prize pool.',
    },
    // {
    //   title: 'Create Content for a Global Icon',
    //   category: 'Brand Collaboration',
    //   desc: 'Opportunity to create content for global brand',
    // },
    {
      title: 'Showcase Your Talent',
      category: 'Creative Stage',
      desc: 'A dedicated platform to push your creative boundaries, hone your Reel-making skills, and get your work noticed by thousands.',
    },
    {
      title: 'Official Instagram Feature',
      category: 'Brand Recognition',
      desc: 'The top performing reels stands a chance to be featured with Old Spice Instagram handle.',
    }
  ];

  return (
    <section 
      id="loot" 
      className="py-24 bg-neutral-900 text-background relative overflow-hidden font-['Open_Sans']"
    >
      {/* Inline Font Injection - Independent Google Fonts Load */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2">
            The Perks
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-background leading-tight">
            Creativity Gets Rewarded. <br />
            {/* <span className="text-primary">Unconditionally.</span> */}
          </h2>
          <p className="mt-4 text-neutral-400 text-base md:text-lg font-normal">
            Bring your best ideas, produce standout Reels, and lock down serious rewards for your performance.
          </p>
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loot.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 hover:border-primary transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-background mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-700/50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary">
                <span>Perk 0{idx + 1}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Rewards;