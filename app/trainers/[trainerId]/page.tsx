import { trainers, Trainer } from '../../../data/trainersData';
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface TrainerPageParams {
  trainerId: string;
}

const TrainerPage = ({ params }: { params: TrainerPageParams }) => {
  const { trainerId } = params;
  const trainer = trainers.find((t: Trainer) => t.id === trainerId);

  if (!trainer) {
    return <div className="text-center text-2xl mt-20">Trainer not found</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-32">
      <div className="flex flex-col md:flex-row">
        <TrainerImage image={trainer.image} name={trainer.name} />
        <TrainerDetails trainer={trainer} />
      </div>
      <TrainerDescription name={trainer.name} description={trainer.description} />
    </div>
  );
};

const TrainerImage = ({ image, name }: { image: string; name: string }) => (
  <div className="md:w-1/2 px-4">
    <div className="w-full h-auto object-cover rounded-lg border border-yellow-500">
      <Image
        src={image}
        alt={name}
        layout="responsive"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
  </div>
);

const TrainerDetails = ({ trainer }: { trainer: Trainer }) => (
  <div className="md:w-1/2 flex flex-col justify-between p-4">
    <div>
      <h1 className="text-4xl md:text-6xl font-bold mb-3 ml-4 text-white text-center md:text-start py-6">{trainer.name}</h1>
      <Designations designations={trainer.designations} />
    </div>
    <TrainerInfo trainer={trainer} />
    <SocialMediaLinks socialMedia={trainer.socialMedia} />
  </div>
);

const Designations = ({ designations }: { designations?: string[] }) => (
  designations && (
    <div className="rounded-lg p-4 my-4">
      <div className="flex flex-wrap justify-start items-center gap-4">
        {designations.map((desig, index) => (
          <span key={index} className="py-3 px-4 rounded-full border border-custom-gradient">
            {desig}
          </span>
        ))}
      </div>
    </div>
  )
);

const TrainerInfo = ({ trainer }: { trainer: Trainer }) => (
  <div className="border border-yellow-500 rounded-lg p-6 text-white">
    <p className="font-bold text-2xl py-3">Experience: {trainer.experience} years</p>
    <InfoSection title="Specialities" items={trainer.specialities} />
    <InfoSection title="Certifications" items={trainer.certifications.map(cert => cert.name)} />
  </div>
);

const InfoSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="py-3">
    <h2 className="font-bold my-4 text-2xl mt-6">{title}:</h2>
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <div key={index} className="inline-flex items-center p-2 rounded-full border border-white">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const SocialMediaLinks = ({ socialMedia }: { socialMedia?: Record<string, string> }) => (
  <div className="flex flex-row items-center justify-start gap-4 p-2 mt-4">
    {socialMedia && Object.entries(socialMedia).map(([platform, url]) => (
      <SocialIcon key={platform} platform={platform} url={url} />
    ))}
  </div>
);

const SocialIcon = ({ platform, url }: { platform: string; url: string }) => {
  const icons = {
    facebook: FaFacebook,
    youtube: FaYoutube,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    linkedin: FaLinkedin
  };
  const Icon = icons[platform as keyof typeof icons];
  return (
    <Link href={url} passHref>
      <span className={`cursor-pointer hover:text-${platform}-600`}>
        <Icon size={30} />
      </span>
    </Link>
  );
};

const TrainerDescription = ({ name, description }: { name: string; description: string }) => (
  <div className="mt-12 p-8 md:mt-16 md:px-16 text-center">
    <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
      About {name}
    </h2>
    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-1">
      <div className="bg-black rounded-3xl p-6">
        <p className="text-xl md:text-2xl font-serif italic text-yellow-100 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default TrainerPage;