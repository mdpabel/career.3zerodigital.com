import Hero from '@/components/home/Hero';
import FeaturedJobs from '@/components/home/FeaturedJobs';
import StarOfTheMonth from '@/components/home/StarOfTheMonth';
import WhyWorkWithUs from '@/components/home/WhyWorkWithUs';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
      <WhyWorkWithUs />
    </div>
  );
};

export default Home;
