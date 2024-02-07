// Import the trainers data and interfaces from trainersData.tsx
import { trainers, Trainer } from '../../../data/trainersData';
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
// Define the structure for your params
interface TrainerPageParams {
  trainerId: string;
}

// TrainerPage component
const TrainerPage = ({ params }: { params: TrainerPageParams }) => {
  const { trainerId } = params;

  // Find the trainer by ID
  const trainer = trainers.find((t: Trainer) => t.id === trainerId);


  // If no trainer is found, display a not found message
  if (!trainer) {
    return <div>Trainer not found</div>;
  }

  // Render the trainer's details
  return (
    <div className="container mx-auto my-6 p-4 ">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row">
        {/* Trainer Image */}
        <div className="md:w-1/2 px-4">
          <img src={trainer.image} alt={trainer.name} className="w-full h-auto object-cover rounded-lg border border-yellow-500" />
        </div>

        {/* Trainer Details */}
        <div className="md:w-1/2 flex flex-col justify-between p-4 ">
          <div>
            <h1 className="text-6xl font-bold mb-3 ml-4 custom-gradient text-transparent bg-clip-text">{trainer.name}</h1>
            {/* Designation Section */}
            <div>
              {trainer.designations && (
                <div className="rounded-lg  p-4 my-4">
                  <div className="flex flex-row justify-start items-center gap-4">
                    {trainer.designations.map((desig, index) => (
                      <span key={index} className="py-3 px-4 rounded-full border border-custom-gradient">
                        {desig}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
          <div className='border border-yellow-500 rounded-lg p-6  text-white   border-b border-custom-gradient '>
            <p className="font-bold text-2xl  py-3">Experience: {trainer.experience} years</p>


            {/* Specialities */}
            <div className=' py-3'>
              <h2 className="font-bold my-4 text-2xl mt-6">Specialities:</h2>
              <div className='flex flex-wrap gap-2'>
                {trainer.specialities.map((spec, index) => (
                  <div key={index} className='inline-flex items-center p-2 rounded-full border border-white'>
                    {spec}
                  </div>
                ))}
              </div>
            </div>


            {/* <p className="font-bold">Specialities: {trainer.specialities.join(', ')}</p> */}

            {/* Certifications */}
            <div>
              <h2 className="font-bold my-4 text-2xl mt-6">Certifications:</h2>
              <div className='flex flex-wrap gap-2'>
                {trainer.certifications.map((cert, index) => (
                  <div key={index} className='inline-flex items-center p-2 rounded-full border border-white'>
                    {cert.name}
                  </div>
                ))}
              </div>
            </div>


            {/* Social Media Links */}
            <div className="flex mt-3">

              {trainer.socialMedia?.instagram && (
                <a href={`https://instagram.com/${trainer.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="mr-2">
                  {/* Instagram Icon */}

                </a>
              )}
              {/* Other social media icons */}
            </div>
          </div>


          {/* thrird section */}
          <div className="flex flex-row items-center justify-start gap-4 p-2">
            {trainer.socialMedia?.facebook && (
              <Link href={trainer.socialMedia.facebook} passHref>
                <span className="cursor-pointer hover:text-blue-600 ">
                  <FaFacebook size={30} />
                </span>
              </Link>
            )}
            {trainer.socialMedia?.youtube && (
              <Link href={trainer.socialMedia.youtube} passHref>
                <span className="cursor-pointer hover:text-red-600">
                  <FaYoutube size={30} />
                </span>
              </Link>
            )}
            {trainer.socialMedia?.instagram && (
              <Link href={trainer.socialMedia.instagram} passHref>
                <span className="cursor-pointer hover:text-pink-600">
                  <FaInstagram size={30} />
                </span>
              </Link>
            )}
            {trainer.socialMedia?.tiktok && (
              <Link href={trainer.socialMedia.tiktok} passHref>
                <span className="cursor-pointer hover:text-black">
                  <FaTiktok size={30} />
                </span>
              </Link>
            )}
            {trainer.socialMedia?.linkedin && (
              <Link href={trainer.socialMedia.linkedin} passHref>
                <span className="cursor-pointer hover:text-blue-700">
                  <FaLinkedin size={30} />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-12 p-4 md:mt-6 md:px-48 text-center ">
        <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text custom-gradient">About {trainer.name}</h2>
        <p className='2xl'>{trainer.description}</p>
      </div>
    </div>
  );
};

export default TrainerPage;
