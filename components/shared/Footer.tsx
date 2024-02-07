// components/Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';


const Footer = () => {
  return (
    <footer id='footer' className="bg-black pt-10 pb-10"> {/* Increased top and bottom padding */}
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="md:flex md:justify-between mb-16">
          <div className="mb-6 md:mb-0">
            <a href="https://r1pfitness.com/" className="md:flex justify-center grid grid-cols-1 align-middle gap-4">
              <img
                src="/assets/riplogo1.png"
                className="h-16 mx-auto"
                alt="R1PFITNESS GYM Logo"
              />
              <span className="self-center text-3xl font-bold whitespace-nowrap   mx-auto  bg-clip-text text-maincolor">
                R1PFITNESS GYM
              </span>
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="mb-6 md:mb-0"> {/* Added marg in-top */}
            <h2 className="text-3xl font-bold text-center my-4 mb-6 text-white ">Join Our Community!</h2>
            <form className="flex flex-col mx-auto ml-6">
              <input type="email" placeholder="Your Email" className="py-4 px-10 mx-4 rounded-full border-2 border-maincolor" /> {/* More rounded and golden border */}
              <button type="submit" className=" text-white mt-4 p-2 py-4 font-bold rounded-full px-4 mx-4 bg-b-gradient  hover:bg-yellow-300 transition duration-300 cursor-pointer">Subscribe</button>
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
                Contact Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 flex items-center">
                  <MdEmail className="mr-2" /> {/* Email icon */}
                  <span>r1pfitnesspr@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <MdPhone className="mr-2" /> {/* Phone icon */}
                  <span>+1 (808) 208-1066</span>
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
              href="https://www.facebook.com/R1PFITNESS/"
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
              href="https://www.instagram.com/r1pfitness/?hl=en"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaInstagram className="w-6 h-6" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCOyBqar6fShlIJ6oRLGuUag"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaYoutube className="w-6 h-6" />
              <span className="sr-only">Youtube </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
