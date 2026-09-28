import Navbar from '@/src/components/Home Page/Navbar';
import Hero from '@/src/components/Home Page/Hero';
import Ticker from '@/src/components/Home Page/Ticker';
import Pillars from '@/src/components/Home Page/Pillars';
import RoadMap from '@/src/components/Home Page/RoadMap';
import Rewards from '@/src/components/Home Page/Rewards';
import FAQSection from '@/src/components/Home Page/FaqSection';
import Footer from '@/src/components/Home Page/Footer';

export const revalidate = 604800000;

function Home() {
	return (
    	<main className='w-full min-h-screen bg-background'>
    		<Navbar/>
    		<Hero/>
    		<Ticker/>
    		{/* <Pillars/> */}
    		<RoadMap/>
    		<Rewards/>
    		<FAQSection/>
    		<Footer/>
    	</main>
  	);
}

export default Home;