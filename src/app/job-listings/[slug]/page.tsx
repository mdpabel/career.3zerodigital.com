import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';

const jobDetails = {
  id: 1,
  title: 'Senior Frontend Developer',
  location: 'Remote',
  type: 'Full-time',
  postedDate: 'October 1, 2024',
  description: `
    We are looking for a highly skilled Frontend Developer to join our growing team. 
    As a Senior Frontend Developer, you will work on exciting projects, develop user-facing features, 
    and ensure the technical feasibility of UI/UX designs.`,
  responsibilities: [
    'Develop new user-facing features using React.js.',
    'Build reusable code and libraries for future use.',
    'Ensure the technical feasibility of UI/UX designs.',
    'Optimize applications for maximum speed and scalability.',
    'Collaborate with backend developers to integrate APIs.',
  ],
  requirements: [
    'Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.',
    'Thorough understanding of React.js and its core principles.',
    'Experience with popular React.js workflows (such as Redux).',
    'Familiarity with RESTful APIs and modern authorization mechanisms.',
    'Knowledge of modern frontend build pipelines and tools.',
  ],
  applyLink: '/apply/frontend-developer',
};

const JobPostDetails = () => {
  return (
    <section className='bg-gray-50 py-20'>
      <div className='mx-auto px-6 max-w-6xl container'>
        {/* Job Title and Info */}
        <div className='top-0 z-50 sticky flex justify-between items-center bg-white shadow-md p-6 rounded-lg'>
          <div>
            <h1 className='mb-2 font-bold text-4xl text-primary-200'>
              {jobDetails.title}
            </h1>
            <div className='flex items-center space-x-4 text-gray-600'>
              <div className='flex items-center'>
                <FaMapMarkerAlt className='mr-2 text-primary-100' />
                <span>{jobDetails.location}</span>
              </div>
              <div className='flex items-center'>
                <FaBriefcase className='mr-2 text-primary-100' />
                <span>{jobDetails.type}</span>
              </div>
              <div className='flex items-center'>
                <FaClock className='mr-2 text-primary-100' />
                <span>Posted on {jobDetails.postedDate}</span>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <a
            href={jobDetails.applyLink}
            className='inline-block bg-primary-200 hover:bg-primary-100 px-6 py-3 rounded-full font-semibold text-white transition duration-300'>
            Apply Now
          </a>
        </div>

        {/* Job Description */}
        <div className='bg-white shadow-lg mt-10 p-8 rounded-lg'>
          <h2 className='mb-6 font-bold text-3xl text-primary-200'>
            Job Description
          </h2>
          <p className='mb-6 text-gray-700 whitespace-pre-line'>
            {jobDetails.description}
          </p>

          {/* Responsibilities */}
          <h3 className='mb-4 font-bold text-2xl text-primary-200'>
            Responsibilities
          </h3>
          <ul className='space-y-3 mb-8 text-gray-700 list-disc list-inside'>
            {jobDetails.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Requirements */}
          <h3 className='mb-4 font-bold text-2xl text-primary-200'>
            Requirements
          </h3>
          <ul className='space-y-3 mb-8 text-gray-700 list-disc list-inside'>
            {jobDetails.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Apply Button at the Bottom */}
          <div className='text-center'>
            <a
              href={jobDetails.applyLink}
              className='inline-block bg-primary-200 hover:bg-primary-100 px-6 py-3 rounded-full font-semibold text-white transition duration-300'>
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPostDetails;
