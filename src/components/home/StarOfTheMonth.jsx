import Image from 'next/image';

const StarOfTheMonth = () => {
  // Sample data for "Star of the Month" (can be replaced with dynamic data)
  const stars = [
    {
      id: 1,
      name: 'Alice Johnson',
      position: 'Lead Developer',
      image: '/images/alice.jpg',
      description:
        'Alice has consistently delivered exceptional work, demonstrating strong leadership skills and technical expertise.',
      certificateLink: '/certificates/alice-certificate.pdf',
    },
    {
      id: 2,
      name: 'Mark Williams',
      position: 'Marketing Manager',
      image: '/images/mark.jpg',
      description:
        'Mark led several successful campaigns this month, contributing significantly to brand growth and awareness.',
      certificateLink: '/certificates/mark-certificate.pdf',
    },
  ];

  return (
    <section className='bg-gray-100 py-16'>
      <div className='mx-auto px-4 max-w-6xl container'>
        {/* Section Title */}
        <h2 className='mb-8 font-bold text-3xl text-center text-primary-100 md:text-4xl'>
          Star of the Month
        </h2>

        {/* Star Cards */}
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2'>
          {stars.map((star) => (
            <div
              key={star.id}
              className='flex flex-col items-center bg-white shadow-lg hover:shadow-xl p-6 rounded-lg transition-shadow duration-300'>
              <div className='mb-4 rounded-full w-32 h-32 overflow-hidden'>
                <Image
                  src={star.image}
                  alt={star.name}
                  width={128}
                  height={128}
                  className='object-cover'
                />
              </div>
              <h3 className='mb-1 font-semibold text-2xl text-primary-200'>
                {star.name}
              </h3>
              <p className='mb-1 text-gray-600'>{star.position}</p>
              <p className='mb-4 text-center text-gray-700'>
                {star.description}
              </p>

              {/* Certificate Button */}
              <a
                href={star.certificateLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary-200 hover:bg-primary-100 px-4 py-2 rounded-full font-semibold text-white transition duration-300'>
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarOfTheMonth;
