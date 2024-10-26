import { fetchStarsOfTheMonth } from '@/lib/contentful';
import Image from 'next/image';
import Link from 'next/link';
import { FaCertificate, FaCalendarAlt, FaStar } from 'react-icons/fa';

// Sample data for the hero section
const topStar = {
  name: 'Alice Johnson',
  position: 'Lead Developer',
  image: '/images/alice.jpg',
  achievements:
    'Consistently delivered top-notch code, led the frontend team, and improved the UI/UX of major projects.',
  certificateLink: '/certificates/alice-certificate.pdf',
  month: 'October 2024',
};

const StarOfTheMonthPage = async () => {
  const res = await fetchStarsOfTheMonth();

  const stars = res.map((star: any) => ({
    name: star.fields.name,
    position: star.fields.position,
    image: `https:${star.fields.image.fields.file.url}`,
    achievements: star.fields.achievements,
    certificate: `https:${star.fields.certificate.fields.file.url}`,
    createdAt: star.fields.createdAt,
  }));

  return (
    <section className='bg-gradient-to-br from-gray-50 to-gray-200 py-20'>
      {/* Stars Grid */}
      <div className='mx-auto px-6 max-w-7xl container'>
        <h2 className='mb-12 font-extrabold text-5xl text-center text-primary-200'>
          Other Stars of the Month
        </h2>

        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {stars.map((star, index) => (
            <div
              key={index}
              className='relative flex flex-col items-center bg-white shadow-xl hover:shadow-2xl p-8 rounded-3xl transform transition duration-300 hover:scale-105'>
              {/* Star Icon */}
              <div className='-top-4 -right-4 absolute bg-yellow-300 shadow-lg p-2 rounded-full'>
                <FaStar className='text-2xl text-white' />
              </div>

              {/* Profile Image */}
              <div className='border-4 border-primary-200 mb-4 rounded-full w-32 h-32 overflow-hidden'>
                <Image
                  src={star.image}
                  alt={star.name}
                  width={128}
                  height={128}
                  className='object-cover'
                />
              </div>

              {/* Name and Position */}
              <h3 className='mb-2 font-bold text-2xl text-primary-200'>
                {star.name}
              </h3>
              <p className='mb-2 text-gray-600'>{star.position}</p>

              {/* Month of Recognition */}
              <div className='flex items-center mb-4 text-yellow-600'>
                <FaCalendarAlt className='mr-2' />
                <span className='font-semibold text-lg'>
                  {new Date(star.createdAt).toLocaleString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Achievements */}
              <p className='mb-6 text-center text-gray-700 italic'>
                "{star.achievements}"
              </p>

              {/* Certificate Link */}
              <Link
                href={star.certificate}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center bg-primary-200 hover:bg-primary-100 px-4 py-2 rounded-full font-semibold text-white transition duration-300'>
                <FaCertificate className='mr-2' /> View Certificate
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StarOfTheMonthPage;
