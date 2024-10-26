import Link from 'next/link';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const FeaturedJobs = () => {
  // Sample job data (you can replace this with dynamic data from an API or CMS)
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      location: 'San Francisco, CA',
      type: 'Contract',
    },
  ];

  return (
    <section className='bg-gradient-to-br from-gray-50 to-gray-200 py-20'>
      <div className='mx-auto px-6 max-w-7xl container'>
        {/* Section Title */}
        <h2 className='mb-12 font-extrabold text-4xl text-center text-primary-200'>
          Featured Job Listings
        </h2>

        {/* Job Cards */}
        <div className='gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {jobs.map((job) => (
            <div
              key={job.id}
              className='flex flex-col bg-white shadow-md hover:shadow-xl p-8 rounded-xl transform transition-shadow hover:-translate-y-1 duration-300'>
              {/* Job Title */}
              <h3 className='mb-4 font-bold text-2xl text-primary-200'>
                {job.title}
              </h3>

              {/* Job Details */}
              <div className='flex items-center mb-2 text-gray-600'>
                <FaMapMarkerAlt className='mr-2 text-primary-100' />
                <span>{job.location}</span>
              </div>
              <div className='flex items-center mb-6 text-gray-600'>
                <FaBriefcase className='mr-2 text-primary-100' />
                <span>{job.type}</span>
              </div>

              {/* View Details Button */}
              <Link
                href={`/job-listings/${job.id}`}
                className='inline-block bg-primary-200 hover:bg-primary-100 mt-auto px-6 py-3 rounded-full font-semibold text-white transition duration-300'>
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* View All Jobs Link */}
        <div className='mt-12 text-center'>
          <Link
            href='/job-listings'
            className='inline-block font-semibold text-lg text-primary-200 hover:text-primary-100 transition duration-300'>
            View All Jobs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
