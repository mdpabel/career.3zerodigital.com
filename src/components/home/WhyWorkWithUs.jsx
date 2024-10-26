import {
  FaHandsHelping,
  FaUserGraduate,
  FaChartLine,
  FaCoffee,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaHandsHelping className='mb-4 text-4xl' />,
    title: 'Collaborative Environment',
    description:
      'We foster a team-oriented culture where ideas are shared, and everyone’s voice is valued.',
  },
  {
    icon: <FaUserGraduate className='mb-4 text-4xl' />,
    title: 'Continuous Learning',
    description:
      'We support your career growth with training, workshops, and opportunities to upskill.',
  },
  {
    icon: <FaChartLine className='mb-4 text-4xl' />,
    title: 'Career Growth',
    description:
      'We encourage professional development and offer clear paths for advancement within the company.',
  },
  {
    icon: <FaCoffee className='mb-4 text-4xl' />,
    title: 'Work-Life Balance',
    description:
      'Enjoy flexible working hours and wellness programs to ensure a healthy work-life balance.',
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className='bg-gradient-to-br from-primary-100 to-primary-200 py-20 text-white'>
      <div className='mx-auto px-6 max-w-6xl container'>
        {/* Section Title */}
        <h2 className='mb-12 font-extrabold text-5xl text-center'>
          Why Work With Us
        </h2>

        {/* Benefits Grid */}
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='bg-white bg-opacity-10 shadow-lg p-8 rounded-xl transition-transform duration-300 hover:scale-105'>
              <div className='flex flex-col items-center text-center'>
                {/* Icon */}
                <div>{benefit.icon}</div>
                {/* Title */}
                <h3 className='mt-4 mb-2 font-bold text-2xl'>
                  {benefit.title}
                </h3>
                {/* Description */}
                <p className='text-gray-200'>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
