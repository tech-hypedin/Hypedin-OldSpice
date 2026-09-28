function Ticker() {
    const tickerPhrases = [
        'SMELL LIKE A MAN, MAN',
        'I AM ON A HORSE',
        'NO UNFRESH CREATURES ALLOWED',
        'HIGH ENDURANCE PROTOCOL',
        'SWAGGER ACTIVATION DEPLOYED',
        'LOOK AT YOUR DEODORANT, NOW LOOK AT MINE',
        'COMMAND RESPECT. SMELL IRRESISTIBLE',
    ]
  
    return (
        <div className='w-full bg-primary py-3 overflow-hidden select-none border-y border-primary/20'>
            <div className='flex whitespace-nowrap animate-[marquee_20s_linear_infinite] gap-8 items-center text-background text-xs md:text-sm font-secondary uppercase tracking-[0.2em]'>
                {[...tickerPhrases, ...tickerPhrases].map((phrase, idx) => (
                    <div key={idx} className='flex items-center gap-6'>
                        <span>{phrase}</span>
                        <span className='text-background/50 text-xs'>◆</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ticker;