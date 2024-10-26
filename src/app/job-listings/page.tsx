import Link from 'next/link';
import { FaMapMarkerAlt, FaBriefcase, FaSearch } from 'react-icons/fa';

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    status: 'Open',
  },
  {
    id: 2,
    title: 'Digital Marketing Specialist',
    location: 'New York, NY',
    type: 'Full-time',
    status: 'Urgent',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    location: 'San Francisco, CA',
    type: 'Contract',
    status: 'Closed',
  },
];

const statusColors = {
  Open: 'bg-green-100 text-green-700',
  Urgent: 'bg-red-100 text-red-700',
  Closed: 'bg-gray-300 text-gray-700',
};

const JobListings = () => {
  return (
    <section className='bg-gradient-to-br from-gray-50 to-gray-200 py-20'>
      <div className='mx-auto px-6 max-w-7xl container'>
        {/* Section Title */}
        <h2 className='mb-12 font-extrabold text-4xl text-center text-primary-200'>
          Explore Career Opportunities
        </h2>

        {/* Job Cards */}
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className='relative flex flex-col bg-white shadow-md hover:shadow-xl p-8 rounded-xl transition-shadow duration-300'>
                {/* Status Badge */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    statusColors[job.status]
                  }`}>
                  {job.status}
                </span>

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

                {/* Apply Button */}
                <Link
                  href={`/job-listings/${job.id}`}
                  className={`mt-auto inline-block ${
                    job.status === 'Closed'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-200 hover:bg-primary-100'
                  } text-white font-semibold px-6 py-3 rounded-full transition duration-300 ${
                    job.status === 'Closed' ? 'opacity-60' : ''
                  }`}>
                  {job.status === 'Closed' ? 'Closed' : 'View Details'}
                </Link>
              </div>
            ))
          ) : (
            <p className='col-span-full text-center text-gray-500'>
              No jobs found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
