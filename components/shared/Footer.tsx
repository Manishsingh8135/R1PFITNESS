// components/Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='footer' className="bg-black pt-10 pb-10"> {/* Increased top and bottom padding */}
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="md:flex md:justify-between mb-16">
          <div className="mb-6 md:mb-0">
            <a href="https://r1pfitness.com/" className="flex items-center">
              <img
                src="/assets/riplogo1.png"
                className="h-16 mr-3"
                alt="R1PFITNESS GYM Logo"
              />
              <span className="self-center text-3xl font-bold whitespace-nowrap text-white">
                R1PFITNESS GYM
              </span>
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="mb-6 md:mb-0"> {/* Added marg in-top */}
            <h2 className="text-3xl font-bold text-center my-4 mb-6 text-white ">Join Our Community!</h2>
            <form className="flex flex-col mx-auto ml-6">
              <input type="email" placeholder="Your Email" className="py-2 px-10 rounded-full border-2 border-yellow-500" /> {/* More rounded and golden border */}
              <button type="submit" className=" text-white mt-4 p-2 font-bold rounded-full px-4 ml-2 bg-gradient-to-bl from-amber-700 via-yellow-300 to-yellow-800  hover:bg-yellow-300 transition duration-300 cursor-pointer">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Rest of the existing content */}
        <div className='mb-24 w-full'>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-8 mb-8 mx-auto ml-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    R1P Fitness
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Book a tour
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-lg font-bold text-white">
            © 2023 R1P Fitness™. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook className="w-6 h-6" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter className="w-6 h-6" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagram className="w-6 h-6" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
