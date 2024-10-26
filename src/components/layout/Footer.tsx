import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-primary-200 to-primary-100 mt-10 py-10 text-white'>
      <div className='mx-auto px-6 max-w-7xl container'>
        {/* Top Section: Links */}
        <div className='flex md:flex-row flex-col justify-between items-center md:items-start md:space-x-8 space-y-8 md:space-y-0'>
          {/* Logo and About */}
          <div className='flex flex-col items-center md:items-start'>
            <h2 className='mb-3 font-bold text-2xl'>3Zero Digital Careers</h2>
            <p className='max-w-xs text-center text-gray-200 md:text-left'>
              Join our team and shape the future of digital solutions with
              passion, innovation, and creativity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='flex md:flex-row flex-col md:space-x-12 space-y-4 md:space-y-0'>
            {/* Career Links */}
            <div>
              <h3 className='mb-3 font-semibold text-lg'>Explore</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/job-listings'
                    className='hover:text-yellow-300 transition'>
                    Job Listings
                  </Link>
                </li>
                <li>
                  <Link
                    href='/star-of-the-month'
                    className='hover:text-yellow-300 transition'>
                    Star of the Month
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about-us'
                    className='hover:text-yellow-300 transition'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='hover:text-yellow-300 transition'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className='mb-3 font-semibold text-lg'>Resources</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/blog'
                    className='hover:text-yellow-300 transition'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href='/faq'
                    className='hover:text-yellow-300 transition'>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href='/privacy-policy'
                    className='hover:text-yellow-300 transition'>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms'
                    className='hover:text-yellow-300 transition'>
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Links */}
          <div className='flex flex-col items-center md:items-start'>
            <h3 className='mb-3 font-semibold text-lg'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-yellow-300 transition'>
                <FaFacebook />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-yellow-300 transition'>
                <FaLinkedin />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-yellow-300 transition'>
                <FaTwitter />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl hover:text-yellow-300 transition'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className='border-gray-300 mt-8 pt-4 border-t text-center'>
          <p className='text-gray-300'>
            © {new Date().getFullYear()} 3Zero Digital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
