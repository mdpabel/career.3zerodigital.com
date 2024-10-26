import Link from 'next/link';

const Hero = () => {
  return (
    <section className='bg-gradient-to-r from-primary-100 to-primary-200 py-20 text-white'>
      <div className='flex flex-col items-center mx-auto px-4 max-w-4xl text-center container'>
        {/* Hero Heading */}
        <h1 className='mb-4 font-bold text-4xl md:text-5xl'>
          Welcome to 3Zero Digital Careers
        </h1>
        <p className='mb-6 text-lg md:text-xl'>
          Explore exciting career opportunities, find your dream job, and
          discover the brightest talents with our "Star of the Month"
          initiative.
        </p>

        {/* Call to Actions */}
        <div className='flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0'>
          <Link
            href='/job-listings'
            className='bg-white hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-primary-200 transition duration-300'>
            Explore Jobs
          </Link>
          <Link
            href='/star-of-the-month'
            className='bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-full font-semibold text-white transition duration-300'>
            Meet the Stars
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
